const LECTURE_TAG = "[TAG] Lecture - ";

class Lecture {
  constructor(storage) {
    this.storage = storage;
    console.log(LECTURE_TAG, "Construct Test");
  }

  isDuplicate({ lectureId, lectureTitle }) {
    return this.storage.get(lectureTitle) === lectureId;
  }
}
