import PopupView from '../components/AddView.vue';

export default {
    name: 'Main',
    components: {PopupView},
    data(){
        return {
            isModalViwed: false
        }
    },
    methods: {
        AddTodoModal(){
            this.isModalViwed = true;
        },
        // modal 닫기
        CloseModal(data){
            this.isModalViwed = data;
        }
    }
};
