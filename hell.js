import {
    BOLD_TASKS,
    DISCOMB_LIEGE_DELAY_MS,
    DISCOMB_FADE_IN_MS,
    DISCOMB_OUTCOME_CLEAR_AFTER_NOTE_MS,
    DISCOMB_OUTCOME_NOTE_DELAY_MS,
    DISCOMB_OUTCOME_NOTE_TEXT,
    DISCOMB_LIEGE_SIDE_NOTE_TEXT,
    FALLING_ASLEEP_SCENE_IMAGE,
    FALLING_DOWN_SCENE_IMAGE,
    DISCOMB_SCENE_IMAGE,
    FOREST_BLUE_DECISION_TEXT,
    FOREST_BLUE_LEFT_SHOE_IMAGE,
    FOREST_BLUE_RESET_DELAY_MS,
    FOREST_BLUE_RESET_TEXT,
    FOREST_BLUE_RIGHT_SHOE_IMAGE,
    FOREST_BLUE_SCENE_IMAGE,
    FOREST_BLUE_SHOES_OVERLAY_DELAY_MS,
    FOREST_LEFT_SHOE_IMAGE,
    FOREST_RIGHT_SHOE_IMAGE,
    GOOD_NIGHT_TO_OFFICE7_DELAY_MS,
    GRASS_SCENE_IMAGE,
    HIGHLIGHTED_TASK_COLOR,
    HIGHLIGHTED_TASKS,
    MUSHROOM_BITE_OVERLAY_DELAY_MS,
    MUSHROOM_BITE_QUESTION_TEXT,
    MUSHROOM_REALSHROOM_DELAY_MS,
    MUSHROOM_REFUSAL_INSTRUCTION_TEXT,
    MUSHROOM_REFUSAL_PARAGRAPH,
    MUSHROOM_HUNGRY_NOTE_TEXT,
    MUSHROOM_BITE3_NOTE_TEXT_1,
    MUSHROOM_BITE3_NOTE_TEXT_2,
    MUSHROOM_BITE3_NOTE_TEXT_3,
    MUSHROOM_BITE3_NOTE_SWAP_DELAY_MS,
    MUSHROOM_BITE3_NEXT_DELAY_MS,
    MUSHROOM_LIEGE_APPEAR_DELAY_MS,
    MUSHROOM_NOTE_TEXT_1,
    MUSHROOM_NOTE_TEXT_2,
    MUSHROOM_NOTE_TEXT_SWAP_DELAY_MS,
    MUSHROOM_BITE_CLICK_IMAGES,
    MUSHROOM_DEATH_SCENE_IMAGE,
    MUSHROOM_REFUSAL_TO_DEATH_CROSSFADE_MS,
    MUSHROOM_REALSHROOM_IMAGE,
    MUSHROOM_SEQUENCE_IMAGES,
    MYLIEGE_FALLING_DOWN_NOTE_TEXT,
    MYLIEGE_GRASS_NOTE_TEXT,
    MYLIEGE_IMAGE,
    MYLIEGE_IMAGE_2,
    MYLIEGE_IMAGE_3,
    MYLIEGE_MUSHROOM_DEATH_CLEAR_AFTER_NOTE_MS,
    MYLIEGE_MUSHROOM_DEATH_LIEGE_DELAY_MS,
    MYLIEGE_MUSHROOM_DEATH_NOTE_TEXT,
    MYLIEGE_NOTE_TEXT,
    MYLIEGE_SECONDARY_DEFAULT_IMAGE,
    REDG_AFTER_LIEGE_NEXT_BUTTON_DELAY_MS,
    REDG_GIRL_SEQUENCE_G1_IMAGE,
    REDG_GIRL_SEQUENCE_G2_IMAGE,
    GIRL_TWIN_AFTER_FIRST_LIEGE_TEXT_MS,
    GIRL_TWIN_BEFORE_CLEAR_AFTER_SECOND_NOTE_MS,
    FGUN_SEQUENCE_IMAGES,
    FGUNMAN_LIEGE_NOTE_TEXT,
    FGUNMAN_OUTCOME_NOTE_DELAY_MS,
    FGUNMAN_OUTCOME_TO_FDEATH_DELAY_MS,
    FDEATH_SCENE_IMAGE,
    FDEATH_OUTCOME_NOTE_DELAY_MS,
    FDEATH_OUTCOME_NOTE_TEXT,
    FDEATH_OUTCOME_RESTART_DELAY_MS,
    GIRL_HAND_RDOWN_IMAGE,
    GIRL_HAND_RUP_IMAGE,
    GIRL_HAND_SAVED_LIEGE_DELAY_MS,
    GIRL_HAND_SAVED_NEXT_POST_IT_DELAY_MS,
    GIRL_HAND_SAVED_LIEGE_TEXT,
    GIRL_HAND_SAVED_OVERLAY_IMAGE,
    SAVIOUR_EMPTYH_SCENE_IMAGE,
    SAVIOUR_EMPTYH_AFTER_SWORD_LIEGE_TEXT,
    SAVIOUR_EMPTYH_TO_SHROOMH_DELAY_MS,
    SAVIOUR_SHROOMH_SCENE_IMAGE,
    SAVIOUR_SWORD_LIEGE_DELAY_MS,
    SAVIOUR_SWORD_LIEGE_TEXT,
    PARTNER_C1_SCENE_IMAGE,
    PARTNER_CRAZY_CHAR2_IMAGE,
    FIGHT_AFTER_REDRED_OVERLAY_IMAGE,
    FIGHT_AFTER_GREEN_OVERLAY_IMAGE,
    FIGHT_AFTER_STEPS2_SCENE_IMAGE,
    DONE_RSIDE_SCENE_IMAGE,
    DONE_SLEEP_SCENE_IMAGE,
    DONE_FINITE_SCENE_IMAGE,
    END_CREDITS_GITHUB_URL,
    END_CREDITS_LINKEDIN_URL,
    DONE_PEEPS2_SCENE_IMAGE,
    DONE_WSIDE_SCENE_IMAGE,
    SAVIOUR_SWORDD_OVERLAY_IMAGE,
    GIRL_HAND_WDOWN_IMAGE,
    GIRL_HAND_WUP_IMAGE,
    GIRL_TWIN_LIEGE_NOTE_SECOND_TEXT,
    GIRL_TWIN_LIEGE_NOTE_TEXT,
    GIRL_TWIN_WHANDS_AFTER_STRIP_MS,
    REDG_LIEGE_DISCOVERY_DELAY_MS,
    REDG_LIEGE_DISCOVERY_NOTE_TEXT,
    MYLIEGE_SECONDARY_GRASS_IMAGE,
    OFFICE5_GOOD_NIGHT_TEXT,
    OFFICE5_SCENE_IMAGE,
    OFFICE7_FADE_IN_MS,
    OFFICE7_NEXT_TEXT,
    OFFICE7_NOTE_TEXT,
    OFFICE7_POST_IT_DELAY_MS,
    OFFICE7_SCENE_IMAGE,
    OFFICE_FIRST_DELAY_MS,
    OFFICE_SCENE_IMAGE,
    OFFICE_SEQUENCE_DELAY_MS,
    OFFICE_SEQUENCE_IMAGES,
    OPEN_SCENE_IMAGE,
    POST_IT_COLORS,
    PRIORITY_TASKS,
    REGULAR_TASKS,
    RESTART_POST_IT_DELAY_MS,
    RESTART_TEXT,
    SCENE_FADE_IN_MS,
    SCENE_FADE_OUT_MS,
    START_GAME_TEXT,
    START_TRANSITION_FADE_IN_MS,
    START_TRANSITION_FADE_OUT_MS,
    TYPEWRITER_MS_PER_CHAR,
} from "./constants.js";
import {
    fadeOutEndingSong,
    playClickSound,
    startGoodNightHumSound,
    startEndingSongFadeIn,
    startOfficeTickSound,
    startTypewriterSound,
    stopEndingSong,
    stopGoodNightHumSound,
    stopOfficeTickSound,
    stopTypewriterSound,
} from "./audio.js";
import { createPostItDiv, createPostItText } from "./postit.js";
import {
    animateLiegeSidePostItTypewriterModule,
    ensureMyliegeSpriteModule,
    positionMyliegeSidePostItModule,
    setMyliegeAnimationFramesModule,
    setMyliegeSidePostItTextModule,
} from "./myliege.js";
import { createMushroomSequenceState } from "./scenes/mushroomSequence.js";
import { createOfficeSequenceState } from "./scenes/officeSequence.js";
import { createRestartFlowModule } from "./scenes/restartFlow.js";
import { createSceneTransitions } from "./scenes/sceneTransition.js";
import { createNextSceneRouter } from "./scenes/nextSceneRouter.js";
import { createTreeSceneModule } from "./scenes/treeScene.js";

const shoeWrapper = document.querySelector(".shoe-wrapper");
const shoeBlack = document.querySelector(".shoe-black");
const postItNote = document.getElementById("post-it-note");
const imageContainer = document.querySelector(".image-container");
const sceneBackground = document.querySelector(".background");
const sceneFade = document.getElementById("scene-fade");
const postItText = document.querySelector(".post-it-text");
const introPrompt = document.getElementById("intro-prompt");
let hasUserInteracted = false;
let resetOpenSceneInteractionState = null;
let restoreOpenSceneIntroPrompt = null;

document.addEventListener("mousedown", playClickSound, true);
document.addEventListener("click", () => {
    hasUserInteracted = true;
}, { once: true });

if (introPrompt) {
    const introPromptText = introPrompt.querySelector(".intro-prompt-text");
    let introPromptCanDismiss = false;
    const dismissIntroPrompt = () => {
        if (!introPromptCanDismiss) {
            return;
        }
        document.removeEventListener("mousedown", dismissIntroPrompt);
        introPrompt.classList.add("hide");
        window.setTimeout(() => {
            introPrompt.classList.remove("show");
            introPrompt.classList.remove("typing");
        }, 220);
    };

    restoreOpenSceneIntroPrompt = () => {
        introPromptCanDismiss = false;
        introPrompt.classList.remove("hide");
        introPrompt.classList.add("show");
        introPrompt.classList.remove("typing");
        void introPrompt.offsetWidth;
        introPrompt.classList.add("typing");
        document.removeEventListener("mousedown", dismissIntroPrompt);
        document.addEventListener("mousedown", dismissIntroPrompt);
    };

    introPromptText?.addEventListener("animationend", (event) => {
        if (event.animationName === "type-intro") {
            introPromptCanDismiss = true;
            introPrompt.classList.remove("typing");
        }
    });

    restoreOpenSceneIntroPrompt();
}

if (postItText) {
    postItText.addEventListener("animationend", (event) => {
        if (event.animationName === "type-note") {
            stopTypewriterSound();
        }
    });
}

if (shoeWrapper && shoeBlack) {
    const maskCanvas = document.createElement("canvas");
    const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
    let hasClickedShoe = false;
    let openScenePressCount = 0;
    const REQUIRED_OPENSCENE_PRESSES = 5;
    let remainingPriorityTasks = [...PRIORITY_TASKS];

    resetOpenSceneInteractionState = () => {
        hasClickedShoe = false;
        openScenePressCount = 0;
        remainingPriorityTasks = [...PRIORITY_TASKS];
        shoeWrapper.classList.remove("is-red");
        shoeWrapper.style.cursor = "default";
    };

    const getPostItPosition = (clientX, clientY, noteWidth, noteHeight) => {
        if (!imageContainer) {
            return { left: 0, top: 0 };
        }

        const containerRect = imageContainer.getBoundingClientRect();
        const halfW = noteWidth / 2;
        const halfH = noteHeight / 2;

        let left = clientX - containerRect.left - halfW;
        let top = clientY - containerRect.top - halfH;

        left = Math.max(0, Math.min(left, containerRect.width - noteWidth));
        top = Math.max(0, Math.min(top, containerRect.height - noteHeight));
        return { left, top };
    };

    const showStartGamePostItAt = (clientX, clientY) => {
        if (!postItNote || !postItText) {
            return;
        }

        const noteWidth = postItNote.offsetWidth || 170;
        const noteHeight = postItNote.offsetHeight || 170;
        const { left, top } = getPostItPosition(clientX, clientY, noteWidth, noteHeight);

        postItText.textContent = START_GAME_TEXT;
        postItNote.dataset.mode = "start-game";
        postItNote.classList.add("typing");
        startTypewriterSound();
        postItNote.style.left = `${left}px`;
        postItNote.style.top = `${top}px`;
        postItNote.classList.remove("show");
        void postItNote.offsetWidth;
        postItNote.classList.add("show");
    };

    const showRegularPostItAt = (clientX, clientY) => {
        if (!imageContainer || !postItNote) {
            return;
        }

        const regularNote = createPostItDiv({
            className: "post-it show",
            mode: "regular",
        });

        const regularText = createPostItText({
            text: "",
            className: "post-it-text",
        });
        const selectedTask = remainingPriorityTasks.length > 0
            ? remainingPriorityTasks.shift()
            : REGULAR_TASKS[Math.floor(Math.random() * REGULAR_TASKS.length)];
        regularText.textContent = selectedTask;
        if (BOLD_TASKS.has(selectedTask)) {
            regularText.classList.add("post-it-text-bold");
        }
        regularNote.appendChild(regularText);
        const randomColor = POST_IT_COLORS[Math.floor(Math.random() * POST_IT_COLORS.length)];
        regularNote.style.backgroundColor = HIGHLIGHTED_TASKS.has(selectedTask)
            ? HIGHLIGHTED_TASK_COLOR
            : randomColor;
        imageContainer.appendChild(regularNote);

        const noteWidth = regularNote.offsetWidth || postItNote.offsetWidth || 170;
        const noteHeight = regularNote.offsetHeight || postItNote.offsetHeight || 170;
        const { left, top } = getPostItPosition(clientX, clientY, noteWidth, noteHeight);
        regularNote.style.left = `${left}px`;
        regularNote.style.top = `${top}px`;
    };

    const getContainFit = (boxW, boxH, imgW, imgH) => {
        const boxRatio = boxW / boxH;
        const imgRatio = imgW / imgH;
        let drawW;
        let drawH;

        if (imgRatio > boxRatio) {
            drawW = boxW;
            drawH = boxW / imgRatio;
        } else {
            drawH = boxH;
            drawW = boxH * imgRatio;
        }

        return {
            drawW,
            drawH,
            offsetX: (boxW - drawW) / 2,
            offsetY: (boxH - drawH) / 2
        };
    };

    const isMouseOnShoe = (event) => {
        if (!maskCtx || !shoeBlack.naturalWidth || !shoeBlack.naturalHeight) {
            return false;
        }

        const rect = shoeWrapper.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const fit = getContainFit(rect.width, rect.height, shoeBlack.naturalWidth, shoeBlack.naturalHeight);
        const relX = x - fit.offsetX;
        const relY = y - fit.offsetY;

        if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
            return false;
        }

        const imgX = Math.floor((relX / fit.drawW) * shoeBlack.naturalWidth);
        const imgY = Math.floor((relY / fit.drawH) * shoeBlack.naturalHeight);
        const pixel = maskCtx.getImageData(imgX, imgY, 1, 1).data;
        return pixel[3] > 20;
    };

    const setupMask = () => {
        if (!maskCtx || !shoeBlack.naturalWidth || !shoeBlack.naturalHeight) {
            return;
        }

        maskCanvas.width = shoeBlack.naturalWidth;
        maskCanvas.height = shoeBlack.naturalHeight;
        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.drawImage(shoeBlack, 0, 0);
    };

    if (shoeBlack.complete) {
        setupMask();
    } else {
        shoeBlack.addEventListener("load", setupMask, { once: true });
    }

    shoeWrapper.addEventListener("mousemove", (event) => {
        if (!hasUserInteracted) {
            shoeWrapper.classList.remove("is-red");
            shoeWrapper.style.cursor = "default";
            return;
        }

        if (hasClickedShoe) {
            shoeWrapper.classList.remove("is-red");
            shoeWrapper.style.cursor = "default";
            return;
        }

        const onShoe = isMouseOnShoe(event);
        const onOpenScene = sceneBackground?.src.toLowerCase().includes("openscene");
        const canShowRedShoe = !onOpenScene || openScenePressCount >= REQUIRED_OPENSCENE_PRESSES;
        const canInteractWithShoe = !onOpenScene || openScenePressCount >= REQUIRED_OPENSCENE_PRESSES;
        shoeWrapper.classList.toggle("is-red", canShowRedShoe && onShoe);
        shoeWrapper.style.cursor = canInteractWithShoe && onShoe ? "pointer" : "default";
    });

    shoeWrapper.addEventListener("mouseleave", () => {
        shoeWrapper.classList.remove("is-red");
        shoeWrapper.style.cursor = "default";
    });

    shoeWrapper.addEventListener("click", (event) => {
        if (!hasUserInteracted || hasClickedShoe || !postItNote || !imageContainer) {
            return;
        }

        const onOpenScene = sceneBackground?.src.toLowerCase().includes("openscene");
        if (onOpenScene && openScenePressCount < REQUIRED_OPENSCENE_PRESSES) {
            return;
        }

        const onShoe = isMouseOnShoe(event);
        if (onShoe) {
            hasClickedShoe = true;
            showStartGamePostItAt(event.clientX, event.clientY);
            shoeWrapper.classList.remove("is-red");
            shoeWrapper.style.cursor = "default";
        }
    });

    imageContainer.addEventListener("mousedown", (event) => {
        if (!hasUserInteracted || !sceneBackground || !postItNote) {
            return;
        }

        const onOpenScene = sceneBackground.src.toLowerCase().includes("openscene");
        if (onOpenScene) {
            openScenePressCount += 1;
        }

        if (event.target.closest(".post-it")) {
            return;
        }

        if (onOpenScene) {
            if (isMouseOnShoe(event)) {
                return;
            }

            showRegularPostItAt(event.clientX, event.clientY);
        }
    });
}

