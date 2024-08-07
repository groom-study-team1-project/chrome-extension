const STORAGE_TAG = "[TAG] Storage - ";

class Storage {

  constructor() {
    this.cache = new Map();
    this.name = 'CacheStorage';
    this.init();
    console.log(STORAGE_TAG, "Construct Test");
  }

  init() {
    // 로컬 스토리지에 있는지 확인
    // 있으면 가져오기
    // 없으면 생성하기
    console.log(STORAGE_TAG, "Initializing Test");
  }

  save() {
    // 변경된 내용 저장
  }

  findAll() {
    // 모든 정보 가져오기
  }

  get() {
    // 객체 가져오기
  }

}