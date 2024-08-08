const STORAGE_TAG = "[TAG] Storage - ";

class Storage {

  constructor() {
    this.observer = new Observer(
        qs("#app"),
        { attributes: true, childList: true, subtree: true }
    );
    this.name = 'CacheStorage';
    this.cache = this.init();
    console.log(STORAGE_TAG, "Construct Test");
  }

  init() {
    // 로컬 스토리지에 있는지 확인
    // 있으면 가져오기
    // 없으면 생성하기
    console.log(STORAGE_TAG, "Initializing Test");
    const data = localStorage.getItem(this.name);
    if (data) {
      console.log(STORAGE_TAG, "Data found");
      return new Map(JSON.parse(data));
    }
    console.log(STORAGE_TAG, "No data found");
    return this.load();
  }

  load() {
    this.observer.mutation();
    return new Map();
  }

  save() {
    // 변경된 내용 저장
  }

  findAll() {
    // 모든 정보 가져오기
  }

  get(key) {
    // 객체 가져오기
  }

}

class Observer {

  constructor(target, config) {
    this.target = target;
    this.config = config;
  }

  mutation() {
    const observer= new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        const filteredNodes = Array.from(mutation.addedNodes)
            .filter((node) => this.mutationSameClassesFilter(node));

        if (filteredNodes.length > 0) {
          this.extractLectures(qs("._2JOIo3"));
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

  extractLectures(lectureList) {
    const lectureMap = new Map();
    const items = Array.from(lectureList.children);

    for (let i = 0; i < items.length; i += 3) {
      const liTag = items[i];
      const collapseDiv = items[i + 1];

      console.log(qs("div.unqGd-", liTag));
      console.log(qs("a._3ZcQ2Q", collapseDiv));
      console.log(qs("div._2jSjki > span._29VsDL", collapseDiv));
    }

    return lectureMap;
  }

}