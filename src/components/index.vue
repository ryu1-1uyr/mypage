<template>
  <div class="hello">
    <p>{{msg}}</p>
    <img :src=img />
  </div>
</template>

<script>
export default {
  name: 'index',
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
</style>
