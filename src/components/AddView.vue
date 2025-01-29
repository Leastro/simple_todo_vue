<template>
    <ModalView :isEdit="isEdit">
        <button class="close btn-gradient" v-on:click="CloseModal">
            x
        </button>

        <div class="pophead" v-if="!isEdit">
            <img src="../assets/img/list_ol_icon.png" style="width: 38px;" alt="목록아이콘">
            <h1 class="title">
                할 일 등록 - Add To Do
            </h1>
            <h1 class="title2">
                할 일 등록 - Add To Do
            </h1>
        </div>

        <div class="pophead" v-if="isEdit">
            <img src="../assets/img/list_ol_icon.png" style="width: 38px;" alt="목록아이콘">
            <h1 class="title">
                할 일 수정 - Edit To Do
            </h1>
            <h1 class="title2">
                할 일 수정 - Edit To Do
            </h1>
        </div>

        <div class="popbody">
            <div>
                <span>내용<a class="red">*</a></span>
                <br/>
                <input type="text" class="todo" placeholder="할 일" v-model="todoData.content" >
            </div>
            <div>
                <span>담당자<a class="red">*</a></span>
                <br/>
                <input type="text" class="manager" placeholder="담당자" v-model="todoData.manager">
            </div>
            <div>
                <span>기한<a class="red">*</a></span>
                <br/>
                <!--등록 레이아웃과 같이 쓰기 때문에 삼항연산자를 통해 등록일 경우 오늘 날자를, 수정일 경우 해당 데이터를 불러오도록 설정한다.-->
                <VueDatePicker :modelValue="todoData.dueDate ? new Date(todoData.dueDate) : picked" @update:modelValue="newDate => todoData.dueDate = newDate" />
            </div>
            <div v-if="isEdit">
                <span>상태<a class="red">*</a></span>
                <br/>
                <input type="radio" name="status" value="0" v-model="todoData.status"/>미완료
                <input type="radio" name="status" value="1" v-model="todoData.status"/>완료
            </div>
        </div>

        <div class="popfooter">
            <div class="button_result">
                <button class="add btn-gradient" >+ 저장</button>
                <button class="back btn-gradient" v-on:click="CloseModal">x 취소</button>
            </div>
        </div>
    </ModalView>
</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from 'vue3-datepicker';
import ModalView from '../components/ModalView.vue';

let picked =  ref(new Date()); //이걸 써야 데이터 값이 반응되며 날짜가 변경됨
</script>

<script>
export default {
    name: 'AllTodo',
    components: {ModalView},
    props: {
        isEdit: {
            type: Boolean,
            required: true,
        },
        selectedData: {
            type: Object,
            required: false
        },
    },
    data() {
        return {
            todoData: { ...this.selectedData }, // props를 로컬 데이터로 복사
        };
    },
    // watch: {
    //     // selectedData 변경될 때 todoData를 업데이트
    //     selectedData: {
    //         deep: true,
    //         immediate: true,
    //         handler(newValue) {
    //             this.todoData = { ...newValue };
    //         },
    //     },
    // },
    //mounted() {
    //    console.log("AddView, selectedData:", this.selectedData); // 값 받는 것 확인
    //},
    methods: {
        //상위 페이지이자 이벤트가 있는 MainView.vue로 값을 전해준다.
        CloseModal(){
            this.$emit('closeModal', false);
        },
    }
};
</script>