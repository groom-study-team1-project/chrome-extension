function main() {
    const storage = new Storage();
    const lecture = new Lecture(storage);
    const views = {
        lectureListView: new LectureListView(),
    }
    const controller = new Controller(lecture, views);
}

document.addEventListener('DOMContentLoaded', main);

