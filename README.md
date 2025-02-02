# simple_todo_vue

## 프로젝트 설명
MainView.vue를 기반으로 Modal기능을 이용 할 일 등록, 수정이 가능하며 목록에서 x를 누름으로서 일정을 삭제하고 순번을 재정렬 합니다.

##예시 데이터
로컬스토리지 key이름은 List 로 지정
[{"id": 11, "content": "연말정산 마감일", "manager": "김미아", "state": "0", "dueDate": "2025-02-08", "createdAt": "2025-02-02"},
{"id": 10, "content": "00프로젝트 업데이트 반영일", "manager": "안가훈", "state": "0", "dueDate": "2025-02-21", "createdAt": "2025-02-02"},
{"id": 9, "content": "1차 프로젝트 마감일", "manager": "김테스", "state": "1", "dueDate": "2025-01-31", "createdAt": "2025-02-02"},
{"id": 8, "content": "오전 9시 반 B사 방문", "manager": "김새롬", "state": "0", "dueDate": "2025-02-02", "createdAt": "2025-02-02"},
{"id": 7, "content": "오후 2시 담당자 미팅", "manager": "김새롬", "state": "0", "dueDate": "2025-02-12", "createdAt": "2025-02-02"},
{"id": 6, "content": "오전 10시 반 영업팀 회의", "manager": "차승훈", "state": "0", "dueDate": "2025-02-07", "createdAt": "2025-02-02"},
{"id": 4, "content": "단체 미팅", "manager": "이나운", "state": "0", "dueDate": "2025-02-04", "createdAt": "2025-02-02"},
{"id": 3, "content": "오후 4시 담당자 미팅", "manager": "김새롬", "state": "0", "dueDate": "2025-02-08", "createdAt": "2025-02-02"},
{"id": 2, "content": "6시 반 전체 회식", "manager": "김미아", "state": "0", "dueDate": "2025-02-15", "createdAt": "2025-02-02"},
{"id": 1, "content": "오후3시 디자인 회의", "manager": "김테스", "state": "0", "dueDate": "2025-02-04", "createdAt": "2025-02-02"},
{"id": 5, "content": "오후 2시 백엔드 개발팀 회의", "manager": "안가훈", "state": "0", "dueDate": "2025-02-14", "createdAt": "2025-02-02"}]

## /src 하단 폴더 설명
- assets : 이미지와 사용 폰트 저장 장소
- components : Modal vue 파일 저장 장소
- css : 전체 페이지에 대한 디자인 css 저장 장소
- js : 작업 기능 관련 저장 장소
- views : 기본 웹에서 보이는 vue 파일 저장 장소
