import {
    AM_TREE_SCENE_IMAGE,
    AM_TREE_TRANSITION_MS,
    DISCOMB_OUTCOME_CLEAR_AFTER_NOTE_MS,
    FALLING_ASLEEP_SCENE_IMAGE,
    FOREST_BLUE_SCENE_IMAGE,
    GRASS_SCENE_IMAGE,
    MYLIEGE_GRASS_NOTE_TEXT,
    MYLIEGE_IMAGE,
    MYLIEGE_SECONDARY_DEFAULT_IMAGE,
    MYLIEGE_SECONDARY_GRASS_IMAGE,
    NEXT_SCENE_TEXT,
    OFFICE_SCENE_IMAGE,
    PARTNER_PART1_SCENE_IMAGE,
    PARTNER_PART2_SCENE_IMAGE,
    PARTNER_PARTING_SCENE_IMAGE,
    PARTNER_C1_SCENE_IMAGE,
    FIGHT_IFIGH_SCENE_IMAGE,
    FIGHT_BLOOD_SCENE_IMAGE,
    FIGHT_MATRI_SCENE_IMAGE,
    FIGHT_AFTER_STEPS_SCENE_IMAGE,
    FIGHT_AFTER_EXIT_SCENE_IMAGE,
    DONE_WORKN_SCENE_IMAGE,
    DONE_SIDEWALK_SCENE_IMAGE,
    REDG_GIRL_SEQUENCE_G1_IMAGE,
    SCENE_FADE_IN_MS,
    SCENE_FADE_OUT_MS,
    START_TRANSITION_FADE_IN_MS,
    START_TRANSITION_FADE_OUT_MS,
} from "../constants.js";
import { createPostItDiv, createPostItText } from "../postit.js";

