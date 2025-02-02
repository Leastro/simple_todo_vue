<template>
    <ModalView :isEdit="isEdit">
        <button class="close btn-gradient" v-on:click="CloseModal">
            x
        </button>

        <div class="pophead" v-if="!isEdit">
            <img src="../assets/img/list_ol_icon.png" style="height:40px;padding-top:20px;" alt="목록아이콘">
            <h1 class="title">
                <img src="../assets/img/add_title.png" alt="등록">
            </h1>
        </div>

        <div class="pophead" v-if="isEdit">
            <img src="../assets/img/list_ol_icon.png" style="height:40px;padding-top:20px;" alt="목록아이콘">
            <h1 class="title">
                <img src="../assets/img/Edit_title.png" alt="수정">
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
                <VueDatePicker :modelValue="todoData.dueDate ? new Date(todoData.dueDate) : picked"  @update:modelValue="newDate => todoData.dueDate = newDate" />
            </div>
            <div v-if="isEdit">
                <span>상태<a class="red">*</a></span>1
                <br/>
                <input type="radio" name="state" value="0" v-model="todoData.state"/>미완료
                <input type="radio" name="state" value="1" v-model="todoData.state"/>완료
            </div>
        </div>

        <div class="popfooter">
            <div class="button_result">
                <button class="add btn-gradient" v-on:click="SaveData">+ 저장</button>
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
        inputId: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            todoData: { ...this.selectedData }, // props를 로컬 데이터로 복사
            totalInfo : JSON.parse(localStorage.getItem('List')) || []
        };
    },
    mounted() {
    //    console.log("AddView, selectedData:", this.selectedData); // 값 받는 것 확인
    },
    methods: {
        //상위 페이지이자 이벤트가 있는 MainView.vue로 값을 전해준다.
        CloseModal(){
            this.$emit('closeModal', false);
        },
        formatDate(date){
            return date.getFullYear() + 
            '-' + String(date.getMonth() + 1).padStart(2, '0') +
            '-' + String(date.getDate()).padStart(2, '0');
        },
        SaveData(){//입력한 할 일 혹은 수정한 할 일을 로컬 스토리지에 저장한다.
            let today = new Date();
            let dataLen = this.totalInfo.length;
            
            let totalInfos = {
                id: this.isEdit ? this.todoData.id : (dataLen > 0 ? dataLen + 1 : 1), 
                content: this.todoData.content, 
                manager: this.todoData.manager, 
                state: this.isEdit ? this.todoData.state : '0',
                dueDate: this.todoData.dueDate == undefined ? 
                this.formatDate(today) : 
                (this.isEdit ? this.formatDate(this.todoData.dueDate) : this.todoData.dueDate),
                createdAt: this.formatDate(today)
            }

            if(this.isEdit){
                //기존 데이터 삭제 후 다시 넣기
                this.totalInfo = this.totalInfo.filter((item) => item.id !== totalInfos.id); //배열에서 삭제
                //결과를 다시 정렬
                this.totalInfo = this.totalInfo.sort((a, b) => b.id - a.id).map((item) => {
                    return { ...item, id: item.id };
                });
            }
            this.totalInfo.push(totalInfos);

            localStorage.setItem('List', JSON.stringify(this.totalInfo));//로컬저장
            

            //화면 닫기 전 목록 갱신
            this.$emit('updateList');

            //화면 닫기
            this.$emit('closeModal', false);
        }
    }
};
</script>