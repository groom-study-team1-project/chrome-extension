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
        const target = event.target;

        if (target.classList.contains('_2dEI31') && qs('svg._30zp6b', target)) {
            const collapseDiv = target.nextElementSibling;
            this.emit('validateDuplication', { liTag: target, collapseDiv });
        }

        if (target.classList.contains('cz0wtv') && qs('svg._30zp6b', target.parentElement)) {
            const liTag = target.parentElement;
            const collapseDiv = liTag.nextElementSibling;
            this.emit('validateDuplication', { liTag, collapseDiv });
        }

    }

}