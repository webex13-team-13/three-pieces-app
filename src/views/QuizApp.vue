<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ "ロシアの世界遺産に登録されるこの建物は何でしょう？" }}</h2>
    <img
      class="quiz-image"
      src="@/assets/quiz_image.jpg"
      alt="ロシアの世界遺産"
    />
    <div class="container">
      <button
        v-for="(choice, i) in choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
      >
        {{ choice.text }}
      </button>
    </div>
    <div>{{ kotae }}</div>
    <div v-if="nextPage">
      <router-link to="/quizApp2">次の問題へ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kotae: "",
      choices: [
        {
          text: "宮殿",
          isCorrect: false,
          kotae: "残念でした🤦‍♀️",
        },
        {
          text: "美術館",
          isCorrect: true,
          kotae: "正解！",
        },
        {
          text: "学校",
          isCorrect: false,
          kotae: "残念でした🤦‍♀️",
        },
      ],
      nextPage: false,
    }
  },
  methods: {
    choiced(choice) {
      this.kotae = choice.kotae
      if (choice.isCorrect) {
        this.nextPage = true
      } else {
        this.nextPage = false
      }
    },
  },
}
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 300px;
  padding: 1em;
  justify-content: space-around;
}
</style>
