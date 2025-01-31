import PopupView from '../components/AddView.vue';

export default {
    name: 'Main',
    components: {PopupView},
    data(){
        return {
            todoList : [
                { id: 1, content: '오전 9시 반 C기업 솔루션 회의', manager: '김길동', status: '1', dueDate: '2025-01-05', createdAt: '2025-01-02' },
                { id: 2, content: '오후 2시 G사 고객 방문', manager: '신제훈', status: '1', dueDate: '2025-01-06', createdAt: '2025-01-03' },
                { id: 3, content: '오전 9시 반 영업팀 회의', manager: '신제훈', status: '1', dueDate: '2025-01-13', createdAt: '2025-01-10' },
                { id: 4, content: '오후 6시 반 회식', manager: '김현', status: '1', dueDate: '2025-01-14', createdAt: '2025-01-10' },
                { id: 5, content: '오후 12시 점식 회식', manager: '김현', status: '1', dueDate: '2025-01-17', createdAt: '2025-01-10' },
                { id: 6, content: '오후 1시 OT교육', manager: '박사훈', status: '0', dueDate: '2025-02-01', createdAt: '2025-01-10' },
                { id: 7, content: '오전 11시 디자인팀 회의', manager: '김기현', status: '1', dueDate: '2025-01-15', createdAt: '2025-01-14' },
                { id: 8, content: '오전 12시 개발부서 회의', manager: '최수아', status: '1', dueDate: '2025-01-22', createdAt: '2025-01-21' },
                { id: 9, content: '오후 1시 반 디자인팀 프론트엔팀 합동 회의', manager: '김기현', status: '1', dueDate: '2025-01-24', createdAt: '2025-01-22' },
                { id: 10, content: '오후 4시 프로젝트 A-프론트 파트 회의', manager: '이영희', status: '0', dueDate: '2025-02-01', createdAt: '2025-01-23' },
                { id: 11, content: '오후 3시 D사 영업 교류', manager: '신제훈', status: '0', dueDate: '2025-02-05', createdAt: '2025-01-24' },
            ],
            selectedData : null,
            isModalViwed : false,
            isEdit : false,
            inputName : "",
            resultList : [],
            stateOption : "-",
            isPage : 1,
        }
    },
     mounted() {
    //  console.log("MainView, selectedData:", this.selectedData); // 값 받는 것 확인
        this.resultList = this.todoList; //처음에는 검색결과와 초기 결과값이 같도록 설정
        this.isPage = Math.ceil(this.resultList.length / 10); //하단 페이지 범위 계산
        this.SearchResult(1); // 한 목록에 10개만 나오도록 수정
    },
    methods: {        
        AddTodoModal(){ //등록
            this.isModalViwed = true;
            this.isEdit = false;
        },
        EditTodoModal(item){ //수정
            this.isModalViwed = true;
            this.isEdit = true;
            this.selectedData = item;//선택한 열 데이터를 모달에 넘긴다
        },
        // modal 닫기
        CloseModal(data){
            this.isModalViwed = data;
            this.isEdit = data;
            this.selectedData = null;
        },
        RemoveTodoModal(id){ //삭제
            this.todoList = this.todoList.filter((item) => item.id !== id); //배열에서 삭제
            //다시 순서대로 정렬
            this.todoList = this.todoList.map((item, index) => {
                return { ...item, id: index + 1 }; // index는 0부터 시작하므로 +1
            });
        },
        SearchResult(num){ //검색
            let searchList = []; // 검색된 데이터를 저장하기 위한 변수
            let startPage = (num - 1)*10;//페이지 시작 번호 찾기
            let startNum = (num - 1)*10 + 1; //정렬할 때 id 부여

            //상태를 기본값으로 돌렸을 경우 그냥 초기값으로 변경
            if(this.stateOption == "-"){
                this.resultList = this.todoList;
                for (let i = startPage; i <= startPage + 9 ; i ++){ //10개만 나오도록 제한
                    if(this.resultList[i])
                        searchList.push(this.resultList[i]);
                }
            }

            //먼저 담당자 검색어가 입력되어 있는지 체크한다.
            if (this.inputName != "") {
                searchList = this.todoList.filter(item => item.manager.includes(this.inputName)); // 부분 일치 검색
            }

            //두 번째로 상태에 대한 검색을 체크한다.
            //상기 담당자 검색 결과가 있는지 없는지를 체크 한 후에 상태 필터를 거친다.
            if(searchList != undefined && searchList.length > 0){
                if(this.stateOption == "0"){ //미완료 상태
                    searchList = searchList.filter(item => item.status === '0');
                }else if(this.stateOption == "1"){ //완료 상태
                    searchList = searchList.filter(item => item.status === '1');
                }
            }else{
                if(this.stateOption == "0"){ //미완료 상태
                    searchList = this.todoList.filter(item => item.status === '0');
                }else if(this.stateOption == "1"){ //완료 상태
                    searchList = this.todoList.filter(item => item.status === '1');
                }
            }
            
            //정렬
            if(searchList != undefined && searchList.length >= 0){
                //검색 결과를 다시 정렬
                this.resultList = searchList.map((item) => {
                    return { ...item, id: startNum++ };
                });
            }
        },
        
    }
};