export const createNextSceneRouter = (deps) => {
    let nextScenePostIt = null;
    let partnerRecapOverlay = null;
    let onPartnerRecapOk = null;
    let worknRecapOverlay = null;
    let onWorknRecapOk = null;
    let worknChoiceOverlay = null;
    let onWorknChoiceDone = null;
    let partnerPart2NextAwaiting = false;
    let fightBloodNextAwaiting = false;
    let fightMatriNextAwaiting = false;
    let fightStepsNextAwaiting = false;

    const removePartnerRecapOverlay = () => {
        partnerRecapOverlay?.remove();
        partnerRecapOverlay = null;
    };

    const removeWorknRecapOverlay = () => {
        worknRecapOverlay?.remove();
        worknRecapOverlay = null;
    };

    const removeWorknChoiceOverlay = () => {
        worknChoiceOverlay?.remove();
        worknChoiceOverlay = null;
    };

    const showPartnerRecapOverlay = () => {
        if (!deps.imageContainer || partnerRecapOverlay) {
            return;
        }

        const recapOverlay = document.createElement("div");
        recapOverlay.className = "wake-up-solved-overlay show";

        const recapStack = document.createElement("div");
        recapStack.className = "mushroom-refusal-stack";

        const recapNote = document.createElement("div");
        recapNote.className = "post-it am-tree-recap-note show";
        recapNote.style.pointerEvents = "auto";

        const recapTitle = document.createElement("p");
        recapTitle.className = "mushroom-refusal-instruction-lead";
        recapTitle.textContent = "Recap";

        const recapParagraph = document.createElement("p");
        recapParagraph.className = "mushroom-refusal-paragraph";
        recapParagraph.textContent = "he saved a girl who appeared in that strange white space...he wonders if he should've killed her. but theyve become travelling partners for now. they looked everywhere, deep into the leafy environment hoping to find a sign, an exit. nothing appeared. the girl grew tired and they both took a pit stop. she ate the rest of the mushrooms, he stood, watching for danger...";

        const recapFooter = document.createElement("div");
        recapFooter.className = "am-tree-recap-footer";

        const signatureRow = document.createElement("label");
        signatureRow.className = "am-tree-signature-row";

        const signX = document.createElement("span");
        signX.className = "am-tree-signature-x";
        signX.textContent = "x";

        const signatureInput = document.createElement("input");
        signatureInput.className = "am-tree-signature-input";
        signatureInput.type = "text";
        signatureInput.placeholder = "signature";
        signatureInput.maxLength = 32;
        signatureInput.autocomplete = "off";
        signatureInput.spellcheck = false;

        const okButton = document.createElement("button");
        okButton.className = "am-tree-recap-ok";
        okButton.classList.add("ok-confirm");
        okButton.type = "button";
        okButton.textContent = "ok";
        okButton.disabled = true;

        signatureRow.appendChild(signX);
        signatureRow.appendChild(signatureInput);
        recapFooter.appendChild(signatureRow);
        recapFooter.appendChild(okButton);
        recapNote.appendChild(recapTitle);
        recapNote.appendChild(recapParagraph);
        recapNote.appendChild(recapFooter);
        recapStack.appendChild(recapNote);
        recapOverlay.appendChild(recapStack);
        deps.imageContainer.appendChild(recapOverlay);
        partnerRecapOverlay = recapOverlay;

        signatureInput.addEventListener("input", () => {
            okButton.disabled = signatureInput.value.trim().length === 0;
        });

        okButton.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (deps.getIsTransitioning()) {
                return;
            }
            if (signatureInput.value.trim().length === 0) {
                signatureInput.focus();
                return;
            }
            okButton.classList.add("is-pressed");
            okButton.disabled = true;
            window.setTimeout(() => {
                removePartnerRecapOverlay();
                onPartnerRecapOk?.();
                onPartnerRecapOk = null;
            }, 60);
        });
    };

    const showWorknRecapOverlay = () => {
        if (!deps.imageContainer || worknRecapOverlay) {
            return;
        }

        const recapOverlay = document.createElement("div");
        recapOverlay.className = "wake-up-solved-overlay show";

        const recapStack = document.createElement("div");
        recapStack.className = "mushroom-refusal-stack";

        const recapNote = document.createElement("div");
        recapNote.className = "post-it am-tree-recap-note show";
        recapNote.style.pointerEvents = "auto";

        const recapTitle = document.createElement("p");
        recapTitle.className = "mushroom-refusal-instruction-lead";
        recapTitle.textContent = "Recap";

        const recapParagraph = document.createElement("p");
        recapParagraph.className = "mushroom-refusal-paragraph";
        recapParagraph.textContent = "oh my god...did he actually kill someone.... that's literally illegal. let me trace back his steps. he gave her mushrooms that had been out for a while, she took a break to eat them. then it went downhill from there....he thinks that she was poisoned and also possessed, unleashing a monster. he took the sword he was gifted and killed her...it was the right thing to do... the ghost of the girl appeared as an exit...";

        const recapFooter = document.createElement("div");
        recapFooter.className = "am-tree-recap-footer";

        const signatureRow = document.createElement("label");
        signatureRow.className = "am-tree-signature-row";

        const signX = document.createElement("span");
        signX.className = "am-tree-signature-x";
        signX.textContent = "x";

        const signatureInput = document.createElement("input");
        signatureInput.className = "am-tree-signature-input";
        signatureInput.type = "text";
        signatureInput.placeholder = "signature";
        signatureInput.maxLength = 32;
        signatureInput.autocomplete = "off";
        signatureInput.spellcheck = false;

        const okButton = document.createElement("button");
        okButton.className = "am-tree-recap-ok";
        okButton.classList.add("ok-confirm");
        okButton.type = "button";
        okButton.textContent = "ok";
        okButton.disabled = true;

        signatureRow.appendChild(signX);
        signatureRow.appendChild(signatureInput);
        recapFooter.appendChild(signatureRow);
        recapFooter.appendChild(okButton);
        recapNote.appendChild(recapTitle);
        recapNote.appendChild(recapParagraph);
        recapNote.appendChild(recapFooter);
        recapStack.appendChild(recapNote);
        recapOverlay.appendChild(recapStack);
        deps.imageContainer.appendChild(recapOverlay);
        worknRecapOverlay = recapOverlay;

        signatureInput.addEventListener("input", () => {
            okButton.disabled = signatureInput.value.trim().length === 0;
        });

        okButton.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (deps.getIsTransitioning()) {
                return;
            }
            if (signatureInput.value.trim().length === 0) {
                signatureInput.focus();
                return;
            }
            okButton.classList.add("is-pressed");
            okButton.disabled = true;
            window.setTimeout(() => {
                removeWorknRecapOverlay();
                onWorknRecapOk?.();
                onWorknRecapOk = null;
            }, 60);
        });
    };

    const showWorknChoiceOverlay = () => {
        if (!deps.imageContainer || worknChoiceOverlay) {
            return;
        }

        const choiceOverlay = document.createElement("div");
        choiceOverlay.className = "wake-up-solved-overlay show";

        const choiceStack = document.createElement("div");
        choiceStack.className = "mushroom-refusal-stack";

        const choiceNote = document.createElement("div");
        choiceNote.className = "post-it am-tree-recap-note show";
        choiceNote.style.pointerEvents = "auto";

        const choiceTitle = document.createElement("p");
        choiceTitle.className = "mushroom-refusal-instruction-lead";
        choiceTitle.textContent = "CONFIDENTIAL";
        choiceTitle.classList.add("confidential-muted");

        const choiceParagraph = document.createElement("p");
        choiceParagraph.className = "mushroom-refusal-paragraph";
        choiceParagraph.textContent = "do you want to quit your job? and live your life? after getting a taste of the real world?";

        const choiceFooter = document.createElement("div");
        choiceFooter.className = "am-tree-recap-footer";

        const signatureRow = document.createElement("label");
        signatureRow.className = "am-tree-signature-row";

        const signX = document.createElement("span");
        signX.className = "am-tree-signature-x";
        signX.textContent = "x";

        const signatureInput = document.createElement("input");
        signatureInput.className = "am-tree-signature-input";
        signatureInput.type = "text";
        signatureInput.placeholder = "signature";
        signatureInput.maxLength = 32;
        signatureInput.autocomplete = "off";
        signatureInput.spellcheck = false;

        const yesButton = document.createElement("button");
        yesButton.className = "am-tree-recap-ok choice-option";
        yesButton.type = "button";
        yesButton.textContent = "yes";
        yesButton.disabled = false;
        yesButton.style.pointerEvents = "auto";

        const noButton = document.createElement("button");
        noButton.className = "am-tree-recap-ok choice-option";
        noButton.type = "button";
        noButton.textContent = "no";
        noButton.disabled = false;
        noButton.style.pointerEvents = "auto";

        const okButton = document.createElement("button");
        okButton.className = "am-tree-recap-ok";
        okButton.classList.add("ok-confirm");
        okButton.type = "button";
        okButton.textContent = "ok";
        okButton.disabled = true;

        let selectedChoice = "";

        const updateOkEnabled = () => {
            okButton.disabled = !selectedChoice;
        };

        signatureRow.appendChild(signX);
        signatureRow.appendChild(signatureInput);
        choiceFooter.appendChild(signatureRow);
        choiceFooter.appendChild(yesButton);
        choiceFooter.appendChild(noButton);
        choiceFooter.appendChild(okButton);
        choiceNote.appendChild(choiceTitle);
        choiceNote.appendChild(choiceParagraph);
        choiceNote.appendChild(choiceFooter);
        choiceStack.appendChild(choiceNote);
        choiceOverlay.appendChild(choiceStack);
        deps.imageContainer.appendChild(choiceOverlay);
        worknChoiceOverlay = choiceOverlay;

        const handleChoice = (choice) => (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (deps.getIsTransitioning()) {
                return;
            }
            selectedChoice = choice;
            yesButton.classList.toggle("is-selected", choice === "yes");
            noButton.classList.toggle("is-selected", choice === "no");
            updateOkEnabled();
        };

        signatureInput.addEventListener("input", () => {
            updateOkEnabled();
        });

        okButton.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (deps.getIsTransitioning()) {
                return;
            }
            if (!selectedChoice) {
                return;
            }
            deps.setWorknQuitChoice?.(selectedChoice);
            okButton.classList.add("is-pressed");
            okButton.disabled = true;
            window.setTimeout(() => {
                removeWorknChoiceOverlay();
                onWorknChoiceDone?.();
                onWorknChoiceDone = null;
            }, 60);
        });

        yesButton.addEventListener("mousedown", handleChoice("yes"));
        noButton.addEventListener("mousedown", handleChoice("no"));
        yesButton.addEventListener("click", handleChoice("yes"));
        noButton.addEventListener("click", handleChoice("no"));
    };

    const createNextScenePostIt = () => {
        if (nextScenePostIt && !nextScenePostIt.isConnected) {
            nextScenePostIt = null;
        }
        if (!deps.imageContainer || nextScenePostIt) {
            return;
        }

        nextScenePostIt = createPostItDiv({
            className: "post-it next-scene-post-it",
            mode: "next-scene",
        });

        const nextText = createPostItText({
            text: NEXT_SCENE_TEXT,
            className: "post-it-text post-it-text-bold",
        });
        nextScenePostIt.appendChild(nextText);
        deps.imageContainer.appendChild(nextScenePostIt);

        nextScenePostIt.addEventListener("mousedown", () => {
            if (deps.getIsTransitioning()) {
                return;
            }

            if (deps.getMushroomBiteNextAwaiting()) {
                deps.setMushroomBiteNextAwaiting(false);
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.endMushroomRealshroomBiteInteraction();
                deps.transitionToScene(
                    AM_TREE_SCENE_IMAGE,
                    () => {
                        deps.enterTreeScene();
                    },
                    {
                        fadeInMs: AM_TREE_TRANSITION_MS,
                        fadeOutMs: AM_TREE_TRANSITION_MS,
                    }
                );
                return;
            }
            if (deps.getRedgNextAwaiting()) {
                deps.setRedgNextAwaiting(false);
                deps.clearRedgLiegeNextTimer();
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.hideMyliege();
                deps.transitionToScene(
                    REDG_GIRL_SEQUENCE_G1_IMAGE,
                    () => {
                        deps.showGirlTwinFlickerAfterRedgTransition();
                    },
                    {
                        fadeInMs: SCENE_FADE_IN_MS,
                        fadeOutMs: SCENE_FADE_OUT_MS,
                        useWhiteOverlay: false,
                    }
                );
                return;
            }
            if (deps.getSavedNextAwaiting()) {
                deps.setSavedNextAwaiting(false);
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.transitionToScene(
                    deps.getSaviourEmptyhSceneImage(),
                    () => {
                        deps.showSaviourSwordOverlay();
                        deps.showSaviourSwordLiegeAfterDelay();
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                        useWhiteOverlay: false,
                        crossfadeEase: "ease-in-out",
                    }
                );
                return;
            }
            if (deps.getShroomhNextAwaiting()) {
                deps.setShroomhNextAwaiting(false);
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.transitionToScene(
                    PARTNER_PART1_SCENE_IMAGE,
                    () => {
                        deps.showMyliegeAfterDelay(
                            () => {
                                window.setTimeout(() => {
                                    deps.hideMyliege();
                                    onPartnerRecapOk = () => {
                                        deps.instantSwapScene(
                                            PARTNER_PART2_SCENE_IMAGE,
                                            () => {
                                                window.setTimeout(() => {
                                                    if (deps.getIsTransitioning()) {
                                                        return;
                                                    }
                                                    partnerPart2NextAwaiting = true;
                                                    showNextScenePostIt();
                                                }, 1000);
                                            }
                                        );
                                    };
                                    showPartnerRecapOverlay();
                                }, 4000);
                            },
                            "we became a team..."
                        );
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                    }
                );
                return;
            }
            if (deps.getDiscombNextAwaiting()) {
                deps.setDiscombNextAwaiting(false);
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.showDiscombOutcomePostIt();
                deps.startGoodNightHumSound();
                deps.clearDiscombOutcomeToGoodNightTimer();
                deps.setDiscombOutcomeToGoodNightTimerId(window.setTimeout(() => {
                    if (deps.getIsTransitioning()) {
                        deps.stopGoodNightHumSound();
                        return;
                    }
                    deps.showGoodNightPostItCenterThenOffice7Fade();
                    deps.setDiscombOutcomeToGoodNightTimerId(null);
                }, DISCOMB_OUTCOME_CLEAR_AFTER_NOTE_MS));
                return;
            }
            if (
                fightBloodNextAwaiting
                || deps.getSceneBackgroundSrc().toLowerCase().includes("blood.png")
            ) {
                fightBloodNextAwaiting = false;
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.transitionToScene(
                    FIGHT_MATRI_SCENE_IMAGE,
                    () => {
                        window.setTimeout(() => {
                            if (deps.getIsTransitioning()) {
                                return;
                            }
                            deps.showMyliegeAfterDelay(
                                () => {
                                    window.setTimeout(() => {
                                        if (deps.getIsTransitioning()) {
                                            return;
                                        }
                                        fightMatriNextAwaiting = true;
                                        showNextScenePostIt();
                                    }, 1000);
                                },
                                "ah..i see the exit",
                                MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                                MYLIEGE_IMAGE,
                                0
                            );
                        }, 4000);
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                    }
                );
                return;
            }
            if (
                fightMatriNextAwaiting
                || deps.getSceneBackgroundSrc().toLowerCase().includes("matri.png")
            ) {
                fightMatriNextAwaiting = false;
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.instantSwapScene(
                    FIGHT_AFTER_STEPS_SCENE_IMAGE,
                    () => {
                        deps.startOfficeTickSound();
                        window.setTimeout(() => {
                            if (deps.getIsTransitioning()) {
                                return;
                            }
                            fightStepsNextAwaiting = true;
                            showNextScenePostIt();
                        }, 1000);
                    }
                );
                return;
            }
            if (
                fightStepsNextAwaiting
                || deps.getSceneBackgroundSrc().toLowerCase().includes("fight/after/steps.png")
            ) {
                fightStepsNextAwaiting = false;
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.transitionToScene(
                    FIGHT_AFTER_EXIT_SCENE_IMAGE,
                    () => {
                        deps.showMyliegeAfterDelay(
                            () => {
                                window.setTimeout(() => {
                                    if (deps.getIsTransitioning()) {
                                        return;
                                    }
                                    deps.showFightAfterRedOverlay?.();
                                    window.setTimeout(() => {
                                        if (deps.getIsTransitioning()) {
                                            return;
                                        }
                                        deps.showMyliegeAfterDelay(
                                                () => {
                                                    deps.unlockFightAfterRedOverlay?.();
                                                },
                                            "oh man, i was seeing things",
                                            MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                                            MYLIEGE_IMAGE,
                                                0,
                                                {
                                                    keepPostItVisible: true,
                                                    clearTextBeforeTyping: true,
                                                }
                                        );
                                        }, 1000);
                                }, 1000);
                            },
                            "huh..? is this not an exit?",
                            MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                            MYLIEGE_IMAGE,
                            1000
                        );
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                    }
                );
                return;
            }
            if (deps.getSceneBackgroundSrc().toLowerCase().includes("fight/after/steps2.png")) {
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.stopOfficeTickSound();
                onWorknChoiceDone = () => {
                    deps.transitionToScene(
                        DONE_WORKN_SCENE_IMAGE,
                        () => {
                            window.setTimeout(() => {
                                if (deps.getIsTransitioning()) {
                                    return;
                                }
                                deps.showMyliegeAfterDelay(
                                    () => {
                                        window.setTimeout(() => {
                                            if (deps.getIsTransitioning()) {
                                                return;
                                            }
                                            deps.showMyliegeAfterDelay(
                                                () => {
                                                    window.setTimeout(() => {
                                                        if (deps.getIsTransitioning()) {
                                                            return;
                                                        }
                                                        deps.transitionToScene(
                                                            DONE_SIDEWALK_SCENE_IMAGE,
                                                            () => {
                                                                deps.startDoneSidewalkSequence?.();
                                                            },
                                                            {
                                                                fadeInMs: START_TRANSITION_FADE_IN_MS,
                                                                fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                                                            }
                                                        );
                                                    }, 4000);
                                                },
                                                "i need to get home..",
                                                MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                                                MYLIEGE_IMAGE,
                                                0,
                                                {
                                                    keepPostItVisible: true,
                                                    clearTextBeforeTyping: true,
                                                }
                                            );
                                        }, 4000);
                                    },
                                    "yawn...? oh..it's like 11:58 p.m.",
                                    MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                                    MYLIEGE_IMAGE,
                                    0
                                );
                            }, 1000);
                        },
                        {
                            fadeInMs: START_TRANSITION_FADE_IN_MS,
                            fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                        }
                    );
                };
                onWorknRecapOk = () => {
                    showWorknChoiceOverlay();
                };
                showWorknRecapOverlay();
                return;
            }
            if (partnerPart2NextAwaiting || deps.getSceneBackgroundSrc().toLowerCase().includes("part2.png")) {
                partnerPart2NextAwaiting = false;
                nextScenePostIt?.classList.remove("show");
                nextScenePostIt?.remove();
                nextScenePostIt = null;
                deps.transitionToScene(
                    PARTNER_PARTING_SCENE_IMAGE,
                    () => {
                        deps.showMyliegeAfterDelay(
                            () => {
                                window.setTimeout(() => {
                                    if (deps.getIsTransitioning()) {
                                        return;
                                    }
                                    deps.instantSwapScene(
                                        PARTNER_C1_SCENE_IMAGE,
                                        () => {
                                            deps.showPartnerChar2OverlayAnimation();
                                            window.setTimeout(() => {
                                                if (deps.getIsTransitioning()) {
                                                    return;
                                                }
                                                deps.removePartnerChar2Overlay();
                                                deps.transitionToScene(
                                                    FIGHT_IFIGH_SCENE_IMAGE,
                                                    () => {
                                                        window.setTimeout(() => {
                                                            if (deps.getIsTransitioning()) {
                                                                return;
                                                            }
                                                            deps.instantSwapScene(
                                                                FIGHT_BLOOD_SCENE_IMAGE,
                                                                () => {
                                                                    deps.showMyliegeAfterDelay(
                                                                        () => {
                                                                            window.setTimeout(() => {
                                                                                if (deps.getIsTransitioning()) {
                                                                                    return;
                                                                                }
                                                                                fightBloodNextAwaiting = true;
                                                                                showNextScenePostIt();
                                                                            }, 1000);
                                                                        },
                                                                        "ah...i killed her.. i didn't have a choice",
                                                                        MYLIEGE_SECONDARY_GRASS_IMAGE,
                                                                        MYLIEGE_IMAGE,
                                                                        1000
                                                                    );
                                                                }
                                                            );
                                                        }, 4000);
                                                    },
                                                    {
                                                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                                                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                                                    }
                                                );
                                            }, 3000);
                                        }
                                    );
                                }, 4000);
                            },
                            "uh...oh... what's happening...",
                            MYLIEGE_SECONDARY_GRASS_IMAGE,
                            MYLIEGE_IMAGE,
                            1000
                        );
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                    }
                );
                return;
            }
            const currentScene = deps.getSceneBackgroundSrc().toLowerCase();
            const onWorkingScene = currentScene.includes("working.png");
            const onFallingAsleepScene = currentScene.includes("fallingasleep.png");
            const onFallingDownScene = currentScene.includes("fallingdown.png");

            const step = deps.getNextSceneStep();
            if (
                (step === 0 && !onWorkingScene)
                || (step === 1 && !onFallingAsleepScene)
                || (step === 2 && !onFallingDownScene)
            ) {
                return;
            }

            let targetScene = OFFICE_SCENE_IMAGE;
            if (step === 0) {
                targetScene = FALLING_ASLEEP_SCENE_IMAGE;
            } else if (step === 1) {
                targetScene = OFFICE_SCENE_IMAGE;
            } else if (step === 2) {
                targetScene = GRASS_SCENE_IMAGE;
            }
            deps.setNextSceneStep(step + 1);
            nextScenePostIt?.classList.remove("show");
            deps.clearOfficeSequenceTimer();
            deps.stopOfficeTickSound();
            deps.removeOfficeSevenPostIt();
            if (deps.getNextSceneStep() === 2) {
                deps.hideMyliege();
            }

            const nextStep = deps.getNextSceneStep();
            const isWorkingToFalling = nextStep === 1;
            const isFallingToOffice = nextStep === 2;
            const isFallingDownToGrass = nextStep === 3;
            deps.transitionToScene(
                targetScene,
                () => {
                    if (nextStep === 1) {
                        deps.showMyliegeAfterDelay(() => {
                            deps.scheduleNextPostItAfterMyliege();
                        });
                        return;
                    }
                    if (nextStep === 2) {
                        deps.startOfficeSequence();
                        return;
                    }
                    if (nextStep === 3) {
                        deps.showMyliegeAfterDelay(() => {
                            window.setTimeout(() => {
                                deps.transitionToScene(
                                    FOREST_BLUE_SCENE_IMAGE,
                                    () => {
                                        deps.showForestBlueShoesOverlayAfterDelay();
                                    },
                                    {
                                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                                        useWhiteOverlay: false,
                                    }
                                );
                            }, 4000);
                        }, MYLIEGE_GRASS_NOTE_TEXT, MYLIEGE_SECONDARY_GRASS_IMAGE);
                    }
                },
                (isWorkingToFalling || isFallingToOffice || isFallingDownToGrass)
                    ? { fadeInMs: START_TRANSITION_FADE_IN_MS, fadeOutMs: START_TRANSITION_FADE_OUT_MS }
                    : {}
            );
        });
    };

    const showNextScenePostIt = () => {
        createNextScenePostIt();
        nextScenePostIt?.classList.add("show");
    };

    const hideNextScenePostIt = () => {
        nextScenePostIt?.classList.remove("show");
    };

    const purgeNextScenePostIt = () => {
        nextScenePostIt?.remove();
        nextScenePostIt = null;
    };

    const resetNextScenePostItRefOnly = () => {
        nextScenePostIt = null;
    };

    return {
        showNextScenePostIt,
        hideNextScenePostIt,
        purgeNextScenePostIt,
        resetNextScenePostItRefOnly,
    };
};
