<template>
  <div class="app">
    <h2>Q2 福岡県のこのゆるキャラ？</h2>
    <img class="quiz-image" src="@/assets/quiz2_image.jpg" alt="ゆるキャラ" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      kotae: "",
      choices: [
        {
          text: "聖徳明太子",
          isCorrect: true,
          kotae: "正解！",
        },
        {
          text: "福王子",
          isCorrect: false,
          kotae: "残念でした🤦‍♀️",
        },
        {
          text: "明太子伯爵",
          isCorrect: false,
          kotae: "残念でした🤦‍♀️",
        },
      ],
    }
  },
  methods: {
    choiced(choice) {
      this.kotae = choice.kotae
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
