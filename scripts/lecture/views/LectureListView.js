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
        const isLiTag = target.tagName === 'LI'
            && target.classList.contains('_2dEI31')
            && qs('svg', target);
        const isDivTag = target.tagName === 'DIV'
            && target.classList.contains('cz0wtv')
            && qs('svg._30zp6b', target.parentElement);

        if (isLiTag || isDivTag) {
            console.log(target, "test");
        }
    }

}