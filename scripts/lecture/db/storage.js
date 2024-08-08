const STORAGE_TAG = "[TAG] Storage - ";

class Storage {

  constructor() {
    this.observer = new Observer(
        qs("#app"),
        { attributes: true, childList: true, subtree: true }
    );
    this.name = 'CacheStorage';
    this.init();
  }

  async init() {
    this.cache = await this.load();
    console.log(this.cache);
    this.save();
  }

  async load() {
    const data = localStorage.getItem(this.name);
    if (data) {
      console.log(STORAGE_TAG, "load localStorage")
      return new Map(JSON.parse(data));
    }
    return await this.observer.run();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(Array.from(this.cache.entries())));
  }

  get(key) {
    return this.cache.get(key);
  }

}

class Observer {

  constructor(target, config) {
    this.target = target;
    this.config = config;
  }

  run() {
    return new Promise((resolve) => {
      this.mutation(resolve);
    });
  }

  mutation(resolve) {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        const filteredNodes = Array.from(mutation.addedNodes)
            .filter((node) => this.mutationSameClassesFilter(node));

        if (filteredNodes.length > 0) {
          const lectureList = qs("._2JOIo3");
          resolve(this.extractLectures(Array.from(lectureList.children)));
          observer.disconnect();
          break;
        }
      }
    });
    observer.observe(this.target, this.config);
  }

  mutationSameClassesFilter(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }

    const classesName = ['_1h8WRN', '_2fKbgw' , '_1f1oP_'];
    const nodeClasses = Array.from(node.classList);

    return classesName.every(cls => nodeClasses.includes(cls));
  }

  extractLectures(items) {
    const lectureMap = new Map();

    for (let i = 0; i < items.length; i += 3) {
      const { lectureTitles, lectureId } = this.extractLectureInfo(items[i], items[i + 1]);
      for (let lectureTitle of lectureTitles) {
        if (!lectureMap.has(lectureTitle)) {
          lectureMap.set(lectureTitle, lectureId);
        }
      }
    }

    return lectureMap;
  }

  extractLectureInfo(liTag, collapseDiv) {
    const lectureId = qs("div.unqGd-", liTag).innerText;
    const titleTagList = qsAll("div._2jSjki > span._29VsDL", collapseDiv);
    const lectureTitles = titleTagList.map(it => it.innerText);

    return { lectureTitles, lectureId };
  }

}