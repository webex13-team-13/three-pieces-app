<template>
  <h1>Vue メモ</h1>
  <div class="memo-list">
    <ul class="memo-list__container">
      <li
        class="memo"
        v-for="(memoNakami, index) in memoNakamis"
        v-bind:key="memoNakami"
      >
        <div class="memo__checkbox">
          <input type="checkbox" v-model="memoNakami.isDone" />
          <!--v-model="memo.isDone" -->
        </div>
        <div class="memo__text memo__text--done" v-if="memoNakami.isDone">
          {{ memoNakami.text }}
        </div>
        <div class="memo__text" v-else>
          {{ memoNakami.text }}
        </div>
        <!--<div class="memo__text">
          {{ memoNakami.text }}
        </div>-->
        <button class="memo__delete" v-on:click="deleteMemo(index)">
          削除
        </button>
      </li>
    </ul>
    <div class="add-memo-field">
      <input class="add-memo-field__input" type="text" v-model="inputValue" />
      <button class="add-memo-field__button" v-on:click="addMemo">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      memoNakamis: [
        { text: "ひき肉を300g買う", isDone: false },
        {
          text: "ホウレンソウを1束買う",
          isDone: false,
        },
        { text: "ピーマンを2個買う", isDone: false },
      ],
    }
  },
  methods: {
    //イベントハンドラを入れる.１配列。２削除、３チェックボックス

    addMemo: function () {
      if (this.inputValue !== "") {
        const memo = {
          text: this.inputValue,
          isDone: false,
        }
        this.memoNakamis.push(memo)
        //alert("やっほho～")
        this.inputValue = ""
      }
    },
    deleteMemo(index) {
      //alert("huhu")
      this.memoNakamis.splice(index, 1)
      //alert("やっほほ")
    },
    /*
    createCard1: function () {
      document.createElement("div")
      this.createCard.className = "memo__checkbox"
      alert("a")
    },*/
  },
}
/*const create = function () {}*/
</script>

<style scoped>
.memo-list {
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;
}

.memo-list__container {
  padding: 0;
}

.memo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
}

.memo:hover {
  color: white;
  background-color: #b23b61;
}

.memo__text {
  margin-left: 2rem;
  text-align: left;
}

.memo__text--done {
  text-decoration-line: line-through;
}

.memo__delete {
  margin-left: 1rem;
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.memo__delete:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}

.add-memo-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-memo-field__input {
  padding: 10px;
}
.add-memo-field__button {
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.add-memo-field__button:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}
</style>
