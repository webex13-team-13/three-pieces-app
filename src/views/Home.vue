<template>
  <h1>Home</h1>
  <div class="about">
    <nav class="about__wrapper">
      アプリ一覧
      <ul>
        <li>
          <router-link to="/original">オリジナルアプリ</router-link>
        </li>
        <br />
        <li><router-link to="/palette">パレット</router-link></li>
        <br />
        <li>
          <router-link to="/memo">メモ</router-link>
        </li>
        <li>
          <router-link to="/quiz">クイズ</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style>
li {
  justify-content: center;
  align-items: center;
}
.about {
  font-size: 20px;
  background-color: #42b983;
  padding: 3rem;
  align-items: center;
}
.about__wrapper {
  display: inline-block;
  background-color: #f2f7f5;
  width: 100%;
}
</style>
