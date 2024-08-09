# 사용법

- 원하는 폴더에서 `git clone https://github.com/groom-study-team1-project/chrome-extension.git` 및 압축 해제
- 주소창에 chrome://extensions 검색
- <img width="145" alt="image" src="https://github.com/user-attachments/assets/5c7b24ca-31aa-426e-9fb8-1a8255f239db">
  우측 상단에 개발자 모드 클릭
- <img width="258" alt="image" src="https://github.com/user-attachments/assets/8aebe28b-747f-4e41-8472-e5bac81634aa">
  좌측 상단에 프로그램 로드
- git clone 한 프로그램을 업로드
- 강의 사이트로 이동해서 F5

<br/><br/>

- <img width="437" alt="image" src="https://github.com/user-attachments/assets/e43dac4c-8849-432f-8135-640ca6563754">

  우측 상단에 확장 프로그램 아이콘을 누릅니다.

<br/><br/>

- <img width="285" alt="image" src="https://github.com/user-attachments/assets/0b6caad5-cc10-45f4-96ab-0fd17ea16652">

    우측 상단 확장 프로그램 목록에서 구름 아이콘을 고정합니다.

<br/><br/>

-  <img width="134" alt="image" src="https://github.com/user-attachments/assets/1ba86ac5-b5fe-4253-accd-b7d55340593d">
      toggle 버튼을 이용해서 중복 제거 및 중복 표시 여부를 선택합니다.

---

# 결과물

> HIDE 옵션일 경우,

  <img width="879" alt="image" src="https://github.com/user-attachments/assets/81cc212d-ad30-481f-b714-9319773013dc">
  <img width="446" alt="image" src="https://github.com/user-attachments/assets/b6664b21-3585-4001-9451-f12024645926">

<br/>
<br/>
<br/>

> SHOW 옵션일 경우,

  <img width="879" alt="image" src="https://github.com/user-attachments/assets/a60ddf70-49d7-459a-81c5-51eb02b68590">
  <img width="446" alt="image" src="https://github.com/user-attachments/assets/4fb0084b-fc30-46c5-9cd5-4c5bb93cac45">

---

# Version

### V 1.1
```
Promise 객체를 사용해서 MutationObserver 객체의 속도 저하 문제를 개선했습니다.
localStorage를 활용해서 맨 처음 사이트 방문할 때만, Mutation 작업을 하도록 개선했습니다.
스파게티 코드에서 MVC 패턴 구조로 개선했습니다.
```
### V 1.2
```
Toggle 버튼으로 중복된 결과를 리스트에서 삭제할 지, 보여줄 지를 선택합니다.
Toggle 상태가 Hide 일 경우, 중복된 결과를 강의 리스트 정보에서 삭제합니다.
Toggle 상태가 Show 일 경우, (중복) 이 붙은 태그로 중복 결과를 알 수 있습니다.
Toggle 정보는 Chrome Storage로 관리하므로 페이지를 벗어나더라도 토글 정보가 유지됩니다.
```
### V 1.3
```
강의 홈(강의 영상을 시청하지 않는 강의 목록 화면)뿐만 아니라
강의 메인(강의를 직접적으로 시청하는 화면) 페이지에서도 중복된 결과를 필터링 합니다.
마찬가지로 토글 기능도 정상 동작합니다. 
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
