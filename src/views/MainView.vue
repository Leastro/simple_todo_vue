<template>
  <div class="main">
    <img src="../assets/img/list_ol_icon.png" style="width: 38px;" alt="목록아이콘">
    <h1 class="title">
      당신의 할 일 목록's - To Do List
    </h1>
    <h1 class="title2">
      당신의 할 일 목록's - To Do List
    </h1>
  </div>

  <div class="body">
    <div class="button_head">
      <button class="add btn-gradient" v-on:click="AddTodoModal">+ 등록</button>
      <select name="state" id="" class="state">
          <option value="0" selected>상태</option>
          <option value="complete">완료</option>
          <option value="ing">미완료</option>
      </select>
      <input type="text" class="manager" placeholder="담당자">
      <button class="search btn-gradient">검색</button>
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
          <tr>
            <td>1</td>
            <td>테스트</td>
            <td>김길동</td>
            <td>완료</td>
            <td>2025-01-05</td>
            <td>2025-01-02</td>
            <td>
              <img class="edit" alt="eidt">
              <img class="remove" alt="remove">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- modal 호출 -->
    <!-- closeModal은 modal페이지에서 닫는 걸 눌렀을때의 값을 받아서 닫기 이벤트를 활성화시킨다-->
    <PopupView v-if="isModalViwed" @closeModal="CloseModal"/>
  </div>
</template>

<script type="text/javascript" src="../js/MainView.js"></script>