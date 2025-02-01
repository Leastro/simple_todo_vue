import PopupView from '../components/AddView.vue';

export default {
    name: 'Main',
    components: {PopupView},
    data(){
        return {
            todoList : JSON.parse(localStorage.getItem('List')) || [],
            selectedData : null,
            isModalViwed : false,
            isEdit : false,
            inputName : "",
            resultList : [],
            stateOption : "-",
            isPage : 1, //첫 페이지는 항상 있으므로 1
            pageSelected : 0, //class 추가 구문 때문에 일단 0으로 선언
            inputId : 0
        }
    },
     mounted() {
    //  console.log("MainView, selectedData:", this.selectedData); // 값 받는 것 확인
        this.resultList =  this.todoList.sort((a, b) => b.id - a.id).map((item) => {
            return { ...item, id: item.id };
        }); //처음에는 검색결과와 초기 결과값이 같도록 설정. 내림차순
        if(this.resultList != undefined)
            this.isPage = Math.ceil(this.resultList.length / 10); //하단 페이지 범위 계산
        this.SearchResult(1); // 한 목록에 10개만 나오도록 수정
        this.inputId = this.resultList.length + 1;
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
        deleteData(id){ //삭제
            this.todoList = this.todoList.filter((item) => item.id !== id); //배열에서 삭제
            this.todoList = this.todoList.sort((a, b) => b.id - a.id).map((item) => {
                return { ...item, id: item.id };
            });

            localStorage.setItem('List', JSON.stringify(this.todoList));
            this.LoadTodoList();
        },
        SearchResult(num){ //검색
            let searchList = null; // 검색된 데이터를 저장하기 위한 변수
            let startIndex = (num-1) * 10;
            let endIndex = startIndex + 10;
            // 이미 선택된 경우 해제, 그렇지 않으면 선택
            this.pageSelected = this.pageSelected === num ? null : num;

            //상태를 기본값으로 돌렸을 경우 그냥 초기값으로 변경
            if(this.stateOption == "-" && this.resultList != undefined){
                this.resultList = this.todoList;
                searchList = this.resultList.slice(startIndex, endIndex);
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
                this.resultList = searchList.sort((a, b) => a.id - b.id).map((item) => {
                    return { ...item, id: item.id };
                });
            }
        },
        LoadTodoList() { //목록갱신
            this.todoList = JSON.parse(localStorage.getItem('List'));
            this.todoList.sort((a, b) => b.id - a.id).map((item) => {
                return { ...item, id: item.id };
            });
            this.resultList = this.todoList; // 검색 리스트도 초기화
            this.isPage = Math.ceil(this.resultList.length / 10); // 페이지 갱신
            this.SearchResult(1); // 첫 페이지 재검색
        },
        
    }
};
