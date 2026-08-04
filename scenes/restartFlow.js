import { createPostItDiv, createPostItText } from "../postit.js";

export const createRestartFlowModule = ({
    imageContainer,
    shoeWrapper,
    getOfficeSevenPostIt,
    setOfficeSevenPostIt,
    moveOfficeSevenPostItToCenter,
    applyTypewriterVars,
    startGoodNightHumSound,
    stopGoodNightHumSound,
    startTypewriterSound,
    stopTypewriterSound,
    getIsTransitioning,
    clearOfficeSequenceTimer,
    stopOfficeTickSound,
    hideMyliege,
    removeOfficeSevenPostIt,
    clearAllPostIts,
    setNextSceneStep,
    resetOpenSceneInteractionState,
    transitionToScene,
    openSceneImage,
    restoreOpenSceneIntroPrompt,
    startTransitionFadeInMs,
    startTransitionFadeOutMs,
    transitionToSceneFadeInOnly,
    office7SceneImage,
    office7FadeInMs,
    setRestartPostItTimerId,
    restartPostItDelayMs,
    goodNightToOffice7DelayMs,
    office5GoodNightText,
    restartText,
}) => {
    const showRestartPostIt = () => {
        if (!imageContainer || getOfficeSevenPostIt()) {
            return;
        }
        stopOfficeTickSound();
        startGoodNightHumSound();

        const officeSevenPostIt = createPostItDiv({
            className: "post-it office-seven-post-it show typing",
            mode: "restart",
        });
        setOfficeSevenPostIt(officeSevenPostIt);

        const restartTextNode = createPostItText({
            text: restartText,
            className: "post-it-text post-it-text-bold",
        });
        applyTypewriterVars(restartTextNode, restartText);

        officeSevenPostIt.appendChild(restartTextNode);
        imageContainer.appendChild(officeSevenPostIt);
        moveOfficeSevenPostItToCenter();
        startTypewriterSound();

        restartTextNode.addEventListener("animationend", (typedEvent) => {
            if (typedEvent.animationName !== "type-note") {
                return;
            }
            getOfficeSevenPostIt()?.classList.remove("typing");
            stopTypewriterSound();
        }, { once: true });

        officeSevenPostIt.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (getIsTransitioning()) {
                return;
            }

            clearOfficeSequenceTimer();
            stopOfficeTickSound();
            stopGoodNightHumSound();
            hideMyliege();
            removeOfficeSevenPostIt();
            clearAllPostIts();
            setNextSceneStep(0);
            resetOpenSceneInteractionState?.();

            transitionToScene(
                openSceneImage,
                () => {
                    if (shoeWrapper) {
                        shoeWrapper.style.display = "";
                    }
                    restoreOpenSceneIntroPrompt?.();
                },
                { fadeInMs: startTransitionFadeInMs, fadeOutMs: startTransitionFadeOutMs }
            );
        });
    };

    const showGoodNightPostItCenterThenOffice7Fade = () => {
        stopOfficeTickSound();
        hideMyliege();
        if (!imageContainer || getOfficeSevenPostIt()) {
            return;
        }
        startGoodNightHumSound();

        const officeSevenPostIt = createPostItDiv({
            className: "post-it office-seven-post-it show typing",
            mode: "mushroomdeath-goodnight",
        });
        setOfficeSevenPostIt(officeSevenPostIt);

        const goodNightText = createPostItText({
            text: office5GoodNightText,
            className: "post-it-text post-it-text-bold",
        });
        applyTypewriterVars(goodNightText, office5GoodNightText);

        officeSevenPostIt.appendChild(goodNightText);
        imageContainer.appendChild(officeSevenPostIt);
        moveOfficeSevenPostItToCenter();
        startTypewriterSound();

        goodNightText.addEventListener("animationend", (typedEvent) => {
            if (typedEvent.animationName !== "type-note") {
                return;
            }
            getOfficeSevenPostIt()?.classList.remove("typing");
            stopTypewriterSound();
            window.setTimeout(() => {
                if (getIsTransitioning()) {
                    stopGoodNightHumSound();
                    return;
                }
                transitionToSceneFadeInOnly(
                    office7SceneImage,
                    office7FadeInMs,
                    () => {
                        removeOfficeSevenPostIt();
                        setRestartPostItTimerId(window.setTimeout(() => {
                            showRestartPostIt();
                            setRestartPostItTimerId(null);
                        }, restartPostItDelayMs));
                    }
                );
            }, goodNightToOffice7DelayMs);
        }, { once: true });
    };

    return {
        showRestartPostIt,
        showGoodNightPostItCenterThenOffice7Fade,
    };
};
