<template>
  <!--<div>オリジナルアプリ</div>-->
  <div class="view">
    <h1>無人島にひとつだけもっていくとしたら...？</h1>
    <!--<div>ランキングをここに表示できたらいいな。でもわからないな</div>-->
    <div>
      <ul>
        <li v-for="(idea, index) in ideas" v-bind:key="index">
          {{ idea.text }}
          <button v-on:click="sakuzyo">削除</button>
        </li>
      </ul>

      <!--選択肢形式にします-->
      <input
        type="radio"
        v-model="inputValue"
        name="only"
        value="ナイフ"
      />ナイフ
      <input type="radio" v-model="inputValue" name="only" value="水" />水
      <input type="radio" v-model="inputValue" name="only" value="ヘリ" />ヘリ
      <input
        type="radio"
        v-model="inputValue"
        name="only"
        value="スマホ"
      />スマホ
      <input
        type="radio"
        v-model="inputValue"
        name="only"
        value="ライター"
      />ライター
      <input type="radio" v-model="inputValue" name="only" value="図鑑" />図鑑
      <button v-on:click="toukou">投稿</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      ideas: [{ text: "ナイフ" }, { text: "ヘリコプター" }],
    }
  },
  methods: {
    //投稿
    toukou: function () {
      const idea = { text: this.inputValue }
      console.log(idea)
      this.ideas.push(idea)
      /*if (this.inputValue === "on") {
        const idea = { text: "ナイフ" }
        this.ideas.push(idea)
      } else if (this.inputValue === "on") {
        const idea = { text: "水" }
        this.ideas.push(idea)
      } else if (this.inputValue === "on") {
        const idea = { text: "ヘリ" }
        this.ideas.push(idea)
      } else if (this.inputValue === "on") {
        const idea = { text: "スマホ" }
        this.ideas.push(idea)
      } else if (this.inputValue === "on") {
        const idea = { text: "ライター" }
        this.ideas.push(idea)
      } else if (this.inputValue === "on") {
        const idea = { text: "図鑑" }
        this.ideas.push(idea)
      }*/

      this.inputValue = ""
    },
    //削除
    sakuzyo: function (index) {
      this.ideas.splice(index, 1)
    },
  },
}
</script>

<style scoped>
h1 {
  size: 10px;
}
.view {
  background-image: url(~@/assets/mujinto_image.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
