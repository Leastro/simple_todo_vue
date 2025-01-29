import PopupView from '../components/AddView.vue';

export default {
    name: 'Main',
    components: {PopupView},
    data(){
        return {
            todoList: [
                { id: 1, content: '테스트', manager: '김길동', status: '1', dueDate: '2025-01-05', createdAt: '2025-01-02' },
                { id: 2, content: '예제', manager: '이영희', status: '0', dueDate: '2025-02-01', createdAt: '2025-01-10' },
            ],
            selectedData : null,
            isModalViwed : false,
            isEdit : false,
            inputName : "",
            resultList : [],
            stateOption : "-",
        }
    },
     mounted() {
    //     console.log("MainView, selectedData:", this.selectedData); // 값 받는 것 확인
        this.resultList = this.todoList; //처음에는 검색결과와 초기 결과값이 같도록 설정
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
        SearchResult(){ //검색
            let searchList; // 검색된 데이터를 저장하기 위한 변수

            //상태를 기본값으로 돌렸을 경우 그냥 초기값으로 변경
            if(this.stateOption == "-"){
                this.resultList = this.todoList;
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
                this.resultList = searchList.map((item, index) => {
                    return { ...item, id: index + 1 }; // index는 0부터 시작하므로 +1
                });
            }
        },
    }
};
