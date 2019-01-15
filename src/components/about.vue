<template>
  <div class="hello">
    <h1>about me </h1>

    <p>純潔の沖縄人。</p>
    <p>2017年の2月ごろからコード書き始めましたひよっこです</p>

    <div>
      <p>{{msg}}</p>
    </div>

    <h2>link</h2>

    <p>twitter</p>
    <a href="https://www.google.co.jp/"  Target="_blank" >
      <img src="./../assets/Twitter_Logo_WhiteOnBlue.png" class="logo"/>
    </a>

    <p>GitHub</p>
    <a href="https://github.com/s17001" Target="_blank" >
      <img src="./../assets/GitHub-Mark-32px.png" class="logo"/>
    </a>




  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '沖縄で専門学生してます。javascriptが好き。メモ代わりにつぶやく事多いです。人間初見プレイ中。',
      img: 'https://pbs.twimg.com/profile_images/966496730387640320/EzKcwnJo_400x400.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo{
  width: 32px;
  height: 32px;
}
</style>
