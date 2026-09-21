export const createMushroomSequenceState = () => {
    let mushroomSequenceTimeoutId = null;
    let mushroomSequenceIndex = 0;

    const clearMushroomSequenceTimer = () => {
        if (!mushroomSequenceTimeoutId) {
            return;
        }
        window.clearTimeout(mushroomSequenceTimeoutId);
        mushroomSequenceTimeoutId = null;
    };

    const bindTransitions = ({
        mushroomSequenceImages,
        mushroomSceneSwapDelayMs,
        startTransitionFadeInMs,
        getIsTransitioning,
        setIsTransitioning,
        instantSwapScene,
        transitionToSceneFadeInOnly,
        exitForestBlueShoesChoiceToNewScene,
        startMushroomIntroPostIt,
    }) => {
        const scheduleNextMushroomScene = () => {
            if (mushroomSequenceIndex >= mushroomSequenceImages.length) {
                clearMushroomSequenceTimer();
                return;
            }

            clearMushroomSequenceTimer();
            mushroomSequenceTimeoutId = window.setTimeout(() => {
                if (getIsTransitioning()) {
                    scheduleNextMushroomScene();
                    return;
                }

                setIsTransitioning(true);
                instantSwapScene(
                    mushroomSequenceImages[mushroomSequenceIndex],
                    () => {
                        mushroomSequenceIndex += 1;
                        scheduleNextMushroomScene();
                    },
                    { preserveMyliege: true }
                );
            }, mushroomSceneSwapDelayMs);
        };

        const startMushroomSequence = () => {
            if (!mushroomSequenceImages.length || getIsTransitioning()) {
                return;
            }

            exitForestBlueShoesChoiceToNewScene();
            mushroomSequenceIndex = 0;
            transitionToSceneFadeInOnly(
                mushroomSequenceImages[mushroomSequenceIndex],
                startTransitionFadeInMs,
                () => {
                    startMushroomIntroPostIt();
                    mushroomSequenceIndex += 1;
                    scheduleNextMushroomScene();
                }
            );
        };

        return { startMushroomSequence, scheduleNextMushroomScene };
    };

    return { clearMushroomSequenceTimer, bindTransitions };
};
