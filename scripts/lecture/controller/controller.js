const CONTROLLER_TAG = "[TAG] Controller - ";

class Controller {

  constructor(lecture, { lectureListView: lectureListView }) {
    this.lecture = lecture;
    this.lectureListView = lectureListView;
    console.log(CONTROLLER_TAG, "construct test");

    this.subscribeEvents();
  }

  subscribeEvents() {
    this.lectureListView.on('validateDuplication', (event) => this.validateDuplication(event.detail))
  }

  validateDuplication({ liTag, collapseDiv }) {
    console.log(liTag, collapseDiv);
    // todo 중복 검사 및 변경
  }

}
