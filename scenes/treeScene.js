import {
    AM_TREE_NOTE_TEXT,
    AM_TREE_RECAP_PARAGRAPH,
    AM_TREE_RECAP_TITLE,
    AM_TREE_REDG_SCENE_IMAGE,
    AM_WINDOW_HOVER_IMAGE,
    AM_WINDOW_IMAGE,
} from "../constants.js";

export const createTreeSceneModule = ({
    imageContainer,
    getIsTransitioning,
    showMyliegeAfterDelay,
    myliegeSecondaryDefaultImage,
    getCoverFit,
    swapBackgroundInstant,
    onAmTreeRedGirlShown,
    prepareBeforeAmTreeRedG,
}) => {
    let amWindowOverlayElement = null;
    let amWindowHoverUnlocked = false;
    let amTreeRecapOverlay = null;
    let amTreeRecapTimerId = null;

    const amWindowMaskCanvas = document.createElement("canvas");
    const amWindowMaskCtx = amWindowMaskCanvas.getContext("2d", { willReadFrequently: true });

    const setupAmWindowMask = () => {
        if (!amWindowMaskCtx || !amWindowOverlayElement?.naturalWidth || !amWindowOverlayElement?.naturalHeight) {
            return;
        }
        amWindowMaskCanvas.width = amWindowOverlayElement.naturalWidth;
        amWindowMaskCanvas.height = amWindowOverlayElement.naturalHeight;
        amWindowMaskCtx.clearRect(0, 0, amWindowMaskCanvas.width, amWindowMaskCanvas.height);
        amWindowMaskCtx.drawImage(amWindowOverlayElement, 0, 0);
    };

    const isMouseOnAmWindow = (event) => {
        if (!amWindowMaskCtx || !amWindowOverlayElement?.naturalWidth || !amWindowOverlayElement?.naturalHeight) {
            return false;
        }
        const rect = amWindowOverlayElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const fit = getCoverFit(
            rect.width,
            rect.height,
            amWindowOverlayElement.naturalWidth,
            amWindowOverlayElement.naturalHeight
        );
        const relX = x - fit.offsetX;
        const relY = y - fit.offsetY;
        if (relX < 0 || relY < 0 || relX > fit.drawW || relY > fit.drawH) {
            return false;
        }
        const imgX = Math.floor((relX / fit.drawW) * amWindowOverlayElement.naturalWidth);
        const imgY = Math.floor((relY / fit.drawH) * amWindowOverlayElement.naturalHeight);
        const pixel = amWindowMaskCtx.getImageData(imgX, imgY, 1, 1).data;
        return pixel[3] > 20;
    };

    const ensureAmWindowOverlay = () => {
        if (!imageContainer) {
            return null;
        }
        if (!amWindowOverlayElement) {
            amWindowOverlayElement = document.createElement("img");
            amWindowOverlayElement.className = "am-window-overlay";
            amWindowOverlayElement.src = AM_WINDOW_IMAGE;
            amWindowOverlayElement.alt = "";
            amWindowOverlayElement.addEventListener("load", () => {
                setupAmWindowMask();
            });
            amWindowOverlayElement.addEventListener("mousemove", (event) => {
                const hovered = amWindowHoverUnlocked && isMouseOnAmWindow(event);
                amWindowOverlayElement.src = hovered ? AM_WINDOW_HOVER_IMAGE : AM_WINDOW_IMAGE;
                amWindowOverlayElement.style.cursor = hovered ? "pointer" : "default";
            });
            amWindowOverlayElement.addEventListener("mouseleave", () => {
                amWindowOverlayElement.src = AM_WINDOW_IMAGE;
                amWindowOverlayElement.style.cursor = "default";
            });
            amWindowOverlayElement.addEventListener("mousedown", (event) => {
                if (getIsTransitioning() || !amWindowHoverUnlocked) {
                    return;
                }
                if (!isMouseOnAmWindow(event)) {
                    return;
                }
                const src = (amWindowOverlayElement.currentSrc || amWindowOverlayElement.src || "").toLowerCase();
                if (!src.includes("rwindow")) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                prepareBeforeAmTreeRedG?.();
                swapBackgroundInstant(AM_TREE_REDG_SCENE_IMAGE);
                hideAmWindowOverlay();
                onAmTreeRedGirlShown?.();
            });
            imageContainer.appendChild(amWindowOverlayElement);
        } else if (!amWindowOverlayElement.isConnected) {
            imageContainer.appendChild(amWindowOverlayElement);
        }
        return amWindowOverlayElement;
    };

    const hideAmWindowOverlay = () => {
        amWindowHoverUnlocked = false;
        if (!amWindowOverlayElement) {
            return;
        }
        amWindowOverlayElement.classList.remove("is-unlocked");
        amWindowOverlayElement.classList.remove("show");
        amWindowOverlayElement.src = AM_WINDOW_IMAGE;
        amWindowOverlayElement.style.cursor = "default";
    };

    const clearAmTreeRecapTimer = () => {
        if (!amTreeRecapTimerId) {
            return;
        }
        window.clearTimeout(amTreeRecapTimerId);
        amTreeRecapTimerId = null;
    };

    const removeAmTreeRecapOverlay = () => {
        if (!amTreeRecapOverlay) {
            return;
        }
        amTreeRecapOverlay.remove();
        amTreeRecapOverlay = null;
    };

    const startAmTreeLiegeSequence = (overlay) => {
        showMyliegeAfterDelay(
            () => {
                amWindowHoverUnlocked = true;
                overlay?.classList.add("is-unlocked");
            },
            AM_TREE_NOTE_TEXT,
            myliegeSecondaryDefaultImage
        );
    };

    const showAmTreeRecapOverlay = (overlay) => {
        if (!imageContainer || amTreeRecapOverlay) {
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
        recapTitle.textContent = AM_TREE_RECAP_TITLE;

        const recapParagraph = document.createElement("p");
        recapParagraph.className = "mushroom-refusal-paragraph";
        recapParagraph.textContent = AM_TREE_RECAP_PARAGRAPH;

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
        imageContainer.appendChild(recapOverlay);
        amTreeRecapOverlay = recapOverlay;

        signatureInput.addEventListener("input", () => {
            okButton.disabled = signatureInput.value.trim().length === 0;
        });

        okButton.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (getIsTransitioning()) {
                return;
            }
            if (signatureInput.value.trim().length === 0) {
                signatureInput.focus();
                return;
            }
            okButton.classList.add("is-pressed");
            okButton.disabled = true;
            window.setTimeout(() => {
                removeAmTreeRecapOverlay();
                startAmTreeLiegeSequence(overlay);
            }, 60);
        });
    };

    const enterTreeScene = () => {
        const overlay = ensureAmWindowOverlay();
        amWindowHoverUnlocked = false;
        if (overlay) {
            overlay.src = AM_WINDOW_IMAGE;
            overlay.classList.remove("is-unlocked");
        }
        overlay?.classList.add("show");
        clearAmTreeRecapTimer();
        removeAmTreeRecapOverlay();
        if (!getIsTransitioning()) {
            showAmTreeRecapOverlay(overlay);
        }
    };

    const cleanup = () => {
        clearAmTreeRecapTimer();
        removeAmTreeRecapOverlay();
    };

    return {
        enterTreeScene,
        hideAmWindowOverlay,
        cleanup,
    };
};
