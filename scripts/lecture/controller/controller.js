const CONTROLLER_TAG = "[TAG] Controller - ";

class Controller {
  
  constructor(lecture, { lectureListView: lectureListView }) {
    this.lecture = lecture;
    this.lectureListView = lectureListView;
    console.log(CONTROLLER_TAG, "construct test");

    this.subscribeEvents();
  }

  subscribeEvents() {
    this.lectureListView.on("validateDuplication", (event) =>
      this.validateDuplication(event.detail)
    );
  }

  validateDuplication({ liTag, collapseDiv }) {
    const lectureId = qs("div.unqGd-", liTag).innerText;
    const titleTags = qsAll("span._29VsDL", collapseDiv);
    titleTags.forEach((title) => {
      const lectureTitle = title.innerText.trim();
      if (this.lecture.isDuplicate({ lectureId, lectureTitle })) {
        this.process(title);
      }
    });
  }

  process(title) {
    chrome.storage.sync.get(['toggleState'], (result) => {
      const parentLiTagOfTitle = title.closest("._3ZcQ2Q");
      parentLiTagOfTitle.style.display = result.toggleState ? "none" : "block";

      if (!title.classList.contains("duplication")) {
        title.classList.add("duplication");
        this.draw(title);
      }
    });
  }

    draw(title) {
      const duplicateText = document.createElement("span");
      duplicateText.textContent = " (중복)";
      duplicateText.style.color = "red";

      title.appendChild(duplicateText);
    }

}
