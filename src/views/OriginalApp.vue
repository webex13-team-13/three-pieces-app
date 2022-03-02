<template>
  <div>オリジナルアプリ</div>
  <h1>無人島にひとつだけもっていくとしたら...の投稿アプリ</h1>
  <div>ランキングをここに表示できたらいいな。でもわからないな</div>
  <div>
    <ul>
      <li v-for="(idea, index) in ideas" v-bind:key="index">
        {{ idea.text }}
        <button v-on:click="sakuzyo">削除</button>
      </li>
    </ul>
  </div>
  <!--選択肢形式にします-->
  <input type="radio" v-model="inputValue" name="only" />ナイフ
  <input type="radio" v-model="inputValue1" name="only" />水
  <input type="radio" v-model="inputValue2" name="only" />ヘリ
  <input type="radio" v-model="inputValue3" name="only" />スマホ
  <input type="radio" v-model="inputValue4" name="only" />ライター
  <input type="radio" v-model="inputValue5" name="only" />図鑑
  <button v-on:click="toukou">投稿</button>
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
      if (this.inputValue === "on") {
        const idea = { text: "ナイフ" }
        this.ideas.push(idea)
      } else if (this.inputValue1 === "on") {
        const idea = { text: "水" }
        this.ideas.push(idea)
      } else if (this.inputValue2 === "on") {
        const idea = { text: "ヘリ" }
        this.ideas.push(idea)
      } else if (this.inputValue3 === "on") {
        const idea = { text: "スマホ" }
        this.ideas.push(idea)
      } else if (this.inputValue4 === "on") {
        const idea = { text: "ライター" }
        this.ideas.push(idea)
      } else if (this.inputValue5 === "on") {
        const idea = { text: "図鑑" }
        this.ideas.push(idea)
      }

      this.inputValue = ""
    },
    //削除
    sakuzyo: function (index) {
      this.ideas.splice(index, 1)
    },
  },
}
</script>

<style></style>
