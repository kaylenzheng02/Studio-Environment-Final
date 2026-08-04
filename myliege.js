export const setMyliegeSidePostItTextModule = ({
    myliegeSidePostIt,
    text,
    applyTypewriterVars,
}) => {
    if (!myliegeSidePostIt) {
        return;
    }
    const sideNoteText = myliegeSidePostIt.querySelector(".post-it-text");
    if (!sideNoteText) {
        return;
    }
    sideNoteText.textContent = text;
    sideNoteText.style.whiteSpace = "";
    applyTypewriterVars(sideNoteText, text);
};

export const animateLiegeSidePostItTypewriterModule = ({
    myliegeSidePostIt,
    text,
    applyTypewriterVars,
    startTypewriterSound,
    stopTypewriterSound,
    onTypeComplete,
}) => {
    setMyliegeSidePostItTextModule({
        myliegeSidePostIt,
        text,
        applyTypewriterVars,
    });
    const noteText = myliegeSidePostIt?.querySelector(".post-it-text");
    if (!noteText || !myliegeSidePostIt) {
        return;
    }

    myliegeSidePostIt.classList.remove("typing");
    void noteText.offsetWidth;
    myliegeSidePostIt.classList.add("typing");
    startTypewriterSound();
    noteText.addEventListener("animationend", (event) => {
        if (event.animationName !== "type-note") {
            return;
        }
        myliegeSidePostIt?.classList.remove("typing");
        stopTypewriterSound();
        if (onTypeComplete) {
            onTypeComplete();
        }
    }, { once: true });
};

export const ensureMyliegeSpriteModule = ({
    imageContainer,
    myliegeSprite,
    myliegeSprite2,
    myliegeSidePostIt,
    myliegeImage,
    myliegeSecondaryDefaultImage,
    positionMyliegeSidePostIt,
    setMyliegeSidePostItText,
    myliegeDefaultNoteText,
}) => {
    if (!imageContainer) {
        return { myliegeSprite, myliegeSprite2, myliegeSidePostIt };
    }
    if (!myliegeSprite) {
        myliegeSprite = document.createElement("img");
        myliegeSprite.className = "myliege-sprite";
        myliegeSprite.src = myliegeImage;
        myliegeSprite.alt = "";
        myliegeSprite.addEventListener("load", () => {
            positionMyliegeSidePostIt();
        });
        imageContainer.appendChild(myliegeSprite);
    }
    if (!myliegeSprite2) {
        myliegeSprite2 = document.createElement("img");
        myliegeSprite2.className = "myliege-sprite";
        myliegeSprite2.src = myliegeSecondaryDefaultImage;
        myliegeSprite2.alt = "";
        myliegeSprite2.addEventListener("load", () => {
            positionMyliegeSidePostIt();
        });
        imageContainer.appendChild(myliegeSprite2);
    }
    if (!myliegeSidePostIt) {
        myliegeSidePostIt = document.createElement("div");
        myliegeSidePostIt.className = "post-it myliege-side-post-it";

        const sideNoteText = document.createElement("span");
        sideNoteText.className = "post-it-text post-it-text-bold";

        myliegeSidePostIt.appendChild(sideNoteText);
        imageContainer.appendChild(myliegeSidePostIt);
    } else if (!myliegeSidePostIt.isConnected) {
        imageContainer.appendChild(myliegeSidePostIt);
    }

    setMyliegeSidePostItText(myliegeDefaultNoteText);
    return { myliegeSprite, myliegeSprite2, myliegeSidePostIt };
};

export const setMyliegeAnimationFramesModule = ({
    myliegeSprite,
    myliegeSprite2,
    myliegeImage,
    secondaryFrameImage,
}) => {
    if (myliegeSprite) {
        myliegeSprite.src = myliegeImage;
    }
    if (myliegeSprite2) {
        myliegeSprite2.src = secondaryFrameImage;
    }
};

export const positionMyliegeSidePostItModule = ({
    imageContainer,
    myliegeSprite,
    myliegeSprite2,
    myliegeSidePostIt,
    visiblePaddingXRatio,
    sideNoteGapPx,
    sideNoteYOffsetPx,
}) => {
    if (!imageContainer || !myliegeSprite || !myliegeSidePostIt) {
        return;
    }

    const spriteRect = (myliegeSprite.classList.contains("show") ? myliegeSprite : (myliegeSprite2 || myliegeSprite))
        .getBoundingClientRect();
    const containerRect = imageContainer.getBoundingClientRect();
    const usableSpriteRight = spriteRect.right - (spriteRect.width * visiblePaddingXRatio);
    const localLeft = usableSpriteRight - containerRect.left + sideNoteGapPx;
    const localBottom = (containerRect.bottom - spriteRect.bottom) + sideNoteYOffsetPx;

    myliegeSidePostIt.style.left = `${Math.round(localLeft)}px`;
    myliegeSidePostIt.style.bottom = `${Math.round(localBottom)}px`;
};
