<template>
    <div class="modal">
        <div class="overlay" v-on:click="CloseModal"></div>
      
        <div class="modal-card">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        //상위 페이지이자 이벤트가 있는 MainView.vue로 값을 전해준다.
        CloseModal() {
            this.$emit('closeModal', false);
        },
    }
};
</script>