if (postItNote && sceneBackground && shoeWrapper) {
    const officeSequenceState = createOfficeSequenceState();
    const mushroomSequenceState = createMushroomSequenceState();

    let isTransitioning = false;
    let nextSceneStep = 0;
    let myliegeSprite = null;
    let myliegeSprite2 = null;
    let myliegeSidePostIt = null;
    let discombOutcomePostIt = null;
    let myliegeTimerId = null;
    let myliegePostItTimerId = null;
    let myliegeAnimationIntervalId = null;
    let discombOutcomeToGoodNightTimerId = null;
    let workingNextPostItTimerId = null;
    let nextPostItAfterTypingTimerId = null;
    let officeSevenPostItTimerId = null;
    let officeSevenPostIt = null;
    let officeSevenWakeUpPostIts = [];
    let officeSevenWakeUpTargets = [];
    let officeSevenWakeUpTargetBoxes = [];
    let officeSevenSolvedOverlay = null;
    let officeSevenWakeUpLocked = false;
    let mushroomNoteSwapTimerId = null;
    let mushroomHungryDelayTimerId = null;
    let mushroomBiteDelayTimerId = null;
    let mushroomBite3NoteSwapTimerId = null;
    let mushroomBite3NextTimerId = null;
    let mushroomRealShroomDelayTimerId = null;
    let mushroomBiteOverlay = null;
    let mushroomRealShroomElement = null;
    let mushroomBiteNextAwaiting = false;
    let discombNextAwaiting = false;
    let redgNextAwaiting = false;
    let savedNextAwaiting = false;
    let shroomhNextAwaiting = false;
    let redgLiegeNextTimerId = null;
    let girlTwinImg1 = null;
    let girlTwinImg2 = null;
    let girlTwinSwapIntervalId = null;
    let girlTwinLiegeScheduled = false;
    let girlTwinLiegeTwinOnlyTimerId = null;
    let girlTwinLiegeStripDelayTimerId = null;
    let girlTwinWHandsAppearTimerId = null;
    let girlTwinWHandsWrap = null;
    let girlTwinSavedOverlay = null;
    let girlTwinSavedLiegeTimerId = null;
    let girlTwinSavedNextPostItTimerId = null;
    let saviourSwordOverlay = null;
    let saviourSwordUnlocked = false;
    let saviourSwordLiegeTimerId = null;
    let saviourShroomSwapTimerId = null;
    let partnerChar2OverlayEl = null;
    let partnerCrazyFrameSwapIntervalId = null;
    let fightAfterRedOverlayEl = null;
    let fightAfterRedOverlayUnlocked = false;
    let fgunSequenceTimerId = null;
    let fgunmanOutcomeNoteTimerId = null;
    let fgunmanOutcomeToFdeathTimerId = null;
    let fdeathOutcomeNoteTimerId = null;
    let fdeathOutcomeRestartTimerId = null;
    let fdeathOutcomePostIt = null;
    let showNextScenePostIt = () => {};
    let hideNextScenePostIt = () => {};
    let purgeNextScenePostIt = () => {};
    let resetNextScenePostItRefOnly = () => {};
    let scheduleNextPostItAfterMyliege = () => {};
    let mushroomBiteUnlocked = false;
    let mushroomRealShroomBiteClicks = 0;
    let mushroomRealShroomBiteAbort = null;
    let restartPostItTimerId = null;
    let forestBlueResetTextTimerId = null;
    let forestBlueShoesOverlay = null;
    let forestBlueShoesOverlayTimerId = null;
    let forestBlueShoesLocked = true;
    let forestBlueLeftShoeElement = null;
    let forestBlueRightShoeElement = null;
    let doneSideOverlay = null;
    let doneWsideElement = null;
    let doneRsideElement = null;
    let donePeeps2Element = null;
    let doneRsideUnlocked = false;
    let doneSideOverlayTimerId = null;
    let doneEndRestartPostItTimerId = null;
    let endCreditsLinks = null;
    let worknQuitChoice = "";
    const forestBlueLeftMaskCanvas = document.createElement("canvas");
    const forestBlueRightMaskCanvas = document.createElement("canvas");
    const forestBlueLeftMaskCtx = forestBlueLeftMaskCanvas.getContext("2d", { willReadFrequently: true });
    const forestBlueRightMaskCtx = forestBlueRightMaskCanvas.getContext("2d", { willReadFrequently: true });
    const doneWsideMaskCanvas = document.createElement("canvas");
    const doneRsideMaskCanvas = document.createElement("canvas");
    const doneWsideMaskCtx = doneWsideMaskCanvas.getContext("2d", { willReadFrequently: true });
    const doneRsideMaskCtx = doneRsideMaskCanvas.getContext("2d", { willReadFrequently: true });
    const mushroomPixelMaskMap = new Map();
    let mushroomPixelMasksPrimed = false;
    const MYLIEGE_VISIBLE_PADDING_X_RATIO = 0.18;
    const MYLIEGE_SIDE_NOTE_GAP_PX = -488;
    const MYLIEGE_SIDE_NOTE_Y_OFFSET_PX = 26;
    const MYLIEGE_POST_IT_DELAY_MS = 1000;
    const MYLIEGE_FRAME_SWAP_MS = 200;
    const NEXT_POST_IT_AFTER_MYLIEGE_TYPING_MS = 1000;

    const clearMyliegeTimer = () => {
        if (!myliegeTimerId) {
            return;
        }
        window.clearTimeout(myliegeTimerId);
        myliegeTimerId = null;
    };

    const clearMyliegePostItTimer = () => {
        if (!myliegePostItTimerId) {
            return;
        }
        window.clearTimeout(myliegePostItTimerId);
        myliegePostItTimerId = null;
    };

    const clearMyliegeAnimationInterval = () => {
        if (!myliegeAnimationIntervalId) {
            return;
        }
        window.clearInterval(myliegeAnimationIntervalId);
        myliegeAnimationIntervalId = null;
    };

    const clearDiscombOutcomeToGoodNightTimer = () => {
        if (!discombOutcomeToGoodNightTimerId) {
            return;
        }
        window.clearTimeout(discombOutcomeToGoodNightTimerId);
        discombOutcomeToGoodNightTimerId = null;
    };

    const clearWorkingNextPostItTimer = () => {
        if (!workingNextPostItTimerId) {
            return;
        }
        window.clearTimeout(workingNextPostItTimerId);
        workingNextPostItTimerId = null;
    };

    const clearNextPostItAfterTypingTimer = () => {
        if (!nextPostItAfterTypingTimerId) {
            return;
        }
        window.clearTimeout(nextPostItAfterTypingTimerId);
        nextPostItAfterTypingTimerId = null;
    };

    const clearRedgLiegeNextTimer = () => {
        if (!redgLiegeNextTimerId) {
            return;
        }
        window.clearTimeout(redgLiegeNextTimerId);
        redgLiegeNextTimerId = null;
    };

    const clearGirlTwinSwapInterval = () => {
        if (!girlTwinSwapIntervalId) {
            return;
        }
        window.clearInterval(girlTwinSwapIntervalId);
        girlTwinSwapIntervalId = null;
    };

    const clearGirlTwinLiegeTwinOnlyTimer = () => {
        if (!girlTwinLiegeTwinOnlyTimerId) {
            return;
        }
        window.clearTimeout(girlTwinLiegeTwinOnlyTimerId);
        girlTwinLiegeTwinOnlyTimerId = null;
    };

    const clearGirlTwinLiegeStripDelayTimer = () => {
        if (!girlTwinLiegeStripDelayTimerId) {
            return;
        }
        window.clearTimeout(girlTwinLiegeStripDelayTimerId);
        girlTwinLiegeStripDelayTimerId = null;
    };

    const clearGirlTwinWHandsAppearTimer = () => {
        if (!girlTwinWHandsAppearTimerId) {
            return;
        }
        window.clearTimeout(girlTwinWHandsAppearTimerId);
        girlTwinWHandsAppearTimerId = null;
    };

    const clearGirlTwinSavedLiegeTimer = () => {
        if (!girlTwinSavedLiegeTimerId) {
            return;
        }
        window.clearTimeout(girlTwinSavedLiegeTimerId);
        girlTwinSavedLiegeTimerId = null;
    };

    const clearGirlTwinSavedNextPostItTimer = () => {
        if (!girlTwinSavedNextPostItTimerId) {
            return;
        }
        window.clearTimeout(girlTwinSavedNextPostItTimerId);
        girlTwinSavedNextPostItTimerId = null;
    };

    const clearSaviourSwordLiegeTimer = () => {
        if (!saviourSwordLiegeTimerId) {
            return;
        }
        window.clearTimeout(saviourSwordLiegeTimerId);
        saviourSwordLiegeTimerId = null;
    };

    const clearSaviourShroomSwapTimer = () => {
        if (!saviourShroomSwapTimerId) {
            return;
        }
        window.clearTimeout(saviourShroomSwapTimerId);
        saviourShroomSwapTimerId = null;
    };

    const clearFgunSequenceTimer = () => {
        if (!fgunSequenceTimerId) {
            return;
        }
        window.clearTimeout(fgunSequenceTimerId);
        fgunSequenceTimerId = null;
    };

    const clearFgunmanOutcomeNoteTimer = () => {
        if (!fgunmanOutcomeNoteTimerId) {
            return;
        }
        window.clearTimeout(fgunmanOutcomeNoteTimerId);
        fgunmanOutcomeNoteTimerId = null;
    };

    const clearFgunmanOutcomeToFdeathTimer = () => {
        if (!fgunmanOutcomeToFdeathTimerId) {
            return;
        }
        window.clearTimeout(fgunmanOutcomeToFdeathTimerId);
        fgunmanOutcomeToFdeathTimerId = null;
    };

    const startFgunmanOutcomeSequence = () => {
        clearFgunmanOutcomeNoteTimer();
        clearFgunmanOutcomeToFdeathTimer();

        fgunmanOutcomeNoteTimerId = window.setTimeout(() => {
            fgunmanOutcomeNoteTimerId = null;
            if (isTransitioning) {
                return;
            }
            showMyliegeAfterDelay(
                () => {
                    if (isTransitioning || fgunmanOutcomeToFdeathTimerId) {
                        return;
                    }
                    fgunmanOutcomeToFdeathTimerId = window.setTimeout(() => {
                        fgunmanOutcomeToFdeathTimerId = null;
                        if (isTransitioning) {
                            return;
                        }
                        transitionToScene(
                            FDEATH_SCENE_IMAGE,
                            () => {
                                startFdeathOutcomeSequence();
                            },
                            {
                                fadeInMs: 4000,
                                fadeOutMs: 4000,
                                useWhiteOverlay: false,
                                crossfadeEase: "ease-in-out",
                            },
                        );
                    }, FGUNMAN_OUTCOME_TO_FDEATH_DELAY_MS);
                },
                FGUNMAN_LIEGE_NOTE_TEXT,
                MYLIEGE_IMAGE_3,
                MYLIEGE_IMAGE,
                0,
            );
        }, FGUNMAN_OUTCOME_NOTE_DELAY_MS);
    };

    const clearFdeathOutcomeNoteTimer = () => {
        if (!fdeathOutcomeNoteTimerId) {
            return;
        }
        window.clearTimeout(fdeathOutcomeNoteTimerId);
        fdeathOutcomeNoteTimerId = null;
    };

    const clearFdeathOutcomeRestartTimer = () => {
        if (!fdeathOutcomeRestartTimerId) {
            return;
        }
        window.clearTimeout(fdeathOutcomeRestartTimerId);
        fdeathOutcomeRestartTimerId = null;
    };

    const removeFdeathOutcomePostIt = () => {
        fdeathOutcomePostIt?.remove();
        fdeathOutcomePostIt = null;
    };

    const showFdeathOutcomePostIt = () => {
        if (!imageContainer) {
            return;
        }
        removeFdeathOutcomePostIt();
        fdeathOutcomePostIt = createPostItDiv({
            className: "post-it discomb-outcome-banner show",
            mode: "fdeath-outcome",
        });
        const textNode = createPostItText({
            text: FDEATH_OUTCOME_NOTE_TEXT,
            className: "post-it-text post-it-text-bold",
        });
        fdeathOutcomePostIt.appendChild(textNode);
        imageContainer.appendChild(fdeathOutcomePostIt);
    };

    const startFdeathOutcomeSequence = () => {
        clearFdeathOutcomeNoteTimer();
        clearFdeathOutcomeRestartTimer();
        removeFdeathOutcomePostIt();
        fdeathOutcomeNoteTimerId = window.setTimeout(() => {
            fdeathOutcomeNoteTimerId = null;
            if (isTransitioning) {
                return;
            }
            showFdeathOutcomePostIt();
            fdeathOutcomeRestartTimerId = window.setTimeout(() => {
                fdeathOutcomeRestartTimerId = null;
                if (isTransitioning) {
                    return;
                }
                removeOfficeSevenPostIt();
                startGoodNightHumSound();
                showGoodNightPostItCenterThenOffice7Fade();
            }, FDEATH_OUTCOME_RESTART_DELAY_MS);
        }, FDEATH_OUTCOME_NOTE_DELAY_MS);
    };

    const removeGirlTwinWHandsOverlay = () => {
        girlTwinWHandsWrap?.remove();
        girlTwinWHandsWrap = null;
    };

    const removeGirlTwinSavedOverlay = () => {
        girlTwinSavedOverlay?.remove();
        girlTwinSavedOverlay = null;
    };

    const removeSaviourSwordOverlay = () => {
        saviourSwordOverlay?.remove();
        saviourSwordOverlay = null;
        saviourSwordUnlocked = false;
    };

    const removePartnerChar2Overlay = () => {
        if (partnerCrazyFrameSwapIntervalId) {
            window.clearInterval(partnerCrazyFrameSwapIntervalId);
            partnerCrazyFrameSwapIntervalId = null;
        }
        partnerChar2OverlayEl?.remove();
        partnerChar2OverlayEl = null;
    };

    const removeFightAfterRedOverlay = () => {
        fightAfterRedOverlayUnlocked = false;
        fightAfterRedOverlayEl?.remove();
        fightAfterRedOverlayEl = null;
    };

    const showPartnerChar2OverlayAnimation = () => {
        if (!imageContainer) {
            return;
        }
        removePartnerChar2Overlay();

        const wrap = document.createElement("div");
        wrap.className = "partner-crazy-frame-wrap";

        const frameA = document.createElement("img");
        frameA.className = "partner-crazy-frame show";
        frameA.src = PARTNER_C1_SCENE_IMAGE;
        frameA.alt = "";

        const frameB = document.createElement("img");
        frameB.className = "partner-crazy-frame";
        frameB.src = PARTNER_CRAZY_CHAR2_IMAGE;
        frameB.alt = "";

        wrap.appendChild(frameA);
        wrap.appendChild(frameB);
        imageContainer.appendChild(wrap);
        partnerChar2OverlayEl = wrap;

        let showFirst = true;
        const swapFrames = () => {
            showFirst = !showFirst;
            frameA.classList.toggle("show", showFirst);
            frameB.classList.toggle("show", !showFirst);
        };

        swapFrames();
        partnerCrazyFrameSwapIntervalId = window.setInterval(swapFrames, MYLIEGE_FRAME_SWAP_MS);
    };

    const showFightAfterRedOverlay = () => {
        if (!imageContainer) {
            return;
        }
        removeFightAfterRedOverlay();
        fightAfterRedOverlayUnlocked = false;
        const overlay = document.createElement("img");
        overlay.className = "fight-after-red-overlay";
        overlay.src = FIGHT_AFTER_REDRED_OVERLAY_IMAGE;
        overlay.alt = "";

        const redMaskImage = new Image();
        const maskCanvas = document.createElement("canvas");
        const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
        const RED_MASK_ALPHA_THRESHOLD = 20;

        const getCoverFitBox = (boxW, boxH, imgW, imgH) => {
            const boxRatio = boxW / boxH;
            const imgRatio = imgW / imgH;
            let drawW;
            let drawH;
            if (imgRatio > boxRatio) {
                drawH = boxH;
                drawW = boxH * imgRatio;
            } else {
                drawW = boxW;
                drawH = boxW / imgRatio;
            }
            return {
                drawW,
                drawH,
                offsetX: (boxW - drawW) / 2,
                offsetY: (boxH - drawH) / 2,
            };
        };

        const setupRedMask = () => {
            if (!maskCtx || !redMaskImage.naturalWidth || !redMaskImage.naturalHeight) {
                return;
            }
            maskCanvas.width = redMaskImage.naturalWidth;
            maskCanvas.height = redMaskImage.naturalHeight;
            maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
            maskCtx.drawImage(redMaskImage, 0, 0);
        };

        const isMouseOnRedMaskPixel = (event) => {
            if (!maskCtx || !maskCanvas.width || !maskCanvas.height || !redMaskImage.naturalWidth || !redMaskImage.naturalHeight) {
                return false;
            }
            const rect = overlay.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const fit = getCoverFitBox(rect.width, rect.height, redMaskImage.naturalWidth, redMaskImage.naturalHeight);
            const relX = x - fit.offsetX;
            const relY = y - fit.offsetY;
            if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
                return false;
            }
            const imgX = Math.floor((relX / fit.drawW) * redMaskImage.naturalWidth);
            const imgY = Math.floor((relY / fit.drawH) * redMaskImage.naturalHeight);
            const sx = Math.min(Math.max(imgX, 0), maskCanvas.width - 1);
            const sy = Math.min(Math.max(imgY, 0), maskCanvas.height - 1);
            const pixel = maskCtx.getImageData(sx, sy, 1, 1).data;
            return pixel[3] > RED_MASK_ALPHA_THRESHOLD;
        };

        const setOverlayHoverState = (isHoveringMask) => {
            const desiredSrc = isHoveringMask
                ? FIGHT_AFTER_GREEN_OVERLAY_IMAGE
                : FIGHT_AFTER_REDRED_OVERLAY_IMAGE;
            if (!overlay.src.toLowerCase().includes(desiredSrc.toLowerCase())) {
                overlay.src = desiredSrc;
            }
        };

        redMaskImage.addEventListener("load", setupRedMask, { once: true });
        redMaskImage.src = FIGHT_AFTER_REDRED_OVERLAY_IMAGE;
        if (redMaskImage.complete && redMaskImage.naturalWidth > 0) {
            setupRedMask();
        }

        overlay.addEventListener("mousemove", (event) => {
            if (!fightAfterRedOverlayUnlocked) {
                setOverlayHoverState(false);
                overlay.style.cursor = "default";
                return;
            }
            const isOnMask = isMouseOnRedMaskPixel(event);
            setOverlayHoverState(isOnMask);
            overlay.style.cursor = isOnMask ? "pointer" : "default";
        });
        overlay.addEventListener("mouseleave", () => {
            setOverlayHoverState(false);
            overlay.style.cursor = "default";
        });
        overlay.addEventListener("mousedown", (event) => {
            if (!event.isTrusted) {
                return;
            }
            if (!fightAfterRedOverlayUnlocked) {
                return;
            }
            if (!isMouseOnRedMaskPixel(event)) {
                return;
            }
            const src = (overlay.currentSrc || overlay.src || "").toLowerCase();
            if (!src.includes("greengreen")) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            removeFightAfterRedOverlay();
            instantSwapScene(
                FIGHT_AFTER_STEPS2_SCENE_IMAGE,
                () => {
                    startOfficeTickSound();
                    window.setTimeout(() => {
                        if (isTransitioning) {
                            return;
                        }
                        showNextScenePostIt();
                    }, 4000);
                }
            );
        });

        imageContainer.appendChild(overlay);
        fightAfterRedOverlayEl = overlay;
    };

    const unlockFightAfterRedOverlay = () => {
        if (!fightAfterRedOverlayEl?.isConnected) {
            return;
        }
        fightAfterRedOverlayUnlocked = true;
    };

    const showSaviourSwordOverlay = () => {
        if (!imageContainer || saviourSwordOverlay) {
            return;
        }
        saviourSwordUnlocked = false;
        const overlay = document.createElement("img");
        overlay.className = "saviour-sword-overlay";
        overlay.src = SAVIOUR_SWORDD_OVERLAY_IMAGE;
        overlay.alt = "";
        const maskCanvas = document.createElement("canvas");
        const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
        const SWORD_MASK_ALPHA_THRESHOLD = 20;

        const getCoverFitBox = (boxW, boxH, imgW, imgH) => {
            const boxRatio = boxW / boxH;
            const imgRatio = imgW / imgH;
            let drawW;
            let drawH;
            if (imgRatio > boxRatio) {
                drawH = boxH;
                drawW = boxH * imgRatio;
            } else {
                drawW = boxW;
                drawH = boxW / imgRatio;
            }
            return {
                drawW,
                drawH,
                offsetX: (boxW - drawW) / 2,
                offsetY: (boxH - drawH) / 2,
            };
        };

        const setupSwordMask = () => {
            if (!maskCtx || !overlay.naturalWidth || !overlay.naturalHeight) {
                return;
            }
            maskCanvas.width = overlay.naturalWidth;
            maskCanvas.height = overlay.naturalHeight;
            maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
            maskCtx.drawImage(overlay, 0, 0);
        };

        const isMouseOnSwordPixel = (event) => {
            if (!maskCtx || !overlay.naturalWidth || !overlay.naturalHeight || !maskCanvas.width || !maskCanvas.height) {
                return false;
            }
            const rect = overlay.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const fit = getCoverFitBox(rect.width, rect.height, overlay.naturalWidth, overlay.naturalHeight);
            const relX = x - fit.offsetX;
            const relY = y - fit.offsetY;
            if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
                return false;
            }
            const imgX = Math.floor((relX / fit.drawW) * overlay.naturalWidth);
            const imgY = Math.floor((relY / fit.drawH) * overlay.naturalHeight);
            const sx = Math.min(Math.max(imgX, 0), maskCanvas.width - 1);
            const sy = Math.min(Math.max(imgY, 0), maskCanvas.height - 1);
            const pixel = maskCtx.getImageData(sx, sy, 1, 1).data;
            return pixel[3] > SWORD_MASK_ALPHA_THRESHOLD;
        };

        if (overlay.complete && overlay.naturalWidth) {
            setupSwordMask();
        } else {
            overlay.addEventListener("load", setupSwordMask, { once: true });
        }

        overlay.addEventListener("mousemove", (event) => {
            const isOnSword = isMouseOnSwordPixel(event);
            overlay.style.cursor = saviourSwordUnlocked && isOnSword ? "pointer" : "default";
        });
        overlay.addEventListener("mouseleave", () => {
            overlay.style.cursor = "default";
        });
        overlay.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!event.isTrusted) {
                return;
            }
            if (!saviourSwordUnlocked) {
                return;
            }
            if (!isMouseOnSwordPixel(event)) {
                return;
            }
            removeSaviourSwordOverlay();
            if (isTransitioning) {
                return;
            }
            showMyliegeAfterDelay(
                () => {
                    if (isTransitioning || saviourShroomSwapTimerId) {
                        return;
                    }
                    saviourShroomSwapTimerId = window.setTimeout(() => {
                        saviourShroomSwapTimerId = null;
                        if (isTransitioning) {
                            return;
                        }
                        isTransitioning = true;
                        instantSwapScene(SAVIOUR_SHROOMH_SCENE_IMAGE, () => {
                            window.setTimeout(() => {
                                savedNextAwaiting = false;
                                shroomhNextAwaiting = true;
                                showNextScenePostIt();
                            }, 1000);
                        });
                    }, SAVIOUR_EMPTYH_TO_SHROOMH_DELAY_MS);
                },
                SAVIOUR_EMPTYH_AFTER_SWORD_LIEGE_TEXT,
                MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                MYLIEGE_IMAGE,
                0,
            );
        });
        imageContainer.appendChild(overlay);
        saviourSwordOverlay = overlay;
    };

    const showSaviourSwordLiegeAfterDelay = () => {
        clearSaviourSwordLiegeTimer();
        saviourSwordLiegeTimerId = window.setTimeout(() => {
            saviourSwordLiegeTimerId = null;
            if (isTransitioning) {
                return;
            }
            showMyliegeAfterDelay(
                () => {
                    saviourSwordUnlocked = true;
                },
                SAVIOUR_SWORD_LIEGE_TEXT,
                MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                MYLIEGE_IMAGE,
                0,
            );
        }, SAVIOUR_SWORD_LIEGE_DELAY_MS);
    };

    const stripGirlTwinBeatToTwinsOnly = () => {
        stopTypewriterSound();
        clearMyliegeAnimationInterval();
        clearMyliegeTimer();
        clearMyliegePostItTimer();
        myliegeSprite?.classList.remove("show");
        myliegeSprite2?.classList.remove("show");
        myliegeSidePostIt?.classList.remove("show");
        myliegeSidePostIt?.classList.remove("typing");
        if (myliegeSidePostIt) {
            myliegeSidePostIt.dataset.mode = "";
            myliegeSidePostIt.style.cursor = "default";
            myliegeSidePostIt.onclick = null;
        }
    };

    const hideGirlTwinOverlay = () => {
        clearGirlTwinLiegeTwinOnlyTimer();
        clearGirlTwinLiegeStripDelayTimer();
        clearGirlTwinWHandsAppearTimer();
        clearGirlTwinSavedLiegeTimer();
        clearGirlTwinSavedNextPostItTimer();
        clearSaviourSwordLiegeTimer();
        clearSaviourShroomSwapTimer();
        removeGirlTwinWHandsOverlay();
        removeGirlTwinSavedOverlay();
        removeSaviourSwordOverlay();
        savedNextAwaiting = false;
        shroomhNextAwaiting = false;
        girlTwinLiegeScheduled = false;
        imageContainer?.classList.remove("girl-twin-beat");
        clearGirlTwinSwapInterval();
        girlTwinImg1?.remove();
        girlTwinImg2?.remove();
        girlTwinImg1 = null;
        girlTwinImg2 = null;
    };

    const clearOfficeSevenPostItTimer = () => {
        if (!officeSevenPostItTimerId) {
            return;
        }
        window.clearTimeout(officeSevenPostItTimerId);
        officeSevenPostItTimerId = null;
    };

    const clearRestartPostItTimer = () => {
        if (!restartPostItTimerId) {
            return;
        }
        window.clearTimeout(restartPostItTimerId);
        restartPostItTimerId = null;
    };

    const clearForestBlueResetTextTimer = () => {
        if (!forestBlueResetTextTimerId) {
            return;
        }
        window.clearTimeout(forestBlueResetTextTimerId);
        forestBlueResetTextTimerId = null;
    };

    const removeOfficeSevenPostIt = () => {
        clearOfficeSevenPostItTimer();
        clearRestartPostItTimer();
        officeSevenPostIt?.remove();
        officeSevenPostIt = null;
        officeSevenWakeUpPostIts.forEach((note) => {
            note.remove();
        });
        officeSevenWakeUpTargetBoxes.forEach((box) => {
            box.remove();
        });
        officeSevenSolvedOverlay?.remove();
        officeSevenWakeUpPostIts = [];
        officeSevenWakeUpTargets = [];
        officeSevenWakeUpTargetBoxes = [];
        officeSevenSolvedOverlay = null;
        officeSevenWakeUpLocked = false;
    };

    const applyTypewriterVars = (element, text) => {
        if (!element) {
            return;
        }
        const textLength = Math.max(text.length, 1);
        const durationMs = textLength * TYPEWRITER_MS_PER_CHAR;
        element.style.setProperty("--type-width", `${textLength}ch`);
        element.style.setProperty("--type-steps", `${textLength}`);
        element.style.setProperty("--type-duration", `${durationMs}ms`);
    };

    const setMyliegeSidePostItText = (text) => {
        setMyliegeSidePostItTextModule({
            myliegeSidePostIt,
            text,
            applyTypewriterVars,
        });
        const sideNoteText = myliegeSidePostIt?.querySelector(".post-it-text");
        if (sideNoteText) {
            sideNoteText.classList.toggle("glitch-post-it-text", text === DISCOMB_LIEGE_SIDE_NOTE_TEXT);
        }
    };

    const animateLiegeSidePostItTypewriter = (text, onTypeComplete) => {
        animateLiegeSidePostItTypewriterModule({
            myliegeSidePostIt,
            text,
            applyTypewriterVars,
            startTypewriterSound,
            stopTypewriterSound,
            onTypeComplete,
        });
    };

    const removeDiscombOutcomePostIt = () => {
        discombOutcomePostIt?.remove();
        discombOutcomePostIt = null;
    };

    const showDiscombOutcomePostIt = () => {
        if (!imageContainer) {
            return;
        }
        removeDiscombOutcomePostIt();
        discombOutcomePostIt = createPostItDiv({
            className: "post-it discomb-outcome-banner show",
            mode: "discomb-outcome",
        });
        const outcomeText = createPostItText({
            text: DISCOMB_OUTCOME_NOTE_TEXT,
            className: "post-it-text post-it-text-bold",
        });
        discombOutcomePostIt.appendChild(outcomeText);
        imageContainer.appendChild(discombOutcomePostIt);
    };

    const ensureMyliegeSprite = () => {
        const next = ensureMyliegeSpriteModule({
            imageContainer,
            myliegeSprite,
            myliegeSprite2,
            myliegeSidePostIt,
            myliegeImage: MYLIEGE_IMAGE,
            myliegeSecondaryDefaultImage: MYLIEGE_SECONDARY_DEFAULT_IMAGE,
            positionMyliegeSidePostIt,
            setMyliegeSidePostItText,
            myliegeDefaultNoteText: MYLIEGE_NOTE_TEXT,
        });
        myliegeSprite = next.myliegeSprite;
        myliegeSprite2 = next.myliegeSprite2;
        myliegeSidePostIt = next.myliegeSidePostIt;
    };

    const setMyliegeAnimationFrames = (
        secondaryFrameImage = MYLIEGE_SECONDARY_DEFAULT_IMAGE,
        primaryFrameImage = MYLIEGE_IMAGE
    ) => {
        setMyliegeAnimationFramesModule({
            myliegeSprite,
            myliegeSprite2,
            myliegeImage: primaryFrameImage,
            secondaryFrameImage,
        });
    };

    const showMyliegeAfterDelay = (
        onPostItTyped,
        noteText = MYLIEGE_NOTE_TEXT,
        secondaryFrameImage = MYLIEGE_SECONDARY_DEFAULT_IMAGE,
        primaryFrameImage = MYLIEGE_IMAGE,
        appearDelayMs = 1000,
        options = {}
    ) => {
        const keepPostItVisible = Boolean(options.keepPostItVisible);
        const clearTextBeforeTyping = Boolean(options.clearTextBeforeTyping);
        clearMyliegeTimer();
        clearMyliegePostItTimer();
        ensureMyliegeSprite();
        setMyliegeAnimationFrames(secondaryFrameImage, primaryFrameImage);
        if (!myliegeSprite) {
            return false;
        }
        if (!keepPostItVisible) {
            myliegeSprite.classList.remove("show");
            myliegeSprite2?.classList.remove("show");
            myliegeSidePostIt?.classList.remove("show");
        }
        myliegeSidePostIt?.classList.remove("typing");
        if (keepPostItVisible && clearTextBeforeTyping) {
            const sideNoteText = myliegeSidePostIt?.querySelector(".post-it-text");
            if (sideNoteText) {
                sideNoteText.textContent = "";
                sideNoteText.style.setProperty("--typewriter-length", "0");
            }
        }
        clearMyliegeAnimationInterval();
        myliegeTimerId = window.setTimeout(() => {
            myliegeSprite?.classList.add("show");
            requestAnimationFrame(() => {
                positionMyliegeSidePostIt();
            });
            myliegePostItTimerId = window.setTimeout(() => {
                if (!myliegeSidePostIt) {
                    return;
                }

                setMyliegeSidePostItText(noteText);
                const noteTextEl = myliegeSidePostIt.querySelector(".post-it-text");
                if (!noteTextEl) {
                    myliegeSidePostIt.classList.add("show");
                    if (onPostItTyped) {
                        onPostItTyped();
                    }
                    return;
                }

                myliegeSidePostIt.classList.add("show");
                myliegeSidePostIt.classList.remove("typing");
                void noteTextEl.offsetWidth;
                myliegeSidePostIt.classList.add("typing");
                startTypewriterSound();
                let showFirstFrame = true;
                const swapMyliegeFrame = () => {
                    showFirstFrame = !showFirstFrame;
                    myliegeSprite?.classList.toggle("show", showFirstFrame);
                    myliegeSprite2?.classList.toggle("show", !showFirstFrame);
                };
                clearMyliegeAnimationInterval();
                swapMyliegeFrame();
                myliegeAnimationIntervalId = window.setInterval(swapMyliegeFrame, MYLIEGE_FRAME_SWAP_MS);

                const onTypedDone = (event) => {
                    if (event.animationName !== "type-note") {
                        return;
                    }

                    myliegeSidePostIt?.classList.remove("typing");
                    stopTypewriterSound();
                    if (onPostItTyped) {
                        onPostItTyped();
                    }
                };

                noteTextEl.addEventListener("animationend", onTypedDone, { once: true });
                myliegePostItTimerId = null;
            }, MYLIEGE_POST_IT_DELAY_MS);
            myliegeTimerId = null;
        }, appearDelayMs);
        return true;
    };

    const positionMyliegeSidePostIt = () => {
        positionMyliegeSidePostItModule({
            imageContainer,
            myliegeSprite,
            myliegeSprite2,
            myliegeSidePostIt,
            visiblePaddingXRatio: MYLIEGE_VISIBLE_PADDING_X_RATIO,
            sideNoteGapPx: MYLIEGE_SIDE_NOTE_GAP_PX,
            sideNoteYOffsetPx: MYLIEGE_SIDE_NOTE_Y_OFFSET_PX,
        });
    };

    const primeMushroomPixelMasks = () => {
        if (mushroomPixelMasksPrimed) {
            return;
        }
        mushroomPixelMasksPrimed = true;
        const paths = [MUSHROOM_REALSHROOM_IMAGE, ...MUSHROOM_BITE_CLICK_IMAGES];
        paths.forEach((path) => {
            if (mushroomPixelMaskMap.has(path)) {
                return;
            }
            const img = new Image();
            img.addEventListener("load", () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext("2d", { willReadFrequently: true });
                if (!ctx) {
                    return;
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
                mushroomPixelMaskMap.set(path, {
                    ctx,
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                });
            }, { once: true });
            img.src = path;
        });
    };

    const getMushroomMaskPathForCurrentFrame = (currentSrc) => {
        if (!currentSrc) {
            return null;
        }
        const normalizedSrc = currentSrc.toLowerCase();
        const maskPaths = [MUSHROOM_REALSHROOM_IMAGE, ...MUSHROOM_BITE_CLICK_IMAGES];
        return maskPaths.find((path) => normalizedSrc.endsWith(path.toLowerCase())) || null;
    };

    const isCurrentMushroomBiteFrame = () => {
        const src = mushroomRealShroomElement?.src?.toLowerCase();
        if (!src) {
            return false;
        }
        if (src.endsWith(MUSHROOM_REALSHROOM_IMAGE.toLowerCase())) {
            return true;
        }
        return MUSHROOM_BITE_CLICK_IMAGES.some((path) => src.endsWith(path.toLowerCase()));
    };

    const isMouseOnMushroomPixel = (event) => {
        if (!mushroomRealShroomElement?.naturalWidth || !mushroomRealShroomElement?.naturalHeight) {
            return false;
        }
        const rect = mushroomRealShroomElement.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;
        const drawScale = Math.min(
            rect.width / mushroomRealShroomElement.naturalWidth,
            rect.height / mushroomRealShroomElement.naturalHeight
        );
        const drawWidth = mushroomRealShroomElement.naturalWidth * drawScale;
        const drawHeight = mushroomRealShroomElement.naturalHeight * drawScale;
        const drawOffsetX = (rect.width - drawWidth) / 2;
        const drawOffsetY = (rect.height - drawHeight) / 2;
        const relX = localX - drawOffsetX;
        const relY = localY - drawOffsetY;
        if (relX < 0 || relY < 0 || relX > drawWidth || relY > drawHeight) {
            return false;
        }

        const maskPath = getMushroomMaskPathForCurrentFrame(mushroomRealShroomElement.src);
        const dynamicMaskKey = maskPath || "__current_mushroom_frame__";
        if (!mushroomPixelMaskMap.has(dynamicMaskKey)) {
            const canvas = document.createElement("canvas");
            canvas.width = mushroomRealShroomElement.naturalWidth;
            canvas.height = mushroomRealShroomElement.naturalHeight;
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(mushroomRealShroomElement, 0, 0, canvas.width, canvas.height);
                mushroomPixelMaskMap.set(dynamicMaskKey, {
                    ctx,
                    width: canvas.width,
                    height: canvas.height,
                });
            }
        }
        const mask = mushroomPixelMaskMap.get(dynamicMaskKey);
        if (!mask) {
            return false;
        }

        const imgX = Math.min(
            mask.width - 1,
            Math.max(0, Math.floor((relX / drawWidth) * mask.width))
        );
        const imgY = Math.min(
            mask.height - 1,
            Math.max(0, Math.floor((relY / drawHeight) * mask.height))
        );
        const pixel = mask.ctx.getImageData(imgX, imgY, 1, 1).data;
        return pixel[3] > 20;
    };

    const updateMushroomCursor = (event) => {
        if (!mushroomRealShroomElement) {
            return;
        }
        const canShowPointer = (
            mushroomRealShroomElement.classList.contains("is-bite-target")
            && mushroomBiteUnlocked
            && isCurrentMushroomBiteFrame()
            && !!event
            && isMouseOnMushroomPixel(event)
        );
        mushroomRealShroomElement.style.cursor = canShowPointer ? "pointer" : "default";
    };

    const endMushroomRealshroomBiteInteraction = () => {
        mushroomRealShroomBiteAbort?.abort();
        mushroomRealShroomBiteAbort = null;
        clearMushroomBite3NoteSwapTimer();
        clearMushroomBite3NextTimer();
        mushroomRealShroomBiteClicks = 0;
        mushroomBiteUnlocked = false;
        mushroomBiteNextAwaiting = false;
        discombNextAwaiting = false;
        mushroomRealShroomElement?.classList.remove("is-bite-target");
        if (mushroomRealShroomElement) {
            mushroomRealShroomElement.style.cursor = "default";
        }
        if (mushroomRealShroomElement) {
            mushroomRealShroomElement.src = MUSHROOM_REALSHROOM_IMAGE;
        }
    };

    const startMushroomBite3LiegeSequence = () => {
        clearMushroomBite3NoteSwapTimer();
        clearMushroomBite3NextTimer();
        hideNextScenePostIt();
        const startedMyliege = showMyliegeAfterDelay(
            () => {
                clearMushroomBite3NoteSwapTimer();
                mushroomBite3NoteSwapTimerId = window.setTimeout(() => {
                    if (isTransitioning || !myliegeSidePostIt) {
                        return;
                    }
                    myliegeSidePostIt.classList.remove("show");
                    myliegeSidePostIt.classList.remove("typing");
                    stopTypewriterSound();
                    requestAnimationFrame(() => {
                        if (isTransitioning || !myliegeSidePostIt) {
                            return;
                        }
                        myliegeSidePostIt.classList.add("show");
                        animateLiegeSidePostItTypewriter(MUSHROOM_BITE3_NOTE_TEXT_2, () => {
                            clearMushroomBite3NoteSwapTimer();
                            mushroomBite3NoteSwapTimerId = window.setTimeout(() => {
                                if (isTransitioning || !myliegeSidePostIt) {
                                    return;
                                }
                                myliegeSidePostIt.classList.remove("show");
                                myliegeSidePostIt.classList.remove("typing");
                                stopTypewriterSound();
                                requestAnimationFrame(() => {
                                    if (isTransitioning || !myliegeSidePostIt) {
                                        return;
                                    }
                                    myliegeSidePostIt.classList.add("show");
                                    animateLiegeSidePostItTypewriter(MUSHROOM_BITE3_NOTE_TEXT_3, () => {
                                        clearMushroomBite3NextTimer();
                                        mushroomBite3NextTimerId = window.setTimeout(() => {
                                            if (isTransitioning) {
                                                return;
                                            }
                                            mushroomBiteNextAwaiting = true;
                                            showNextScenePostIt();
                                            mushroomBite3NextTimerId = null;
                                        }, MUSHROOM_BITE3_NEXT_DELAY_MS);
                                    });
                                });
                                mushroomBite3NoteSwapTimerId = null;
                            }, MUSHROOM_BITE3_NOTE_SWAP_DELAY_MS);
                        });
                    });
                    mushroomBite3NoteSwapTimerId = null;
                }, MUSHROOM_BITE3_NOTE_SWAP_DELAY_MS);
            },
            MUSHROOM_BITE3_NOTE_TEXT_1,
            MYLIEGE_SECONDARY_DEFAULT_IMAGE,
            MYLIEGE_IMAGE,
            0
        );
        if (!startedMyliege) {
            mushroomBiteNextAwaiting = true;
            showNextScenePostIt();
        }
    };

    const onMushroomRealshroomBiteAdvance = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (isTransitioning || !mushroomRealShroomElement?.classList.contains("show")) {
            return;
        }
        if (!mushroomRealShroomElement.classList.contains("is-bite-target")) {
            return;
        }
        if (!mushroomBiteUnlocked) {
            return;
        }
        if (!isMouseOnMushroomPixel(event)) {
            return;
        }

        const el = mushroomRealShroomElement;
        const paths = MUSHROOM_BITE_CLICK_IMAGES;
        if (mushroomRealShroomBiteClicks >= 3 || paths.length < 3) {
            return;
        }

        if (mushroomRealShroomBiteClicks === 2) {
            el.src = paths[2];
            updateMushroomCursor(event);
            mushroomRealShroomBiteClicks = 3;
            mushroomBiteUnlocked = false;
            mushroomRealShroomBiteAbort?.abort();
            mushroomRealShroomBiteAbort = null;
            el.classList.remove("is-bite-target");
            startMushroomBite3LiegeSequence();
            return;
        }

        el.src = paths[mushroomRealShroomBiteClicks];
        updateMushroomCursor(event);
        mushroomRealShroomBiteClicks += 1;
    };

    const hideMyliege = () => {
        hideGirlTwinOverlay();
        clearFgunSequenceTimer();
        clearFgunmanOutcomeNoteTimer();
        clearFgunmanOutcomeToFdeathTimer();
        clearFdeathOutcomeNoteTimer();
        clearFdeathOutcomeRestartTimer();
        removeFdeathOutcomePostIt();
        endMushroomRealshroomBiteInteraction();
        treeSceneModule.cleanup();
        clearMyliegeTimer();
        clearMyliegePostItTimer();
        clearRedgLiegeNextTimer();
        redgNextAwaiting = false;
        clearDiscombOutcomeToGoodNightTimer();
        clearMushroomNoteSwapTimer();
        clearMushroomHungryDelayTimer();
        clearMushroomBiteDelayTimer();
        clearMushroomBite3NoteSwapTimer();
        clearMushroomBite3NextTimer();
        clearWorkingNextPostItTimer();
        clearMushroomRealShroomDelayTimer();
        removeMushroomBiteOverlay();
        clearNextPostItAfterTypingTimer();
        clearForestBlueResetTextTimer();
        clearMyliegeAnimationInterval();
        myliegeSprite?.classList.remove("show");
        myliegeSprite2?.classList.remove("show");
        myliegeSidePostIt?.classList.remove("show");
        myliegeSidePostIt?.classList.remove("typing");
        removeDiscombOutcomePostIt();
        mushroomRealShroomElement?.classList.remove("show");
        if (myliegeSidePostIt) {
            myliegeSidePostIt.dataset.mode = "";
            myliegeSidePostIt.style.cursor = "default";
            myliegeSidePostIt.onclick = null;
        }
        stopTypewriterSound();
    };

    window.addEventListener("resize", () => {
        positionMyliegeSidePostIt();
    });
    document.addEventListener("fullscreenchange", () => {
        positionMyliegeSidePostIt();
    });


    const clearOfficeSequenceTimer = officeSequenceState.clearOfficeSequenceTimer;
    const clearMushroomSequenceTimer = mushroomSequenceState.clearMushroomSequenceTimer;

    const clearMushroomNoteSwapTimer = () => {
        if (!mushroomNoteSwapTimerId) {
            return;
        }

        window.clearTimeout(mushroomNoteSwapTimerId);
        mushroomNoteSwapTimerId = null;
    };

    const clearMushroomHungryDelayTimer = () => {
        if (!mushroomHungryDelayTimerId) {
            return;
        }

        window.clearTimeout(mushroomHungryDelayTimerId);
        mushroomHungryDelayTimerId = null;
    };

    const clearMushroomBiteDelayTimer = () => {
        if (!mushroomBiteDelayTimerId) {
            return;
        }

        window.clearTimeout(mushroomBiteDelayTimerId);
        mushroomBiteDelayTimerId = null;
    };

    const clearMushroomBite3NoteSwapTimer = () => {
        if (!mushroomBite3NoteSwapTimerId) {
            return;
        }
        window.clearTimeout(mushroomBite3NoteSwapTimerId);
        mushroomBite3NoteSwapTimerId = null;
    };

    const clearMushroomBite3NextTimer = () => {
        if (!mushroomBite3NextTimerId) {
            return;
        }
        window.clearTimeout(mushroomBite3NextTimerId);
        mushroomBite3NextTimerId = null;
    };

    const clearMushroomRealShroomDelayTimer = () => {
        if (!mushroomRealShroomDelayTimerId) {
            return;
        }

        window.clearTimeout(mushroomRealShroomDelayTimerId);
        mushroomRealShroomDelayTimerId = null;
    };

    const removeMushroomBiteOverlay = () => {
        if (!mushroomBiteOverlay) {
            return;
        }
        mushroomBiteOverlay.remove();
        mushroomBiteOverlay = null;
        stopTypewriterSound();
    };

    const moveOfficeSevenPostItToCenter = () => {
        if (!imageContainer || !officeSevenPostIt) {
            return;
        }

        const containerRect = imageContainer.getBoundingClientRect();
        const noteWidth = officeSevenPostIt.offsetWidth || 220;
        const noteHeight = officeSevenPostIt.offsetHeight || 220;
        const left = (containerRect.width - noteWidth) / 2;
        const top = (containerRect.height - noteHeight) / 2;

        officeSevenPostIt.style.left = `${Math.round(left)}px`;
        officeSevenPostIt.style.top = `${Math.round(top)}px`;
        officeSevenPostIt.style.bottom = "auto";
        officeSevenPostIt.style.right = "auto";
        officeSevenPostIt.style.transform = "rotate(0deg)";
    };

    const moveOfficeSevenPostItToAfterOffice7Area = () => {
        if (!imageContainer || !officeSevenPostIt) {
            return;
        }

        const containerRect = imageContainer.getBoundingClientRect();
        const noteWidth = officeSevenPostIt.offsetWidth || 220;
        const noteHeight = officeSevenPostIt.offsetHeight || 220;
        const horizontalPadding = 30;
        const verticalPadding = 40;
        const maxLeft = Math.max(horizontalPadding, containerRect.width - noteWidth - horizontalPadding);
        const maxTop = Math.max(verticalPadding, containerRect.height - noteHeight - verticalPadding);
        const targetLeft = Math.min(maxLeft, Math.round(containerRect.width * 0.12));
        const targetTop = Math.min(maxTop, Math.round(containerRect.height * 0.66));

        officeSevenPostIt.style.left = `${targetLeft}px`;
        officeSevenPostIt.style.top = `${targetTop}px`;
        officeSevenPostIt.style.bottom = "auto";
        officeSevenPostIt.style.right = "auto";
        officeSevenPostIt.style.transform = "rotate(-7deg)";
    };

    let showRestartPostIt;

    let showGoodNightPostItCenterThenOffice7Fade;

    const showResetPostIt = () => {
        if (!myliegeSidePostIt) {
            return;
        }

        const resetText = myliegeSidePostIt.querySelector(".post-it-text");
        if (!resetText) {
            return;
        }

        myliegeSidePostIt.dataset.mode = "reset";
        myliegeSidePostIt.style.cursor = "default";
        myliegeSidePostIt.classList.add("show");
        myliegeSidePostIt.classList.remove("typing");
        stopTypewriterSound();
        myliegeSidePostIt.onclick = null;

        clearForestBlueResetTextTimer();
        forestBlueResetTextTimerId = window.setTimeout(() => {
            if (!myliegeSidePostIt || myliegeSidePostIt.dataset.mode !== "reset") {
                return;
            }

            resetText.textContent = "";
            resetText.style.whiteSpace = "";
            myliegeSidePostIt.classList.remove("typing");
            stopTypewriterSound();

            requestAnimationFrame(() => {
                if (!myliegeSidePostIt || myliegeSidePostIt.dataset.mode !== "reset") {
                    return;
                }
                resetText.textContent = FOREST_BLUE_RESET_TEXT;
                applyTypewriterVars(resetText, FOREST_BLUE_RESET_TEXT);
                myliegeSidePostIt.classList.remove("typing");
                void resetText.offsetWidth;
                myliegeSidePostIt.classList.add("typing");
                startTypewriterSound();

                resetText.addEventListener("animationend", (typedEvent) => {
                    if (typedEvent.animationName !== "type-note") {
                        return;
                    }
                    myliegeSidePostIt?.classList.remove("typing");
                    stopTypewriterSound();
                    forestBlueShoesLocked = false;
                }, { once: true });
            });

            forestBlueResetTextTimerId = null;
        }, FOREST_BLUE_RESET_DELAY_MS);
    };

    const getCoverFit = (boxW, boxH, imgW, imgH) => {
        const boxRatio = boxW / boxH;
        const imgRatio = imgW / imgH;
        let drawW;
        let drawH;

        if (imgRatio > boxRatio) {
            drawH = boxH;
            drawW = boxH * imgRatio;
        } else {
            drawW = boxW;
            drawH = boxW / imgRatio;
        }

        return {
            drawW,
            drawH,
            offsetX: (boxW - drawW) / 2,
            offsetY: (boxH - drawH) / 2
        };
    };

    const setupForestBlueShoeMask = (shoeElement, maskCanvas, maskCtx) => {
        if (!maskCtx || !shoeElement?.naturalWidth || !shoeElement?.naturalHeight) {
            return;
        }
        maskCanvas.width = shoeElement.naturalWidth;
        maskCanvas.height = shoeElement.naturalHeight;
        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.drawImage(shoeElement, 0, 0);
    };

    const isMouseOnForestBlueShoe = (event, shoeElement, maskCtx) => {
        if (!forestBlueShoesOverlay || !maskCtx || !shoeElement?.naturalWidth || !shoeElement?.naturalHeight) {
            return false;
        }

        const rect = forestBlueShoesOverlay.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const fit = getCoverFit(rect.width, rect.height, shoeElement.naturalWidth, shoeElement.naturalHeight);
        const relX = x - fit.offsetX;
        const relY = y - fit.offsetY;

        if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
            return false;
        }

        const imgX = Math.floor((relX / fit.drawW) * shoeElement.naturalWidth);
        const imgY = Math.floor((relY / fit.drawH) * shoeElement.naturalHeight);
        const pixel = maskCtx.getImageData(imgX, imgY, 1, 1).data;
        return pixel[3] > 20;
    };

    const setForestBlueShoeHoverState = (shoeElement, isHovered) => {
        if (!shoeElement) {
            return;
        }
        const targetSrc = isHovered ? shoeElement.dataset.hoverSrc : shoeElement.dataset.baseSrc;
        if (targetSrc && shoeElement.src !== targetSrc) {
            shoeElement.src = targetSrc;
        }
    };

    const clearForestBlueShoesOverlayTimer = () => {
        if (!forestBlueShoesOverlayTimerId) {
            return;
        }
        window.clearTimeout(forestBlueShoesOverlayTimerId);
        forestBlueShoesOverlayTimerId = null;
    };

    const ensureForestBlueShoesOverlay = () => {
        if (!imageContainer) {
            return null;
        }
        if (!forestBlueShoesOverlay) {
            forestBlueShoesOverlay = document.createElement("div");
            forestBlueShoesOverlay.className = "forest-blue-shoes-overlay";

            const leftShoe = document.createElement("img");
            leftShoe.className = "forest-blue-shoe forest-blue-shoe-left";
            leftShoe.src = FOREST_BLUE_LEFT_SHOE_IMAGE;
            leftShoe.dataset.baseSrc = FOREST_BLUE_LEFT_SHOE_IMAGE;
            leftShoe.dataset.hoverSrc = FOREST_LEFT_SHOE_IMAGE;
            leftShoe.alt = "";

            const rightShoe = document.createElement("img");
            rightShoe.className = "forest-blue-shoe forest-blue-shoe-right";
            rightShoe.src = FOREST_BLUE_RIGHT_SHOE_IMAGE;
            rightShoe.dataset.baseSrc = FOREST_BLUE_RIGHT_SHOE_IMAGE;
            rightShoe.dataset.hoverSrc = FOREST_RIGHT_SHOE_IMAGE;
            rightShoe.alt = "";
            forestBlueLeftShoeElement = leftShoe;
            forestBlueRightShoeElement = rightShoe;

            leftShoe.addEventListener("load", () => {
                setupForestBlueShoeMask(leftShoe, forestBlueLeftMaskCanvas, forestBlueLeftMaskCtx);
            });
            rightShoe.addEventListener("load", () => {
                setupForestBlueShoeMask(rightShoe, forestBlueRightMaskCanvas, forestBlueRightMaskCtx);
            });
            if (leftShoe.complete) {
                setupForestBlueShoeMask(leftShoe, forestBlueLeftMaskCanvas, forestBlueLeftMaskCtx);
            }
            if (rightShoe.complete) {
                setupForestBlueShoeMask(rightShoe, forestBlueRightMaskCanvas, forestBlueRightMaskCtx);
            }

            forestBlueShoesOverlay.appendChild(leftShoe);
            forestBlueShoesOverlay.appendChild(rightShoe);

            forestBlueShoesOverlay.addEventListener("mousemove", (event) => {
                if (!forestBlueShoesOverlay.classList.contains("show")) {
                    return;
                }
                if (forestBlueShoesLocked) {
                    resetForestBlueShoesOverlayToBase();
                    forestBlueShoesOverlay.style.cursor = "default";
                    return;
                }
                const leftHovered = isMouseOnForestBlueShoe(event, forestBlueLeftShoeElement, forestBlueLeftMaskCtx);
                const rightHovered = isMouseOnForestBlueShoe(event, forestBlueRightShoeElement, forestBlueRightMaskCtx);
                setForestBlueShoeHoverState(forestBlueLeftShoeElement, leftHovered);
                setForestBlueShoeHoverState(forestBlueRightShoeElement, rightHovered);
                forestBlueShoesOverlay.style.cursor = (leftHovered || rightHovered) ? "pointer" : "default";
            });
            forestBlueShoesOverlay.addEventListener("mouseleave", () => {
                resetForestBlueShoesOverlayToBase();
                forestBlueShoesOverlay.style.cursor = "default";
            });
            forestBlueShoesOverlay.addEventListener("click", (event) => {
                if (!forestBlueShoesOverlay.classList.contains("show") || forestBlueShoesLocked || isTransitioning) {
                    return;
                }

                const clickedLeftShoe = isMouseOnForestBlueShoe(
                    event,
                    forestBlueLeftShoeElement,
                    forestBlueLeftMaskCtx
                );
                if (clickedLeftShoe) {
                    startDiscombFromForestBlueLeftShoe();
                    return;
                }

                const clickedRightShoe = isMouseOnForestBlueShoe(
                    event,
                    forestBlueRightShoeElement,
                    forestBlueRightMaskCtx
                );
                if (!clickedRightShoe) {
                    return;
                }

                startMushroomSequence();
            });

            imageContainer.appendChild(forestBlueShoesOverlay);
        } else if (!forestBlueShoesOverlay.isConnected) {
            imageContainer.appendChild(forestBlueShoesOverlay);
        }
        return forestBlueShoesOverlay;
    };

    const resetForestBlueShoesOverlayToBase = () => {
        setForestBlueShoeHoverState(forestBlueLeftShoeElement, false);
        setForestBlueShoeHoverState(forestBlueRightShoeElement, false);
    };

    const hideForestBlueShoesOverlay = () => {
        clearForestBlueShoesOverlayTimer();
        forestBlueShoesLocked = true;
        forestBlueShoesOverlay?.classList.remove("show");
        resetForestBlueShoesOverlayToBase();
        if (forestBlueShoesOverlay) {
            forestBlueShoesOverlay.style.cursor = "default";
        }
    };

    const treeSceneModule = createTreeSceneModule({
        imageContainer,
        getIsTransitioning: () => isTransitioning,
        showMyliegeAfterDelay,
        myliegeSecondaryDefaultImage: MYLIEGE_SECONDARY_DEFAULT_IMAGE,
        getCoverFit,
        swapBackgroundInstant: (imagePath) => {
            if (!sceneBackground) {
                return;
            }
            sceneBackground.src = imagePath;
            const useContain = typeof imagePath === "string" && imagePath.toLowerCase().includes("fallingdown");
            sceneBackground.style.objectFit = useContain ? "contain" : "cover";
            sceneBackground.style.opacity = "1";
            sceneBackground.style.transition = "";
        },
        prepareBeforeAmTreeRedG: () => {
            hideMyliege();
        },
        onAmTreeRedGirlShown: () => {
            showMyliegeAfterDelay(
                () => {
                    clearRedgLiegeNextTimer();
                    redgLiegeNextTimerId = window.setTimeout(() => {
                        redgNextAwaiting = true;
                        showNextScenePostIt();
                        redgLiegeNextTimerId = null;
                    }, REDG_AFTER_LIEGE_NEXT_BUTTON_DELAY_MS);
                },
                REDG_LIEGE_DISCOVERY_NOTE_TEXT,
                MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                MYLIEGE_IMAGE,
                REDG_LIEGE_DISCOVERY_DELAY_MS
            );
        },
    });

    const showForestBlueShoesOverlayAfterDelay = () => {
        hideForestBlueShoesOverlay();
        const overlay = ensureForestBlueShoesOverlay();
        if (!overlay) {
            return;
        }
        forestBlueShoesOverlayTimerId = window.setTimeout(() => {
            const onForestBlueScene = sceneBackground?.src.toLowerCase().includes("forestblue");
            if (!onForestBlueScene) {
                return;
            }
            forestBlueShoesLocked = true;
            overlay.classList.add("show");
            const startedMyliege = showMyliegeAfterDelay(
                () => {
                    showResetPostIt();
                },
                FOREST_BLUE_DECISION_TEXT,
                MYLIEGE_SECONDARY_DEFAULT_IMAGE
            );
            if (!startedMyliege) {
                showResetPostIt();
            }
            forestBlueShoesOverlayTimerId = null;
        }, FOREST_BLUE_SHOES_OVERLAY_DELAY_MS);
    };

    const clearDoneSideOverlayTimer = () => {
        if (!doneSideOverlayTimerId) {
            return;
        }
        window.clearTimeout(doneSideOverlayTimerId);
        doneSideOverlayTimerId = null;
    };

    const clearDoneEndRestartPostItTimer = () => {
        if (!doneEndRestartPostItTimerId) {
            return;
        }
        window.clearTimeout(doneEndRestartPostItTimerId);
        doneEndRestartPostItTimerId = null;
    };

    const removeEndCreditsLinks = () => {
        endCreditsLinks?.remove();
        endCreditsLinks = null;
    };

    const createSocialIconLink = (href, label, svgMarkup) => {
        const link = document.createElement("a");
        link.className = "end-credits-link";
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", label);
        link.innerHTML = svgMarkup;
        link.addEventListener("mousedown", (event) => {
            event.stopPropagation();
        });
        link.addEventListener("click", (event) => {
            event.stopPropagation();
        });
        return link;
    };

    const showEndCreditsLinks = () => {
        if (!imageContainer) {
            return;
        }

        removeEndCreditsLinks();

        endCreditsLinks = document.createElement("div");
        endCreditsLinks.className = "end-credits-links";

        const githubSvg = `
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12.3C24 5.7 18.6.3 12 .3z"/>
            </svg>
        `;
        const linkedinSvg = `
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zM7.1 20.5H3.6V9h3.5v11.5zM5.3 7.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm15.2 13.1h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.6V9h3.3v1.6c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3v6.4z"/>
            </svg>
        `;

        endCreditsLinks.append(
            createSocialIconLink(END_CREDITS_GITHUB_URL, "GitHub", githubSvg),
            createSocialIconLink(END_CREDITS_LINKEDIN_URL, "LinkedIn", linkedinSvg)
        );
        imageContainer.appendChild(endCreditsLinks);
    };

    const setupDoneSideMask = (imgElement, maskCanvas, maskCtx) => {
        if (!maskCtx || !imgElement?.naturalWidth || !imgElement?.naturalHeight) {
            return;
        }
        maskCanvas.width = imgElement.naturalWidth;
        maskCanvas.height = imgElement.naturalHeight;
        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.drawImage(imgElement, 0, 0);
    };

    const isMouseOnDoneSide = (event, imgElement, maskCtx) => {
        if (!doneSideOverlay || !maskCtx || !imgElement?.naturalWidth || !imgElement?.naturalHeight) {
            return false;
        }

        const rect = doneSideOverlay.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const fit = getCoverFit(rect.width, rect.height, imgElement.naturalWidth, imgElement.naturalHeight);
        const relX = x - fit.offsetX;
        const relY = y - fit.offsetY;

        if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
            return false;
        }

        const imgX = Math.floor((relX / fit.drawW) * imgElement.naturalWidth);
        const imgY = Math.floor((relY / fit.drawH) * imgElement.naturalHeight);
        const pixel = maskCtx.getImageData(imgX, imgY, 1, 1).data;
        return pixel[3] > 20;
    };

    const ensureDoneSideOverlay = () => {
        if (!imageContainer) {
            return null;
        }
        if (!doneSideOverlay) {
            doneSideOverlay = document.createElement("div");
            doneSideOverlay.className = "done-side-overlay";

            const wside = document.createElement("img");
            wside.className = "done-side-layer done-side-layer-w";
            wside.src = DONE_WSIDE_SCENE_IMAGE;
            wside.alt = "";

            const rside = document.createElement("img");
            rside.className = "done-side-layer done-side-layer-r";
            rside.src = DONE_RSIDE_SCENE_IMAGE;
            rside.alt = "";
            rside.style.display = "none";

            const peeps2 = document.createElement("img");
            peeps2.className = "done-side-layer done-side-layer-top";
            peeps2.src = DONE_PEEPS2_SCENE_IMAGE;
            peeps2.alt = "";

            doneWsideElement = wside;
            doneRsideElement = rside;
            donePeeps2Element = peeps2;

            wside.addEventListener("load", () => {
                setupDoneSideMask(wside, doneWsideMaskCanvas, doneWsideMaskCtx);
            });
            rside.addEventListener("load", () => {
                setupDoneSideMask(rside, doneRsideMaskCanvas, doneRsideMaskCtx);
            });
            if (wside.complete) {
                setupDoneSideMask(wside, doneWsideMaskCanvas, doneWsideMaskCtx);
            }
            if (rside.complete) {
                setupDoneSideMask(rside, doneRsideMaskCanvas, doneRsideMaskCtx);
            }

            doneSideOverlay.appendChild(wside);
            doneSideOverlay.appendChild(rside);
            doneSideOverlay.appendChild(peeps2);

            doneSideOverlay.addEventListener("mousemove", (event) => {
                if (!doneSideOverlay.classList.contains("show") || !doneRsideUnlocked) {
                    if (doneWsideElement && doneRsideElement) {
                        doneWsideElement.style.display = "";
                        doneRsideElement.style.display = "none";
                    }
                    doneSideOverlay.style.cursor = "default";
                    return;
                }
                const onWside = isMouseOnDoneSide(event, doneWsideElement, doneWsideMaskCtx);
                const onRside = isMouseOnDoneSide(event, doneRsideElement, doneRsideMaskCtx);
                const onInteractivePixel = onWside || onRside;
                if (doneWsideElement && doneRsideElement) {
                    doneWsideElement.style.display = onInteractivePixel ? "none" : "";
                    doneRsideElement.style.display = onInteractivePixel ? "" : "none";
                }
                doneSideOverlay.style.cursor = onInteractivePixel ? "pointer" : "default";
            });

            doneSideOverlay.addEventListener("mouseleave", () => {
                if (doneWsideElement && doneRsideElement) {
                    doneWsideElement.style.display = "";
                    doneRsideElement.style.display = "none";
                }
                doneSideOverlay.style.cursor = "default";
            });

            doneSideOverlay.addEventListener("click", (event) => {
                if (!doneSideOverlay.classList.contains("show") || !doneRsideUnlocked || isTransitioning) {
                    return;
                }
                const clickedRside = isMouseOnDoneSide(event, doneRsideElement, doneRsideMaskCtx);
                if (!clickedRside) {
                    return;
                }
                doneRsideUnlocked = false;
                doneSideOverlay.style.cursor = "default";
                hideDoneSideOverlay();
                transitionToScene(
                    DONE_SLEEP_SCENE_IMAGE,
                    () => {
                        runSleepPostChoiceSequence();
                    },
                    {
                        fadeInMs: START_TRANSITION_FADE_IN_MS,
                        fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                    }
                );
            });

            imageContainer.appendChild(doneSideOverlay);
        } else if (!doneSideOverlay.isConnected) {
            imageContainer.appendChild(doneSideOverlay);
        }
        if (doneWsideElement && !doneWsideElement.src) {
            doneWsideElement.src = DONE_WSIDE_SCENE_IMAGE;
        }
        if (doneRsideElement && !doneRsideElement.src) {
            doneRsideElement.src = DONE_RSIDE_SCENE_IMAGE;
        }
        if (donePeeps2Element && !donePeeps2Element.src) {
            donePeeps2Element.src = DONE_PEEPS2_SCENE_IMAGE;
        }
        return doneSideOverlay;
    };

    const runSleepPostChoiceSequence = () => {
        const sleepNoteText = worknQuitChoice === "yes"
            ? "im sleeping in"
            : "i have to wake up at 6am sharp";

        showMyliegeAfterDelay(
            () => {
                window.setTimeout(() => {
                    if (isTransitioning) {
                        return;
                    }
                    startEndingSongFadeIn(5000, 0.18);
                    window.setTimeout(() => {
                        if (isTransitioning) {
                            return;
                        }
                        transitionToScene(
                            DONE_FINITE_SCENE_IMAGE,
                            () => {
                                showEndCreditsLinks();
                                clearDoneEndRestartPostItTimer();
                                doneEndRestartPostItTimerId = window.setTimeout(() => {
                                    if (isTransitioning) {
                                        return;
                                    }
                                    const currentScene = sceneBackground?.src.toLowerCase() ?? "";
                                    if (!currentScene.includes("done/theend.png")) {
                                        return;
                                    }
                                    purgeNextScenePostIt();
                                    showNextScenePostIt();
                                    const restartText = imageContainer?.querySelector(
                                        ".next-scene-post-it .post-it-text"
                                    );
                                    if (restartText) {
                                        restartText.textContent = "restart..?";
                                    }
                                    const restartPostIt = imageContainer?.querySelector(".next-scene-post-it");
                                    if (restartPostIt) {
                                        restartPostIt.addEventListener("mousedown", (event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            event.stopImmediatePropagation();
                                            if (isTransitioning) {
                                                return;
                                            }
                                            purgeNextScenePostIt();
                                            removeEndCreditsLinks();
                                            transitionToSceneFadeInOnly(
                                                OFFICE7_SCENE_IMAGE,
                                                OFFICE7_FADE_IN_MS,
                                                () => {
                                                    fadeOutEndingSong(2200);
                                                    window.setTimeout(() => {
                                                        window.location.reload();
                                                    }, 2250);
                                                }
                                            );
                                        }, { once: true, capture: true });
                                    }
                                    doneEndRestartPostItTimerId = null;
                                }, 6000);
                            },
                            {
                                fadeInMs: START_TRANSITION_FADE_IN_MS,
                                fadeOutMs: START_TRANSITION_FADE_OUT_MS,
                            }
                        );
                    }, 5000);
                }, 1000);
            },
            sleepNoteText,
            MYLIEGE_SECONDARY_DEFAULT_IMAGE,
            MYLIEGE_IMAGE,
            1000
        );
    };

    const hideDoneSideOverlay = () => {
        clearDoneSideOverlayTimer();
        doneRsideUnlocked = false;
        doneSideOverlay?.classList.remove("show");
        if (doneSideOverlay) {
            doneSideOverlay.style.cursor = "default";
        }
        if (doneRsideElement) {
            doneRsideElement.style.display = "none";
        }
        if (doneWsideElement) {
            doneWsideElement.style.display = "";
        }
        if (donePeeps2Element) {
            donePeeps2Element.style.display = "";
        }
    };

    const startDoneSidewalkSequence = () => {
        clearDoneSideOverlayTimer();
        const currentScene = sceneBackground?.src.toLowerCase() ?? "";
        const onDoneSidewalkScene = currentScene.includes("crossing.png")
            || currentScene.includes(DONE_SIDEWALK_SCENE_IMAGE.toLowerCase());
        if (!onDoneSidewalkScene) {
            doneSideOverlayTimerId = null;
            return;
        }

        const dreamCenterText = document.createElement("div");
        dreamCenterText.className = "intro-prompt show";
        dreamCenterText.style.color = "#000";
        dreamCenterText.style.top = "50%";
        dreamCenterText.style.left = "50%";
        dreamCenterText.style.transform = "translate(-50%, -50%)";
        dreamCenterText.style.textAlign = "center";
        const dreamCenterTextInner = document.createElement("span");
        dreamCenterTextInner.className = "intro-prompt-text";
        dreamCenterTextInner.textContent = "that was a weird dream";
        dreamCenterTextInner.style.whiteSpace = "nowrap";
        dreamCenterText.appendChild(dreamCenterTextInner);
        imageContainer?.appendChild(dreamCenterText);

        doneSideOverlayTimerId = window.setTimeout(() => {
            const latestScene = sceneBackground?.src.toLowerCase() ?? "";
            const stillOnDoneSidewalkScene = latestScene.includes("crossing.png")
                || latestScene.includes(DONE_SIDEWALK_SCENE_IMAGE.toLowerCase());
            if (!stillOnDoneSidewalkScene || isTransitioning) {
                dreamCenterText.remove();
                doneSideOverlayTimerId = null;
                return;
            }
            instantSwapScene(
                DONE_SLEEP_SCENE_IMAGE,
                () => {
                    dreamCenterText.remove();
                    runSleepPostChoiceSequence();
                }
            );
            doneSideOverlayTimerId = null;
        }, 4000);
    };

    const splitOfficeSevenIntoWakeUpPostIts = () => {
        if (!imageContainer || !officeSevenPostIt) {
            return;
        }

        officeSevenWakeUpPostIts.forEach((note) => {
            note.remove();
        });
        officeSevenWakeUpTargetBoxes.forEach((box) => {
            box.remove();
        });
        officeSevenWakeUpPostIts = [];
        officeSevenWakeUpTargets = [];
        officeSevenWakeUpTargetBoxes = [];
        officeSevenSolvedOverlay?.remove();
        officeSevenSolvedOverlay = null;
        officeSevenWakeUpLocked = false;

        const letters = ["w", "a", "k", "e", "u", "p"];
        const containerRect = imageContainer.getBoundingClientRect();
        const centerX = Math.round(containerRect.width / 2);
        const centerY = Math.round(containerRect.height / 2);
        const scrambledLetters = [...letters].sort(() => Math.random() - 0.5);
        const targetGap = 16;
        const targetWidth = 110;
        const targetHeight = 110;
        const phraseWidth = (targetWidth * letters.length) + (targetGap * (letters.length - 1)) + 36;
        const startX = Math.max(10, Math.min((containerRect.width - phraseWidth) / 2, containerRect.width - phraseWidth - 10));
        const targetY = Math.max(10, Math.min((containerRect.height - targetHeight) / 2, containerRect.height - targetHeight - 10));

        officeSevenWakeUpTargets = letters.map((letter, index) => {
            const extraGap = index >= 4 ? 36 : 0;
            const left = Math.round(startX + (index * (targetWidth + targetGap)) + extraGap);
            return {
                letter,
                left,
                top: Math.round(targetY),
                width: targetWidth,
                height: targetHeight
            };
        });

        officeSevenWakeUpTargets.forEach((target) => {
            const targetBox = document.createElement("div");
            targetBox.className = "wake-up-target-box show";
            targetBox.style.left = `${target.left}px`;
            targetBox.style.top = `${target.top}px`;
            targetBox.style.width = `${target.width}px`;
            targetBox.style.height = `${target.height}px`;
            imageContainer.appendChild(targetBox);
            officeSevenWakeUpTargetBoxes.push(targetBox);
        });

        const showWakeUpSolvedOverlay = () => {
            if (!imageContainer || officeSevenSolvedOverlay) {
                return;
            }

            officeSevenSolvedOverlay = document.createElement("div");
            officeSevenSolvedOverlay.className = "wake-up-solved-overlay show typing";

            const topPostIt = document.createElement("div");
            topPostIt.className = "wake-up-solved-note wake-up-solved-note-main";
            const topPostItText = document.createElement("span");
            topPostItText.className = "wake-up-solved-overlay-text";
            topPostItText.textContent = "are you sure?";
            applyTypewriterVars(topPostItText, topPostItText.textContent);
            topPostIt.appendChild(topPostItText);

            const choiceRow = document.createElement("div");
            choiceRow.className = "wake-up-solved-choice-row";
            let wakeUpSureChoicesReady = false;

            const noPostIt = document.createElement("div");
            noPostIt.className = "wake-up-solved-note wake-up-solved-note-choice";
            noPostIt.textContent = "no";
            noPostIt.style.pointerEvents = "none";
            noPostIt.addEventListener("mousedown", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (isTransitioning) {
                    return;
                }
                if (!wakeUpSureChoicesReady) {
                    return;
                }

                clearOfficeSequenceTimer();
                stopOfficeTickSound();
                hideMyliege();
                hideNextScenePostIt();
                removeOfficeSevenPostIt();

                transitionToScene(
                    OFFICE5_SCENE_IMAGE,
                    () => {
                        clearAllPostIts();
                        showGoodNightPostItCenterThenOffice7Fade();
                    },
                    { fadeInMs: START_TRANSITION_FADE_IN_MS, fadeOutMs: START_TRANSITION_FADE_OUT_MS }
                );
            });

            const yesPostIt = document.createElement("div");
            yesPostIt.className = "wake-up-solved-note wake-up-solved-note-choice";
            yesPostIt.textContent = "yes";
            yesPostIt.style.pointerEvents = "none";

            yesPostIt.addEventListener("mousedown", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (isTransitioning) {
                    return;
                }
                if (!wakeUpSureChoicesReady) {
                    return;
                }

                clearOfficeSequenceTimer();
                stopOfficeTickSound();
                hideMyliege();
                hideNextScenePostIt();
                removeOfficeSevenPostIt();

                transitionToScene(
                    FALLING_DOWN_SCENE_IMAGE,
                    () => {
                        clearAllPostIts();
                        nextSceneStep = 2;
                        const startedMyliege = showMyliegeAfterDelay(() => {
                            scheduleNextPostItAfterMyliege();
                        }, MYLIEGE_FALLING_DOWN_NOTE_TEXT);
                        if (!startedMyliege) {
                            showNextScenePostIt();
                        }
                    },
                    { fadeInMs: START_TRANSITION_FADE_IN_MS, fadeOutMs: START_TRANSITION_FADE_OUT_MS }
                );
            });

            choiceRow.appendChild(noPostIt);
            choiceRow.appendChild(yesPostIt);
            officeSevenSolvedOverlay.appendChild(topPostIt);
            officeSevenSolvedOverlay.appendChild(choiceRow);
            imageContainer.appendChild(officeSevenSolvedOverlay);
            startTypewriterSound();

            topPostItText.addEventListener("animationend", (event) => {
                if (event.animationName !== "type-note") {
                    return;
                }
                officeSevenSolvedOverlay?.classList.remove("typing");
                officeSevenSolvedOverlay?.classList.add("choices-visible");
                wakeUpSureChoicesReady = true;
                noPostIt.style.pointerEvents = "auto";
                yesPostIt.style.pointerEvents = "auto";
                stopTypewriterSound();
            }, { once: true });
        };

        const checkWakeUpSolved = () => {
            if (officeSevenWakeUpPostIts.length !== letters.length) {
                return false;
            }

            const solved = officeSevenWakeUpTargets.every((target, index) => {
                const placed = officeSevenWakeUpPostIts.find((note) => Number(note.dataset.targetIndex) === index);
                return placed?.dataset.letter === target.letter;
            });

            if (solved) {
                officeSevenWakeUpLocked = true;
                officeSevenWakeUpPostIts.forEach((note) => {
                    note.style.cursor = "default";
                    note.style.pointerEvents = "none";
                });
                window.setTimeout(() => {
                    showWakeUpSolvedOverlay();
                }, 500);
            }

            return solved;
        };

        const trySnapWakeUpNoteToTarget = (note) => {
            if (!imageContainer || !note) {
                return;
            }

            const noteCenterX = parseFloat(note.style.left || "0") + ((note.offsetWidth || 110) / 2);
            const noteCenterY = parseFloat(note.style.top || "0") + ((note.offsetHeight || 110) / 2);
            let bestIndex = -1;
            let bestDistance = Number.POSITIVE_INFINITY;

            officeSevenWakeUpTargets.forEach((target, index) => {
                const targetCenterX = target.left + (target.width / 2);
                const targetCenterY = target.top + (target.height / 2);
                const dx = noteCenterX - targetCenterX;
                const dy = noteCenterY - targetCenterY;
                const distance = Math.sqrt((dx * dx) + (dy * dy));
                if (distance < bestDistance) {
                    bestDistance = distance;
                    bestIndex = index;
                }
            });

            const SNAP_DISTANCE_PX = 95;
            if (bestIndex === -1 || bestDistance > SNAP_DISTANCE_PX) {
                note.dataset.targetIndex = "";
                return;
            }

            const occupiedByOther = officeSevenWakeUpPostIts.find((otherNote) => (
                otherNote !== note && Number(otherNote.dataset.targetIndex) === bestIndex
            ));
            if (occupiedByOther) {
                occupiedByOther.dataset.targetIndex = "";
            }

            const target = officeSevenWakeUpTargets[bestIndex];
            note.style.left = `${target.left}px`;
            note.style.top = `${target.top}px`;
            note.style.transform = "rotate(0deg)";
            note.dataset.targetIndex = String(bestIndex);
            checkWakeUpSolved();
        };

        const makeWakeUpNoteDraggable = (note) => {
            if (!imageContainer || !note) {
                return;
            }

            let isDragging = false;
            let offsetX = 0;
            let offsetY = 0;

            note.addEventListener("pointerdown", (event) => {
                if (officeSevenWakeUpLocked) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                isDragging = true;
                note.dataset.targetIndex = "";

                const noteRect = note.getBoundingClientRect();
                offsetX = event.clientX - noteRect.left;
                offsetY = event.clientY - noteRect.top;
                note.setPointerCapture(event.pointerId);
            });

            note.addEventListener("pointermove", (event) => {
                if (!isDragging) {
                    return;
                }

                const dragContainerRect = imageContainer.getBoundingClientRect();
                const noteWidth = note.offsetWidth || 110;
                const noteHeight = note.offsetHeight || 110;
                let left = event.clientX - dragContainerRect.left - offsetX;
                let top = event.clientY - dragContainerRect.top - offsetY;

                left = Math.max(10, Math.min(left, dragContainerRect.width - noteWidth - 10));
                top = Math.max(10, Math.min(top, dragContainerRect.height - noteHeight - 10));

                note.style.left = `${Math.round(left)}px`;
                note.style.top = `${Math.round(top)}px`;
                note.style.bottom = "auto";
                note.style.right = "auto";
            });

            const stopDragging = (event) => {
                if (!isDragging) {
                    return;
                }
                isDragging = false;
                if (note.hasPointerCapture(event.pointerId)) {
                    note.releasePointerCapture(event.pointerId);
                }
                trySnapWakeUpNoteToTarget(note);
            };

            note.addEventListener("pointerup", stopDragging);
            note.addEventListener("pointercancel", stopDragging);
        };

        officeSevenPostIt.remove();
        officeSevenPostIt = null;

        scrambledLetters.forEach((letter) => {
            const splitNote = document.createElement("div");
            splitNote.className = "post-it office-seven-post-it office-seven-post-it-split show";
            splitNote.dataset.letter = letter;
            splitNote.dataset.targetIndex = "";

            const splitText = document.createElement("span");
            splitText.className = "post-it-text post-it-text-bold";
            splitText.textContent = letter;
            splitNote.appendChild(splitText);

            imageContainer.appendChild(splitNote);

            const noteWidth = splitNote.offsetWidth || 180;
            const noteHeight = splitNote.offsetHeight || 180;
            const randomOffsetX = Math.round((Math.random() * 360) - 180);
            const randomOffsetY = Math.round((Math.random() * 260) - 130);
            const left = Math.round(centerX + randomOffsetX - (noteWidth / 2));
            const top = Math.round(centerY + randomOffsetY - (noteHeight / 2));
            const clampedLeft = Math.max(10, Math.min(left, containerRect.width - noteWidth - 10));
            const clampedTop = Math.max(10, Math.min(top, containerRect.height - noteHeight - 10));

            splitNote.style.left = `${clampedLeft}px`;
            splitNote.style.top = `${clampedTop}px`;
            splitNote.style.bottom = "auto";
            splitNote.style.right = "auto";
            splitNote.style.transform = `rotate(${Math.round((Math.random() * 18) - 9)}deg)`;

            makeWakeUpNoteDraggable(splitNote);
            officeSevenWakeUpPostIts.push(splitNote);
        });
    };

    const setOfficeSevenPostItToNext = () => {
        if (!officeSevenPostIt) {
            return;
        }

        officeSevenPostIt.classList.remove("typing");
        officeSevenPostIt.style.width = "";
        officeSevenPostIt.style.height = "";
        officeSevenPostIt.style.fontSize = "";
        officeSevenPostIt.style.transform = "rotate(0deg)";
        officeSevenPostIt.dataset.mode = "next";

        const textNode = officeSevenPostIt.querySelector(".post-it-text");
        if (textNode) {
            textNode.textContent = OFFICE7_NEXT_TEXT;
            applyTypewriterVars(textNode, OFFICE7_NEXT_TEXT);

            officeSevenPostIt.classList.remove("typing");
            void textNode.offsetWidth;
            officeSevenPostIt.classList.add("typing");
            startTypewriterSound();
            textNode.addEventListener("animationend", (event) => {
                if (event.animationName !== "type-note") {
                    return;
                }
                officeSevenPostIt?.classList.remove("typing");
                stopTypewriterSound();
            }, { once: true });
        }

        moveOfficeSevenPostItToAfterOffice7Area();
    };

    const clearEntireScreen = () => {
        clearOfficeSequenceTimer();
        stopOfficeTickSound();
        stopTypewriterSound();
        clearAllPostIts();
        hideForestBlueShoesOverlay();
        removeOfficeSevenPostIt();
        hideMyliege();
        purgeNextScenePostIt();

        if (shoeWrapper) {
            shoeWrapper.style.display = "none";
            shoeWrapper.classList.remove("is-red");
        }

        if (sceneBackground) {
            sceneBackground.style.opacity = "0";
        }

        if (sceneFade) {
            sceneFade.classList.remove("fade-in");
            sceneFade.classList.remove("fade-out");
            sceneFade.style.opacity = "0";
        }
    };

    const showOfficeSevenPostIt = () => {
        if (!imageContainer || officeSevenPostIt) {
            return;
        }

        officeSevenPostIt = createPostItDiv({
            className: "post-it office-seven-post-it show typing",
            mode: "office7",
        });
        officeSevenPostIt.dataset.readyAt = String(Date.now() + 250);

        const officeSevenText = createPostItText({
            text: OFFICE7_NOTE_TEXT,
            className: "post-it-text post-it-text-bold",
        });
        applyTypewriterVars(officeSevenText, OFFICE7_NOTE_TEXT);

        officeSevenPostIt.appendChild(officeSevenText);
        imageContainer.appendChild(officeSevenPostIt);
        moveOfficeSevenPostItToCenter();
        startTypewriterSound();

        officeSevenPostIt.addEventListener("click", (event) => {
            event.stopPropagation();
            if (!event.isTrusted) {
                return;
            }
            const readyAt = Number(officeSevenPostIt?.dataset.readyAt || "0");
            if (Date.now() < readyAt) {
                return;
            }
            if (officeSevenPostIt?.dataset.mode === "next") {
                splitOfficeSevenIntoWakeUpPostIts();
                return;
            }
            setOfficeSevenPostItToNext();
        });

        officeSevenText.addEventListener("animationend", (event) => {
            if (event.animationName !== "type-note") {
                return;
            }
            officeSevenPostIt?.classList.remove("typing");
            stopTypewriterSound();
        }, { once: true });
    };

    const {
        transitionToSceneFadeInOnly,
        transitionToScene,
        instantSwapScene,
    } = createSceneTransitions({
        imageContainer,
        sceneBackground,
        sceneFade,
        hideMyliege,
        hideForestBlueShoesOverlay,
        clearMushroomSequenceTimer,
        setIsTransitioning: (nextValue) => {
            isTransitioning = nextValue;
        },
        sceneFadeInMs: SCENE_FADE_IN_MS,
        sceneFadeOutMs: SCENE_FADE_OUT_MS,
    });

    const showGirlTwinWHandsOverlay = () => {
        if (!imageContainer || girlTwinWHandsWrap || isTransitioning) {
            return;
        }

        const HAND_MASK_ALPHA_THRESHOLD = 20;

        const getContainFitBox = (boxW, boxH, imgW, imgH) => {
            const boxRatio = boxW / boxH;
            const imgRatio = imgW / imgH;
            let drawW;
            let drawH;

            if (imgRatio > boxRatio) {
                drawW = boxW;
                drawH = boxW / imgRatio;
            } else {
                drawH = boxH;
                drawW = boxH * imgRatio;
            }

            return {
                drawW,
                drawH,
                offsetX: (boxW - drawW) / 2,
                offsetY: (boxH - drawH) / 2,
            };
        };

        const isMouseOnHandMask = (event, overlayEl, sourceImgEl, maskCtx) => {
            if (!maskCtx || !sourceImgEl.naturalWidth || !sourceImgEl.naturalHeight) {
                return false;
            }

            const { canvas } = maskCtx;
            if (!canvas.width || !canvas.height) {
                return false;
            }

            const rect = overlayEl.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const fit = getContainFitBox(rect.width, rect.height, sourceImgEl.naturalWidth, sourceImgEl.naturalHeight);
            const relX = x - fit.offsetX;
            const relY = y - fit.offsetY;

            if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
                return false;
            }

            const imgX = Math.floor((relX / fit.drawW) * sourceImgEl.naturalWidth);
            const imgY = Math.floor((relY / fit.drawH) * sourceImgEl.naturalHeight);
            const sx = Math.min(Math.max(imgX, 0), canvas.width - 1);
            const sy = Math.min(Math.max(imgY, 0), canvas.height - 1);
            const pixel = maskCtx.getImageData(sx, sy, 1, 1).data;
            return pixel[3] > HAND_MASK_ALPHA_THRESHOLD;
        };

        const showGirlTwinSavedOverlay = () => {
            if (!imageContainer || girlTwinSavedOverlay) {
                return;
            }
            const savedOverlay = document.createElement("img");
            savedOverlay.className = "girl-twin-saved-overlay";
            savedOverlay.src = GIRL_HAND_SAVED_OVERLAY_IMAGE;
            savedOverlay.alt = "";
            imageContainer.appendChild(savedOverlay);
            girlTwinSavedOverlay = savedOverlay;
        };

        const scheduleGirlTwinSavedLiege = () => {
            clearGirlTwinSavedLiegeTimer();
            clearGirlTwinSavedNextPostItTimer();
            girlTwinSavedLiegeTimerId = window.setTimeout(() => {
                girlTwinSavedLiegeTimerId = null;
                if (isTransitioning) {
                    return;
                }
                showMyliegeAfterDelay(
                    () => {
                        if (isTransitioning || girlTwinSavedNextPostItTimerId) {
                            return;
                        }
                        girlTwinSavedNextPostItTimerId = window.setTimeout(() => {
                            girlTwinSavedNextPostItTimerId = null;
                            if (isTransitioning) {
                                return;
                            }
                            savedNextAwaiting = true;
                            showNextScenePostIt();
                        }, GIRL_HAND_SAVED_NEXT_POST_IT_DELAY_MS);
                    },
                    GIRL_HAND_SAVED_LIEGE_TEXT,
                    MYLIEGE_SECONDARY_DEFAULT_IMAGE,
                    MYLIEGE_IMAGE,
                    0,
                );
            }, GIRL_HAND_SAVED_LIEGE_DELAY_MS);
        };

        const createHandPair = (pairSuffix, baseSrc, reactSrc) => {
            const pairEl = document.createElement("div");
            pairEl.className = `girl-twin-hand-pair girl-twin-hand-pair-${pairSuffix}`;

            const shoeBaseImg = document.createElement("img");
            shoeBaseImg.className = "girl-twin-hand-shoe girl-twin-hand-shoe-base";
            shoeBaseImg.src = baseSrc;
            shoeBaseImg.alt = "";

            const shoeReactImg = document.createElement("img");
            shoeReactImg.className = "girl-twin-hand-shoe girl-twin-hand-shoe-react";
            shoeReactImg.src = reactSrc;
            shoeReactImg.alt = "";

            pairEl.appendChild(shoeBaseImg);
            pairEl.appendChild(shoeReactImg);

            const maskCanvas = document.createElement("canvas");
            const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });

            const setupMaskFromBase = () => {
                if (!maskCtx || !shoeBaseImg.naturalWidth || !shoeBaseImg.naturalHeight) {
                    return;
                }
                maskCanvas.width = shoeBaseImg.naturalWidth;
                maskCanvas.height = shoeBaseImg.naturalHeight;
                maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
                maskCtx.drawImage(shoeBaseImg, 0, 0);
            };

            if (shoeBaseImg.complete && shoeBaseImg.naturalWidth) {
                setupMaskFromBase();
            } else {
                shoeBaseImg.addEventListener(
                    "load",
                    () => {
                        setupMaskFromBase();
                    },
                    { once: true },
                );
            }

            return { pairEl, shoeBaseImg, maskCtx };
        };

        const wrap = document.createElement("div");
        wrap.className = "girl-twin-w-hands-wrap";

        const overlay = document.createElement("div");
        overlay.className = "girl-twin-hand-hit-overlay";

        const pairDown = createHandPair("wdown", GIRL_HAND_WDOWN_IMAGE, GIRL_HAND_RDOWN_IMAGE);
        const pairUp = createHandPair("wup", GIRL_HAND_WUP_IMAGE, GIRL_HAND_RUP_IMAGE);

        overlay.appendChild(pairDown.pairEl);
        overlay.appendChild(pairUp.pairEl);

        overlay.addEventListener("mousemove", (event) => {
            const overDown = isMouseOnHandMask(event, overlay, pairDown.shoeBaseImg, pairDown.maskCtx);
            const overUp = isMouseOnHandMask(event, overlay, pairUp.shoeBaseImg, pairUp.maskCtx);
            pairDown.pairEl.classList.toggle("is-red", overDown);
            pairUp.pairEl.classList.toggle("is-red", overUp);
            overlay.style.cursor = overDown || overUp ? "pointer" : "default";
        });
        overlay.addEventListener("mouseleave", () => {
            pairDown.pairEl.classList.remove("is-red");
            pairUp.pairEl.classList.remove("is-red");
            overlay.style.cursor = "default";
        });

        let handChoiceLocked = false;

        const scheduleFgunSequenceStep = (stepIndex) => {
            if (stepIndex >= FGUN_SEQUENCE_IMAGES.length) {
                return;
            }

            const delayMs = stepIndex === 0 ? 0 : OFFICE_SEQUENCE_DELAY_MS;
            clearFgunSequenceTimer();
            fgunSequenceTimerId = window.setTimeout(() => {
                fgunSequenceTimerId = null;
                isTransitioning = true;
                instantSwapScene(FGUN_SEQUENCE_IMAGES[stepIndex], () => {
                    if (stepIndex === FGUN_SEQUENCE_IMAGES.length - 1) {
                        startFgunmanOutcomeSequence();
                    }
                    scheduleFgunSequenceStep(stepIndex + 1);
                });
            }, delayMs);
        };

        overlay.addEventListener("click", (event) => {
            event.stopPropagation();
            if (!event.isTrusted || isTransitioning || handChoiceLocked) {
                return;
            }
            if (
                pairUp.pairEl.classList.contains("is-red")
                && isMouseOnHandMask(event, overlay, pairUp.shoeBaseImg, pairUp.maskCtx)
            ) {
                handChoiceLocked = true;
                removeGirlTwinWHandsOverlay();
                showGirlTwinSavedOverlay();
                scheduleGirlTwinSavedLiege();
                return;
            }
            if (!pairDown.pairEl.classList.contains("is-red")) {
                return;
            }
            if (!isMouseOnHandMask(event, overlay, pairDown.shoeBaseImg, pairDown.maskCtx)) {
                return;
            }
            handChoiceLocked = true;
            clearFgunSequenceTimer();
            scheduleFgunSequenceStep(0);
        });

        wrap.appendChild(overlay);
        imageContainer.appendChild(wrap);
        girlTwinWHandsWrap = wrap;
    };

    const startGirlTwinLiegeSequence = () => {
        if (girlTwinLiegeScheduled) {
            return;
        }
        const started = showMyliegeAfterDelay(
            () => {
                if (isTransitioning) {
                    return;
                }
                if (girlTwinLiegeTwinOnlyTimerId) {
                    return;
                }
                girlTwinLiegeTwinOnlyTimerId = window.setTimeout(() => {
                    girlTwinLiegeTwinOnlyTimerId = null;
                    if (isTransitioning || !myliegeSidePostIt?.isConnected) {
                        return;
                    }
                    myliegeSidePostIt.classList.remove("typing");
                    stopTypewriterSound();
                    myliegeSidePostIt.classList.remove("show");
                    requestAnimationFrame(() => {
                        if (isTransitioning || !myliegeSidePostIt?.isConnected) {
                            return;
                        }
                        myliegeSidePostIt.classList.add("show");
                        animateLiegeSidePostItTypewriter(
                            GIRL_TWIN_LIEGE_NOTE_SECOND_TEXT,
                            () => {
                                if (isTransitioning) {
                                    return;
                                }
                                if (girlTwinLiegeStripDelayTimerId) {
                                    return;
                                }
                                girlTwinLiegeStripDelayTimerId = window.setTimeout(() => {
                                    girlTwinLiegeStripDelayTimerId = null;
                                    if (isTransitioning) {
                                        return;
                                    }
                                    stripGirlTwinBeatToTwinsOnly();
                                    clearGirlTwinWHandsAppearTimer();
                                    girlTwinWHandsAppearTimerId = window.setTimeout(() => {
                                        girlTwinWHandsAppearTimerId = null;
                                        if (isTransitioning) {
                                            return;
                                        }
                                        showGirlTwinWHandsOverlay();
                                    }, GIRL_TWIN_WHANDS_AFTER_STRIP_MS);
                                }, GIRL_TWIN_BEFORE_CLEAR_AFTER_SECOND_NOTE_MS);
                            },
                        );
                        requestAnimationFrame(() => {
                            positionMyliegeSidePostIt();
                        });
                    });
                }, GIRL_TWIN_AFTER_FIRST_LIEGE_TEXT_MS);
            },
            GIRL_TWIN_LIEGE_NOTE_TEXT,
            MYLIEGE_SECONDARY_DEFAULT_IMAGE,
            MYLIEGE_IMAGE,
            0,
        );
        if (started) {
            girlTwinLiegeScheduled = true;
        }
    };

    const showGirlTwinFlickerAfterRedgTransition = () => {
        if (!imageContainer) {
            return;
        }
        hideGirlTwinOverlay();
        girlTwinImg1 = document.createElement("img");
        girlTwinImg2 = document.createElement("img");
        girlTwinImg1.className = "girl-twin-frame";
        girlTwinImg2.className = "girl-twin-frame";
        girlTwinImg1.src = REDG_GIRL_SEQUENCE_G1_IMAGE;
        girlTwinImg2.src = REDG_GIRL_SEQUENCE_G2_IMAGE;
        girlTwinImg1.alt = "";
        girlTwinImg2.alt = "";
        imageContainer.appendChild(girlTwinImg1);
        imageContainer.appendChild(girlTwinImg2);
        imageContainer.classList.add("girl-twin-beat");

        const startSwapLoop = () => {
            let showFirst = true;
            const swap = () => {
                showFirst = !showFirst;
                girlTwinImg1?.classList.toggle("show", showFirst);
                girlTwinImg2?.classList.toggle("show", !showFirst);
            };
            clearGirlTwinSwapInterval();
            swap();
            girlTwinSwapIntervalId = window.setInterval(swap, MYLIEGE_FRAME_SWAP_MS);
            startGirlTwinLiegeSequence();
        };

        let pendingReady = 2;
        const onFrameMaybeReady = () => {
            pendingReady -= 1;
            if (pendingReady !== 0) {
                return;
            }
            startSwapLoop();
        };

        [girlTwinImg1, girlTwinImg2].forEach((img) => {
            if (img.complete && img.naturalWidth > 0) {
                onFrameMaybeReady();
            } else {
                img.addEventListener("load", onFrameMaybeReady, { once: true });
                img.addEventListener("error", onFrameMaybeReady, { once: true });
            }
        });
    };

    const { startOfficeSequence } = officeSequenceState.bindTransitions({
        officeSequenceImages: OFFICE_SEQUENCE_IMAGES,
        officeFirstDelayMs: OFFICE_FIRST_DELAY_MS,
        officeSequenceDelayMs: OFFICE_SEQUENCE_DELAY_MS,
        office7PostItDelayMs: OFFICE7_POST_IT_DELAY_MS,
        getIsTransitioning: () => isTransitioning,
        setIsTransitioning: (next) => {
            isTransitioning = next;
        },
        instantSwapScene,
        stopOfficeTickSound,
        scheduleOfficeSevenPostItAfterDelay: (delayMs) => {
            clearOfficeSevenPostItTimer();
            officeSevenPostItTimerId = window.setTimeout(() => {
                showOfficeSevenPostIt();
                officeSevenPostItTimerId = null;
            }, delayMs);
        },
        hideMyliege,
        removeOfficeSevenPostIt,
        startOfficeTickSound,
    });

    const exitForestBlueShoesChoiceToNewScene = () => {
        hideMyliege();
        hideForestBlueShoesOverlay();
        treeSceneModule.hideAmWindowOverlay();
        clearOfficeSequenceTimer();
        stopOfficeTickSound();
        removeOfficeSevenPostIt();
        clearMushroomSequenceTimer();
    };

    const startMushroomIntroPostIt = () => {
        clearMushroomNoteSwapTimer();
        clearMushroomHungryDelayTimer();
        clearMushroomBiteDelayTimer();
        clearMushroomRealShroomDelayTimer();
        removeMushroomBiteOverlay();
        clearMyliegeTimer();
        mushroomRealShroomElement?.classList.remove("show");
        ensureMyliegeSprite();
        setMyliegeAnimationFrames(MYLIEGE_SECONDARY_DEFAULT_IMAGE);
        if (!myliegeSprite || !myliegeSprite2 || !myliegeSidePostIt) {
            return;
        }

        const ensureMushroomRealShroom = () => {
            if (!imageContainer) {
                return;
            }
            if (!mushroomRealShroomElement) {
                mushroomRealShroomElement = document.createElement("img");
                mushroomRealShroomElement.className = "mushroom-realshroom";
                mushroomRealShroomElement.src = MUSHROOM_REALSHROOM_IMAGE;
                mushroomRealShroomElement.alt = "";
                mushroomRealShroomElement.style.cursor = "default";
                mushroomRealShroomElement.addEventListener("mousemove", (event) => {
                    updateMushroomCursor(event);
                });
                mushroomRealShroomElement.addEventListener("mouseleave", () => {
                    updateMushroomCursor();
                });
                imageContainer.appendChild(mushroomRealShroomElement);
            }
        };

        const buildMushroomRefusalParagraphNodes = (sourceText) => {
            const fragment = document.createDocumentFragment();
            const re = /bite/gi;
            let lastIndex = 0;
            let match = re.exec(sourceText);
            while (match !== null) {
                if (match.index > lastIndex) {
                    fragment.appendChild(
                        document.createTextNode(sourceText.slice(lastIndex, match.index))
                    );
                }
                const biteSpan = document.createElement("span");
                biteSpan.className = "mushroom-refusal-bite-word";
                biteSpan.textContent = match[0];
                fragment.appendChild(biteSpan);
                lastIndex = match.index + match[0].length;
                match = re.exec(sourceText);
            }
            if (lastIndex < sourceText.length) {
                fragment.appendChild(document.createTextNode(sourceText.slice(lastIndex)));
            }
            return fragment;
        };

        const showMushroomNoRefusalChallenge = () => {
            if (!mushroomBiteOverlay) {
                return;
            }
            stopTypewriterSound();
            mushroomBiteOverlay.classList.remove("typing", "choices-visible");
            mushroomBiteOverlay.replaceChildren();

            const stack = document.createElement("div");
            stack.className = "mushroom-refusal-stack";

            const singlePostIt = document.createElement("div");
            singlePostIt.className = "mushroom-refusal-note mushroom-refusal-single-post-it";

            const lead = document.createElement("p");
            lead.className = "mushroom-refusal-instruction-lead";
            lead.textContent = MUSHROOM_REFUSAL_INSTRUCTION_TEXT;

            const paragraphEl = document.createElement("p");
            paragraphEl.className = "mushroom-refusal-paragraph";
            paragraphEl.appendChild(buildMushroomRefusalParagraphNodes(MUSHROOM_REFUSAL_PARAGRAPH));

            singlePostIt.appendChild(lead);
            singlePostIt.appendChild(paragraphEl);
            stack.appendChild(singlePostIt);
            mushroomBiteOverlay.appendChild(stack);

            const biteWords = singlePostIt.querySelectorAll(".mushroom-refusal-bite-word");
            const total = biteWords.length;
            let crossedCount = 0;
            biteWords.forEach((el) => {
                el.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (isTransitioning || el.classList.contains("is-crossed-out")) {
                        return;
                    }
                    el.classList.add("is-crossed-out");
                    crossedCount += 1;
                    if (crossedCount >= total) {
                        window.setTimeout(() => {
                            if (isTransitioning) {
                                return;
                            }
                            transitionToScene(
                                MUSHROOM_DEATH_SCENE_IMAGE,
                                () => {
                                    window.setTimeout(() => {
                                        showMyliegeAfterDelay(
                                            () => {
                                                window.setTimeout(() => {
                                                    showGoodNightPostItCenterThenOffice7Fade();
                                                }, MYLIEGE_MUSHROOM_DEATH_CLEAR_AFTER_NOTE_MS);
                                            },
                                            MYLIEGE_MUSHROOM_DEATH_NOTE_TEXT,
                                            MYLIEGE_IMAGE_3
                                        );
                                    }, MYLIEGE_MUSHROOM_DEATH_LIEGE_DELAY_MS);
                                },
                                {
                                    fadeInMs: MUSHROOM_REFUSAL_TO_DEATH_CROSSFADE_MS,
                                    fadeOutMs: MUSHROOM_REFUSAL_TO_DEATH_CROSSFADE_MS,
                                    useWhiteOverlay: false,
                                    crossfadeEase: "ease-in-out",
                                }
                            );
                        }, 450);
                    }
                });
            });
        };

        const showMushroomBiteOverlay = () => {
            if (!imageContainer || mushroomBiteOverlay) {
                return;
            }
            if (isTransitioning || !mushroomRealShroomElement?.classList.contains("show")) {
                return;
            }

            clearMyliegeAnimationInterval();
            myliegeSprite?.classList.remove("show");
            myliegeSprite2?.classList.remove("show");

            myliegeSidePostIt?.classList.remove("show");
            myliegeSidePostIt?.classList.remove("typing");
            if (myliegeSidePostIt) {
                myliegeSidePostIt.dataset.mode = "";
            }
            stopTypewriterSound();

            mushroomBiteOverlay = document.createElement("div");
            mushroomBiteOverlay.className = "wake-up-solved-overlay show typing";

            const topPostIt = document.createElement("div");
            topPostIt.className = "wake-up-solved-note wake-up-solved-note-main";
            const topPostItText = document.createElement("span");
            topPostItText.className = "wake-up-solved-overlay-text";
            topPostItText.textContent = MUSHROOM_BITE_QUESTION_TEXT;
            applyTypewriterVars(topPostItText, topPostItText.textContent);
            topPostIt.appendChild(topPostItText);

            const choiceRow = document.createElement("div");
            choiceRow.className = "wake-up-solved-choice-row";
            let biteChoicesReady = false;

            const noPostIt = document.createElement("div");
            noPostIt.className = "wake-up-solved-note wake-up-solved-note-choice";
            noPostIt.textContent = "no";
            noPostIt.style.pointerEvents = "none";
            noPostIt.addEventListener("mousedown", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (isTransitioning) {
                    return;
                }
                if (!biteChoicesReady) {
                    return;
                }
                showMushroomNoRefusalChallenge();
            });

            const yesPostIt = document.createElement("div");
            yesPostIt.className = "wake-up-solved-note wake-up-solved-note-choice";
            yesPostIt.textContent = "yes";
            yesPostIt.style.pointerEvents = "none";
            yesPostIt.addEventListener("mousedown", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (isTransitioning) {
                    return;
                }
                if (!biteChoicesReady) {
                    return;
                }
                removeMushroomBiteOverlay();
                clearAllPostIts();
                hideMyliege();
                ensureMushroomRealShroom();
                if (!mushroomRealShroomElement) {
                    return;
                }

                mushroomRealShroomElement.src = MUSHROOM_REALSHROOM_IMAGE;
                mushroomRealShroomElement.classList.add("show");
                mushroomBiteUnlocked = true;
                mushroomRealShroomElement.classList.add("is-bite-target");
                mushroomRealShroomElement.style.cursor = "default";
                mushroomRealShroomBiteClicks = 0;
                mushroomRealShroomBiteAbort?.abort();
                mushroomRealShroomBiteAbort = new AbortController();
                mushroomRealShroomElement.addEventListener(
                    "mousedown",
                    onMushroomRealshroomBiteAdvance,
                    { signal: mushroomRealShroomBiteAbort.signal }
                );
                stopTypewriterSound();
            });

            choiceRow.appendChild(noPostIt);
            choiceRow.appendChild(yesPostIt);
            mushroomBiteOverlay.appendChild(topPostIt);
            mushroomBiteOverlay.appendChild(choiceRow);
            imageContainer.appendChild(mushroomBiteOverlay);
            startTypewriterSound();

            topPostItText.addEventListener("animationend", (event) => {
                if (event.animationName !== "type-note") {
                    return;
                }
                mushroomBiteOverlay?.classList.remove("typing");
                mushroomBiteOverlay?.classList.add("choices-visible");
                biteChoicesReady = true;
                noPostIt.style.pointerEvents = "auto";
                yesPostIt.style.pointerEvents = "auto";
                stopTypewriterSound();
            }, { once: true });
        };

        const showMushroomRealShroomThenHungryThenBite = () => {
            if (!myliegeSidePostIt?.classList.contains("show")) {
                return;
            }
            primeMushroomPixelMasks();
            ensureMushroomRealShroom();
            const realShroomImg = mushroomRealShroomElement;
            if (!realShroomImg) {
                return;
            }

            clearMushroomBiteDelayTimer();
            realShroomImg.classList.add("show");
            mushroomBiteUnlocked = false;
            realShroomImg.classList.remove("is-bite-target");
            positionMyliegeSidePostIt();

            const afterRealShroomVisible = () => {
                positionMyliegeSidePostIt();
                animateMushroomNoteText(MUSHROOM_HUNGRY_NOTE_TEXT, () => {
                    clearMushroomBiteDelayTimer();
                    mushroomBiteDelayTimerId = window.setTimeout(() => {
                        mushroomBiteDelayTimerId = null;
                        showMushroomBiteOverlay();
                    }, MUSHROOM_BITE_OVERLAY_DELAY_MS);
                });
            };

            if (realShroomImg.complete && realShroomImg.naturalWidth > 0) {
                requestAnimationFrame(afterRealShroomVisible);
                return;
            }

            realShroomImg.addEventListener("load", afterRealShroomVisible, { once: true });
            realShroomImg.addEventListener("error", afterRealShroomVisible, { once: true });
        };

        const animateMushroomNoteText = animateLiegeSidePostItTypewriter;

        myliegeSprite2.classList.remove("show");
        myliegeSprite.classList.remove("show");
        myliegeSidePostIt.classList.remove("show");
        myliegeSidePostIt.classList.remove("typing");

        myliegeTimerId = window.setTimeout(() => {
            myliegeSprite?.classList.add("show");
            myliegeSprite2?.classList.remove("show");
            myliegeSidePostIt?.classList.add("show");
            animateMushroomNoteText(MUSHROOM_NOTE_TEXT_1);
            positionMyliegeSidePostIt();

            let showFirstFrame = true;
            const swapMyliegeFrame = () => {
                showFirstFrame = !showFirstFrame;
                myliegeSprite?.classList.toggle("show", showFirstFrame);
                myliegeSprite2?.classList.toggle("show", !showFirstFrame);
            };
            clearMyliegeAnimationInterval();
            myliegeAnimationIntervalId = window.setInterval(swapMyliegeFrame, MYLIEGE_FRAME_SWAP_MS);

            mushroomNoteSwapTimerId = window.setTimeout(() => {
                if (!myliegeSidePostIt?.classList.contains("show")) {
                    return;
                }
                animateMushroomNoteText(MUSHROOM_NOTE_TEXT_2, () => {
                    clearMushroomHungryDelayTimer();
                    clearMushroomRealShroomDelayTimer();
                    mushroomRealShroomDelayTimerId = window.setTimeout(() => {
                        mushroomRealShroomDelayTimerId = null;
                        showMushroomRealShroomThenHungryThenBite();
                    }, MUSHROOM_REALSHROOM_DELAY_MS);
                });
                mushroomNoteSwapTimerId = null;
            }, MUSHROOM_NOTE_TEXT_SWAP_DELAY_MS);
            myliegeTimerId = null;
        }, MUSHROOM_LIEGE_APPEAR_DELAY_MS);
    };

    const { startMushroomSequence } = mushroomSequenceState.bindTransitions({
        mushroomSequenceImages: MUSHROOM_SEQUENCE_IMAGES,
        mushroomSceneSwapDelayMs: OFFICE_SEQUENCE_DELAY_MS,
        startTransitionFadeInMs: START_TRANSITION_FADE_IN_MS,
        getIsTransitioning: () => isTransitioning,
        setIsTransitioning: (next) => {
            isTransitioning = next;
        },
        instantSwapScene,
        transitionToSceneFadeInOnly,
        exitForestBlueShoesChoiceToNewScene,
        startMushroomIntroPostIt,
    });

    const startDiscombFromForestBlueLeftShoe = () => {
        if (isTransitioning) {
            return;
        }

        exitForestBlueShoesChoiceToNewScene();
        transitionToSceneFadeInOnly(DISCOMB_SCENE_IMAGE, DISCOMB_FADE_IN_MS, () => {
            window.setTimeout(() => {
                if (isTransitioning) {
                    return;
                }
                showMyliegeAfterDelay(
                    () => {
                        clearDiscombOutcomeToGoodNightTimer();
                        discombOutcomeToGoodNightTimerId = window.setTimeout(() => {
                            if (isTransitioning) {
                                return;
                            }
                            removeDiscombOutcomePostIt();
                            discombNextAwaiting = true;
                            showNextScenePostIt();
                            discombOutcomeToGoodNightTimerId = null;
                        }, DISCOMB_OUTCOME_NOTE_DELAY_MS);
                    },
                    DISCOMB_LIEGE_SIDE_NOTE_TEXT,
                    MYLIEGE_IMAGE_3,
                    MYLIEGE_IMAGE_2,
                    0
                );
            }, DISCOMB_LIEGE_DELAY_MS);
        });
    };

    const clearAllPostIts = () => {
        if (!imageContainer) {
            return;
        }
        clearFgunmanOutcomeNoteTimer();
        clearFgunmanOutcomeToFdeathTimer();
        clearFdeathOutcomeNoteTimer();
        clearFdeathOutcomeRestartTimer();
        removeFdeathOutcomePostIt();
        clearWorkingNextPostItTimer();
        clearRedgLiegeNextTimer();
        redgNextAwaiting = false;
        hideGirlTwinOverlay();
        removePartnerChar2Overlay();
        removeFightAfterRedOverlay();
        hideDoneSideOverlay();
        clearDoneEndRestartPostItTimer();
        stopEndingSong();
        treeSceneModule.cleanup();

        const allNotes = imageContainer.querySelectorAll(".post-it");
        allNotes.forEach((note) => {
            if (note.id === "post-it-note") {
                note.classList.remove("show");
                note.classList.remove("typing");
                note.dataset.mode = "";
                stopTypewriterSound();
                return;
            }

            note.remove();
        });
        resetNextScenePostItRefOnly();
    };

    const returnToOpeningScene = () => {
        clearOfficeSequenceTimer();
        stopOfficeTickSound();
        removeOfficeSevenPostIt();
        hideMyliege();
        clearAllPostIts();
        nextSceneStep = 0;
        worknQuitChoice = "";
        if (shoeWrapper) {
            shoeWrapper.style.display = "";
        }
        resetOpenSceneInteractionState?.();
        restoreOpenSceneIntroPrompt?.();
        transitionToSceneFadeInOnly(
            OPEN_SCENE_IMAGE,
            OFFICE7_FADE_IN_MS,
            () => {
                if (shoeWrapper) {
                    shoeWrapper.style.display = "";
                }
                restoreOpenSceneIntroPrompt?.();
            }
        );
    };

    ({
        showRestartPostIt,
        showGoodNightPostItCenterThenOffice7Fade,
    } = createRestartFlowModule({
        imageContainer,
        shoeWrapper,
        getOfficeSevenPostIt: () => officeSevenPostIt,
        setOfficeSevenPostIt: (value) => {
            officeSevenPostIt = value;
        },
        moveOfficeSevenPostItToCenter,
        applyTypewriterVars,
        startGoodNightHumSound,
        stopGoodNightHumSound,
        startTypewriterSound,
        stopTypewriterSound,
        getIsTransitioning: () => isTransitioning,
        clearOfficeSequenceTimer,
        stopOfficeTickSound,
        hideMyliege,
        removeOfficeSevenPostIt,
        clearAllPostIts,
        setNextSceneStep: (value) => {
            nextSceneStep = value;
        },
        resetOpenSceneInteractionState,
        transitionToScene,
        openSceneImage: OPEN_SCENE_IMAGE,
        restoreOpenSceneIntroPrompt,
        startTransitionFadeInMs: START_TRANSITION_FADE_IN_MS,
        startTransitionFadeOutMs: START_TRANSITION_FADE_OUT_MS,
        transitionToSceneFadeInOnly,
        office7SceneImage: OFFICE7_SCENE_IMAGE,
        office7FadeInMs: OFFICE7_FADE_IN_MS,
        setRestartPostItTimerId: (value) => {
            restartPostItTimerId = value;
        },
        restartPostItDelayMs: RESTART_POST_IT_DELAY_MS,
        goodNightToOffice7DelayMs: GOOD_NIGHT_TO_OFFICE7_DELAY_MS,
        office5GoodNightText: OFFICE5_GOOD_NIGHT_TEXT,
        restartText: RESTART_TEXT,
    }));

    ({
        showNextScenePostIt,
        hideNextScenePostIt,
        purgeNextScenePostIt,
        resetNextScenePostItRefOnly,
    } = createNextSceneRouter({
        imageContainer,
        getIsTransitioning: () => isTransitioning,
        getMushroomBiteNextAwaiting: () => mushroomBiteNextAwaiting,
        setMushroomBiteNextAwaiting: (v) => {
            mushroomBiteNextAwaiting = v;
        },
        getRedgNextAwaiting: () => redgNextAwaiting,
        setRedgNextAwaiting: (v) => {
            redgNextAwaiting = v;
        },
        getSavedNextAwaiting: () => savedNextAwaiting,
        setSavedNextAwaiting: (v) => {
            savedNextAwaiting = v;
        },
        getShroomhNextAwaiting: () => shroomhNextAwaiting,
        setShroomhNextAwaiting: (v) => {
            shroomhNextAwaiting = v;
        },
        getDiscombNextAwaiting: () => discombNextAwaiting,
        setDiscombNextAwaiting: (v) => {
            discombNextAwaiting = v;
        },
        getSaviourEmptyhSceneImage: () => SAVIOUR_EMPTYH_SCENE_IMAGE,
        showSaviourSwordOverlay,
        showSaviourSwordLiegeAfterDelay,
        clearRedgLiegeNextTimer,
        endMushroomRealshroomBiteInteraction,
        transitionToScene,
        instantSwapScene,
        enterTreeScene: () => {
            treeSceneModule.enterTreeScene();
        },
        hideMyliege,
        showGirlTwinFlickerAfterRedgTransition,
        showDiscombOutcomePostIt,
        startGoodNightHumSound,
        stopGoodNightHumSound,
        clearDiscombOutcomeToGoodNightTimer,
        showGoodNightPostItCenterThenOffice7Fade,
        setDiscombOutcomeToGoodNightTimerId: (id) => {
            discombOutcomeToGoodNightTimerId = id;
        },
        getSceneBackgroundSrc: () => sceneBackground?.src ?? "",
        getNextSceneStep: () => nextSceneStep,
        setNextSceneStep: (v) => {
            nextSceneStep = v;
        },
        setWorknQuitChoice: (value) => {
            worknQuitChoice = value;
        },
        clearOfficeSequenceTimer,
        stopOfficeTickSound,
        startOfficeTickSound,
        removeOfficeSevenPostIt,
        showMyliegeAfterDelay,
        startOfficeSequence,
        showForestBlueShoesOverlayAfterDelay,
        startDoneSidewalkSequence,
        returnToOpeningScene,
        scheduleNextPostItAfterMyliege: () => {
            scheduleNextPostItAfterMyliege();
        },
        showPartnerChar2OverlayAnimation,
        removePartnerChar2Overlay,
        showFightAfterRedOverlay,
        unlockFightAfterRedOverlay,
    }));

    scheduleNextPostItAfterMyliege = () => {
        clearNextPostItAfterTypingTimer();
        nextPostItAfterTypingTimerId = window.setTimeout(() => {
            showNextScenePostIt();
            nextPostItAfterTypingTimerId = null;
        }, NEXT_POST_IT_AFTER_MYLIEGE_TYPING_MS);
    };

    postItNote.addEventListener("mousedown", () => {
        if (postItNote.dataset.mode !== "start-game") {
            return;
        }

        if (isTransitioning) {
            return;
        }

        clearOfficeSequenceTimer();
        stopOfficeTickSound();
        removeOfficeSevenPostIt();
        hideMyliege();
        clearWorkingNextPostItTimer();

        transitionToScene(
            "fml/working.png",
            () => {
                shoeWrapper.style.display = "none";
                clearAllPostIts();
                nextSceneStep = 0;
                workingNextPostItTimerId = window.setTimeout(() => {
                    if (isTransitioning) {
                        return;
                    }
                    showNextScenePostIt();
                    workingNextPostItTimerId = null;
                }, 1000);
            },
            { fadeInMs: START_TRANSITION_FADE_IN_MS, fadeOutMs: START_TRANSITION_FADE_OUT_MS }
        );
    });
}
