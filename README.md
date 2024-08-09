# 사용법

- 원하는 폴더에서 `git clone https://github.com/groom-study-team1-project/chrome-extension.git` 및 압축 해제
- 주소창에 chrome://extensions 검색
- <img width="145" alt="image" src="https://github.com/user-attachments/assets/5c7b24ca-31aa-426e-9fb8-1a8255f239db">
  우측 상단에 개발자 모드 클릭
- <img width="258" alt="image" src="https://github.com/user-attachments/assets/8aebe28b-747f-4e41-8472-e5bac81634aa">
  좌측 상단에 프로그램 로드
- git clone 한 프로그램을 업로드
- 강의 사이트로 이동해서 F5

---

### V 1.0.1
```
Promise 객체를 사용해서 MutationObserver 객체의 속도 저하 문제를 개선했습니다.
localStorage를 활용해서 맨 처음 사이트 방문할 때만, Mutation 작업을 하도록 개선했습니다.
스파게티 코드에서 MVC 패턴 구조로 개선했습니다.
```
---

# 브랜치 전략

## Format
`branch-type/#issue-id`

## Rule
- 적절한 브랜치 생성
- 작업 후 해당 브랜치를 생성했던 브랜치로 PR
- 작업 완료된 브랜치는 삭제

## Branch Type - Github Flow
![image](https://github.com/dnd-side-project/dnd-10th-9-backend/assets/50333168/1dc87948-57cf-4b1e-94ab-13c691c2cf76)
- `main` : 제품 배포
- `feat` : 기능 개발
- `fix` : 버그 수정

# 커밋 메시지
|타입|설명|
|---|---|
|feat|(#이슈번호) 새로운 기능 추가|
|fix|(#이슈번호) 버그 수정|
|docs|(#이슈번호) 문서 수정|
|style|(#이슈번호) 공백, 세미콜론 등 스타일 수정|
|refactor|(#이슈번호) 코드 리팩토링|
|perf|(#이슈번호) 성능 개선|
|test|(#이슈번호) 테스트 추가|
|chore|(#이슈번호) 빌드 과정 또는 보조 기능(문서 생성 기능 등) 수정|
|design|(#이슈번호) 기능 수정 없이 스타일(CSS)만 수정|

## Example
```
git commit -am 'feat (#189) : 게시판 작성 기능 구현'
```
