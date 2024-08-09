class Lecture {

  constructor(storage) {
    this.storage = storage;
  }

  isDuplicate({ lectureId, lectureTitle }) {
    return this.storage.get(lectureTitle) !== lectureId;
  }

}
