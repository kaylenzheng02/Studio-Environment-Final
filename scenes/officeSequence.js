export const createOfficeSequenceState = () => {
    let officeSequenceTimeoutId = null;
    let officeSequenceIndex = 0;

    const clearOfficeSequenceTimer = () => {
        if (!officeSequenceTimeoutId) {
            return;
        }
        window.clearTimeout(officeSequenceTimeoutId);
        officeSequenceTimeoutId = null;
    };

    const bindTransitions = ({
        officeSequenceImages,
        officeFirstDelayMs,
        officeSequenceDelayMs,
        office7PostItDelayMs,
        getIsTransitioning,
        setIsTransitioning,
        instantSwapScene,
        stopOfficeTickSound,
        scheduleOfficeSevenPostItAfterDelay,
        hideMyliege,
        removeOfficeSevenPostIt,
        startOfficeTickSound,
    }) => {
        const scheduleNextOfficeScene = () => {
            if (officeSequenceIndex >= officeSequenceImages.length) {
                clearOfficeSequenceTimer();
                stopOfficeTickSound();
                scheduleOfficeSevenPostItAfterDelay(office7PostItDelayMs);
                return;
            }

            clearOfficeSequenceTimer();
            const nextDelay = officeSequenceIndex === 0 ? officeFirstDelayMs : officeSequenceDelayMs;
            officeSequenceTimeoutId = window.setTimeout(() => {
                if (getIsTransitioning()) {
                    scheduleNextOfficeScene();
                    return;
                }

                setIsTransitioning(true);
                instantSwapScene(officeSequenceImages[officeSequenceIndex], () => {
                    officeSequenceIndex += 1;
                    scheduleNextOfficeScene();
                });
            }, nextDelay);
        };

        const startOfficeSequence = () => {
            hideMyliege();
            removeOfficeSevenPostIt();
            officeSequenceIndex = 0;
            startOfficeTickSound();
            scheduleNextOfficeScene();
        };

        return { startOfficeSequence, scheduleNextOfficeScene };
    };

    return { clearOfficeSequenceTimer, bindTransitions };
};
