const LECTURE_LIST_VIEW = "[TAG] Lecture List - ";

class LectureListView extends View {

    constructor() {
        super(qs("#app"));
        console.log(LECTURE_LIST_VIEW, "Construct Test");

        this.bindEvents();
    }

    bindEvents() {
        on(this.element, "click", event => this.handleClick(event));
    }

    handleClick(event) {
        console.log(event.target);
        // li tag && class == _2dEI31
        // div tag && clas == cz0vwtv
        // div 안에 svg class == _30zp6b 일 경우
        // click event 발행
        // div svg class == _21qqqI일 경우 무반응
    }

}