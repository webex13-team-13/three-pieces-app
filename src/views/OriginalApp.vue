<template>
  <!--<div>オリジナルアプリ</div>-->
  <div class="view">
    <br />
    <Marquee width="900" behavior="alternate" scrollamount="4"
      ><h1>無人島にひとつだけもっていくとしたら...？</h1></Marquee
    >
    <!--<div>ランキングをここに表示できたらいいな。でもわからないな</div>-->
    <div class="about">
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
  font-family: 游ゴシック;
  color: dimgray;
  size: 10px;
  text-align: center;
}
.about {
  background-color: white;
  color: black;
  opacity: 0.6;
  position: absolute;
  top: 80%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.view {
  background-image: url(~@/assets/mujinto_image.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: white;
}
</style>
