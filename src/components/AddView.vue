<template>
    <ModalView>
        <button class="close btn-gradient" v-on:click="CloseModal">
            x
        </button>

        <div class="pophead">
            <img src="../assets/img/list_ol_icon.png" style="width: 38px;" alt="목록아이콘">
            <h1 class="title">
                할 일 등록 - Add To Do
            </h1>
            <h1 class="title2">
                할 일 등록 - Add To Do
            </h1>
        </div>

        <div class="popbody">
            <div>
                <span>내용<a class="red">*</a></span>
                <br/>
                <input type="text" class="todo" placeholder="할 일">
            </div>
            <div>
                <span>담당자<a class="red">*</a></span>
                <br/>
                <input type="text" class="manager" placeholder="담당자">
            </div>
            <div>
                <span>기한<a class="red">*</a></span>
                <br/>
                <input type="text" class="manager" placeholder="담당자">
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

<script>
import ModalView from '../components/ModalView.vue';

export default {
    name: 'AddTodo',
    components:  {ModalView},
    methods: {
        //상위 페이지이자 이벤트가 있는 MainView.vue로 값을 전해준다.
        CloseModal() {
            this.$emit('closeModal', false);
        },
    }
};

</script>