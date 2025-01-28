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
            isEdit : false
        }
    },
    // mounted() {
    //     console.log("MainView, selectedData:", this.selectedData); // 값 받는 것 확인
    // },
    methods: {
        AddTodoModal(){
            this.isModalViwed = true;
            this.isEdit = false;
        },
        EditTodoModal(item){
            this.isModalViwed = true;
            this.isEdit = true;
            this.selectedData = item;//선택한 열 데이터를 저장한다.
        },
        // modal 닫기
        CloseModal(data){
            this.isModalViwed = data;
            this.isEdit = data;
            this.selectedData = null;
        },
        removeTodoModal(id){
            this.todoList = this.todoList.filter((item) => item.id !== id); //배열에서 삭제
            //다시 순서대로 정렬
            this.todoList = this.todoList.map((item, index) => {
                return { ...item, id: index + 1 }; // index는 0부터 시작하므로 +1
            });
        },
    }
};
