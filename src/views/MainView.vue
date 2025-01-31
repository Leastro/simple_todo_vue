<template>
  <div class="main">
    <img src="../assets/img/list_ol_icon.png" style="width: 38px;" alt="목록아이콘">
    <h1 class="title">
      <img src="../assets/img/Main_title.png" alt="제목">
    </h1>
  </div>

  <div class="body">
    <div class="button_head">
      <button class="add btn-gradient" v-on:click="AddTodoModal">+ 등록</button>
      <select name="state" id="" class="state" v-model="stateOption" @click="SearchResult(1)">
          <option value="-" selected>상태</option>
          <option value="1">완료</option>
          <option value="0">미완료</option>
      </select>
      <input type="text" class="manager" placeholder="담당자" v-model="inputName" @keyup.enter="SearchResult(1)">
      <button class="search btn-gradient" @click="SearchResult(1)">검색</button>
    </div>
    <div class="list_table">
      <table>
        <caption>todo리스트</caption>
        <colgroup>
            <col style="width:8%;">
            <col style="width:auto;">
            <col style="width:7%;">
            <col style="width:7%;">
            <col style="width:10%;">
            <col style="width:10%;">
            <col style="width:10%;">
        </colgroup>
        <thead>
          <tr>
            <th>ID</th>
            <th>내용</th>
            <th>담당자</th>
            <th>상태</th>
            <th>기한</th>
            <th>등록시간</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in resultList.slice().reverse()" :key="index">
            <td>{{ item.id }}</td> <!--ID-->
            <td>{{ item.content }}</td> <!--내용-->
            <td>{{ item.manager }}</td> <!--담당자-->
            <td>{{ item.status === '1' ? '완료' : '미완료' }}</td> <!--상태-->
            <td>{{ item.dueDate }}</td> <!--기한-->
            <td>{{ item.createdAt }}</td> <!--등록시간-->
            <td> <!--수정/삭제-->
              <img class="edit" alt="eidt" @click="EditTodoModal(item)" >
              <img class="remove" alt="remove" @click="RemoveTodoModal(item.id)">
            </td>
          </tr>
          <tr v-if="resultList.length === 0">
            <td colspan="7" style="text-align: center;">정보가 없습니다</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page_num">
      <img class="btn-gradient" src="../assets/img/left_arrow_w_icon.png" style="width: 20px;" alt="이전페이지">
      <span v-for="item in isPage" :key="item"  @click="SearchResult(item)" :class="['pageSelect_' + item, { pageSelect: pageSelected === item }]"> {{ item }}</span>
      <img class="btn-gradient" src="../assets/img/right_arrow_w_icon.png" style="width: 20px;" alt="다음페이지">
    </div>

    <!-- modal 호출 -->
    <!-- closeModal은 modal페이지에서 닫는 걸 눌렀을때의 값을 받아서 닫기 이벤트를 활성화시킨다-->
    <PopupView v-if="isModalViwed || isEdit" @closeModal="CloseModal" :isEdit="isEdit" :selectedData="selectedData" />
  </div>
</template>

<script type="text/javascript" src="../js/MainView.js"></script>