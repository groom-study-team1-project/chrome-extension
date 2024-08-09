class Controller {

    constructor(lecture, { lectureListView }) {
        this.lecture = lecture;
        this.lectureListView = lectureListView;

        this.subscribeEvents();
    }

    subscribeEvents() {
        this.lectureListView.on("validateDuplication", (event) =>
            this.validateDuplication(event.detail)
        );
    }

    validateDuplication({liTag, collapseDiv}) {
        const lectureId = qs("div.unqGd-", liTag).innerText;
        const titleTags = qsAll("span._29VsDL", collapseDiv);

        titleTags.forEach((title) => {
            const lectureTitle = title.innerText.trim();

            if (this.lecture.isDuplicate({lectureId, lectureTitle})) {
                this.process(title);
            }
        });
    }

    process(title) {
        chrome.storage.sync.get(['toggleState'], (result) => {
            this.toggleProcess({ title, state: result.toggleState });

            if (!title.classList.contains("duplication")) {
                title.classList.add("duplication");
                this.drawProcess(title);
            }
        });
    }

    toggleProcess({ title, state }) {
        const currentUrl = window.location.href;
        const parentInfo = currentUrl.includes("lesson") ? "._2J4-8M.V6OMcC" : "._3ZcQ2Q";
        const parentLiTagOfTitle = title.closest(parentInfo);

        parentLiTagOfTitle.style.display = state ? "none" : "block";
    }

    drawProcess(title) {
        const duplicateText = document.createElement("span");
        duplicateText.textContent = " (중복)";
        duplicateText.style.color = "red";

        title.appendChild(duplicateText);
    }

}
