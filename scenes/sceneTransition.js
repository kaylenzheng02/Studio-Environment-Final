export const createSceneTransitions = ({
    imageContainer,
    sceneBackground,
    sceneFade,
    hideMyliege,
    hideForestBlueShoesOverlay,
    clearMushroomSequenceTimer,
    setIsTransitioning,
    sceneFadeInMs,
    sceneFadeOutMs,
}) => {
    const shouldContainScene = (scenePath) => {
        if (typeof scenePath !== "string") {
            return false;
        }
        const normalized = scenePath.toLowerCase();
        return (
            normalized.includes("fallingdown")
            || normalized.includes("matri")
            || normalized.includes("theend")
        );
    };

    const applyBackgroundFitForScene = (scenePath) => {
        if (!sceneBackground) {
            return;
        }
        sceneBackground.style.objectFit = shouldContainScene(scenePath) ? "contain" : "cover";
    };

    const setMainSceneBackground = (scenePath) => {
        if (!sceneBackground) {
            return;
        }
        sceneBackground.src = scenePath;
        applyBackgroundFitForScene(scenePath);
    };

    const transitionToSceneFadeInOnly = (targetScene, fadeInMs, onComplete) => {
        hideMyliege();
        hideForestBlueShoesOverlay();
        clearMushroomSequenceTimer();
        setIsTransitioning(true);

        if (!imageContainer || !sceneBackground) {
            setMainSceneBackground(targetScene);
            setIsTransitioning(false);
            if (onComplete) {
                onComplete();
            }
            return;
        }

        const overlayScene = document.createElement("img");
        overlayScene.className = "background";
        overlayScene.src = targetScene;
        overlayScene.alt = "";
        overlayScene.style.opacity = "0";
        overlayScene.style.zIndex = "20";
        overlayScene.style.pointerEvents = "none";
        overlayScene.style.objectFit = shouldContainScene(targetScene) ? "contain" : "cover";
        overlayScene.style.transition = `opacity ${fadeInMs}ms ease`;
        imageContainer.appendChild(overlayScene);

        const finish = () => {
            setMainSceneBackground(targetScene);
            overlayScene.remove();
            setIsTransitioning(false);
            if (onComplete) {
                onComplete();
            }
        };

        const startFadeIn = () => {
            requestAnimationFrame(() => {
                overlayScene.style.opacity = "1";
            });
            window.setTimeout(finish, fadeInMs);
        };

        overlayScene.addEventListener("load", startFadeIn, { once: true });
        if (overlayScene.complete && overlayScene.naturalWidth > 0) {
            startFadeIn();
        }
    };

    const transitionToScene = (targetScene, onComplete, options = {}) => {
        hideMyliege();
        hideForestBlueShoesOverlay();
        clearMushroomSequenceTimer();
        setIsTransitioning(true);
        const fadeInMs = options.fadeInMs ?? sceneFadeInMs;
        const fadeOutMs = options.fadeOutMs ?? sceneFadeOutMs;
        const useWhiteOverlay = options.useWhiteOverlay ?? true;
        const crossfadeEase = options.crossfadeEase ?? "ease";

        if (!sceneFade) {
            setMainSceneBackground(targetScene);
            setIsTransitioning(false);
            if (onComplete) {
                onComplete();
            }
            return;
        }

        if (!useWhiteOverlay) {
            if (!imageContainer) {
                setMainSceneBackground(targetScene);
                setIsTransitioning(false);
                if (onComplete) {
                    onComplete();
                }
                return;
            }

            const overlayScene = document.createElement("img");
            overlayScene.className = "background";
            overlayScene.src = targetScene;
            overlayScene.alt = "";
            overlayScene.style.opacity = "0";
            overlayScene.style.zIndex = "1";
            overlayScene.style.pointerEvents = "none";
            overlayScene.style.objectFit = shouldContainScene(targetScene) ? "contain" : "cover";
            overlayScene.style.transition = `opacity ${fadeInMs}ms ${crossfadeEase}`;
            imageContainer.appendChild(overlayScene);

            let hasStarted = false;
            const startCrossfade = () => {
                if (hasStarted) {
                    return;
                }
                hasStarted = true;

                // Only start fading out the old image once the new overlay is ready,
                // to avoid seeing white/empty background during swap
                sceneBackground.style.transition = `opacity ${fadeOutMs}ms ${crossfadeEase}`;
                sceneBackground.style.opacity = "0";

                requestAnimationFrame(() => {
                    overlayScene.style.opacity = "1";
                });
            };

            overlayScene.addEventListener("load", startCrossfade, { once: true });
            if (overlayScene.complete && overlayScene.naturalWidth > 0) {
                startCrossfade();
            }

            window.setTimeout(() => {
                setMainSceneBackground(targetScene);
                sceneBackground.style.opacity = "1";
                sceneBackground.style.transition = "";
                overlayScene.remove();
                setIsTransitioning(false);
                if (onComplete) {
                    onComplete();
                }
            }, Math.max(fadeInMs, fadeOutMs));
            return;
        }

        sceneFade.style.transition = `opacity ${fadeInMs}ms ease`;
        sceneFade.classList.remove("fade-out");
        sceneFade.classList.add("fade-in");

        window.setTimeout(() => {
            setMainSceneBackground(targetScene);
            sceneFade.style.transition = `opacity ${fadeOutMs}ms ease`;

            window.setTimeout(() => {
                sceneFade.classList.remove("fade-in");
                sceneFade.classList.add("fade-out");
                setIsTransitioning(false);
                if (onComplete) {
                    onComplete();
                }
            }, fadeOutMs);
        }, fadeInMs);
    };

    const instantSwapScene = (targetScene, onComplete, options = {}) => {
        const preserveMyliege = options.preserveMyliege ?? false;
        if (!preserveMyliege) {
            hideMyliege();
        }
        hideForestBlueShoesOverlay();
        clearMushroomSequenceTimer();
        // Cover the existing background with a new loaded image so we don't see white/blank.
        if (!imageContainer || !sceneBackground) {
            setMainSceneBackground(targetScene);
            if (onComplete) {
                onComplete();
            }
            return;
        }

        const overlayScene = document.createElement("img");
        overlayScene.className = "background";
        overlayScene.src = targetScene;
        overlayScene.alt = "";
        overlayScene.style.opacity = "1";
        overlayScene.style.zIndex = "20";
        overlayScene.style.pointerEvents = "none";
        overlayScene.style.objectFit = shouldContainScene(targetScene) ? "contain" : "cover";

        const finish = () => {
            setMainSceneBackground(targetScene);
            overlayScene.remove();
            setIsTransitioning(false);
            if (onComplete) {
                onComplete();
            }
        };

        overlayScene.addEventListener("load", finish, { once: true });
        overlayScene.addEventListener("error", () => {
            // Fallback: if load fails, just swap.
            setMainSceneBackground(targetScene);
            overlayScene.remove();
            setIsTransitioning(false);
            if (onComplete) {
                onComplete();
            }
        }, { once: true });
    };

    return {
        transitionToSceneFadeInOnly,
        transitionToScene,
        instantSwapScene,
    };
};
