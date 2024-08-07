const CONTROLLER_TAG = "[TAG] Controller - ";

class Controller {

  constructor(lecture, { lectureListView: lectureListView }) {
    this.lecture = lecture;
    this.lectureListView = lectureListView;
    console.log(CONTROLLER_TAG, "construct test");

    this.subscribeEvents();
  }

  subscribeEvents() {
    // View Event 처리하기
  }

}
