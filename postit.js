export const createPostItDiv = ({ className, mode, text, textClassName }) => {
    const note = document.createElement("div");
    note.className = className;
    if (mode) {
        note.dataset.mode = mode;
    }

    if (typeof text === "string") {
        const textNode = document.createElement("span");
        textNode.className = textClassName || "post-it-text";
        textNode.textContent = text;
        note.appendChild(textNode);
    }

    return note;
};

export const createPostItText = ({ text, className = "post-it-text" }) => {
    const node = document.createElement("span");
    node.className = className;
    node.textContent = text;
    return node;
};
