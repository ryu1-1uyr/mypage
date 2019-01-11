<template>
  <div class="hello">
    <h1>about me </h1>

    <p>純潔の沖縄人。</p>
    <p>2017年の2月ごろからコード書き始めましたひよっこです</p>

    <h2>link</h2>

    <p>twitter</p>
    <a href="https://www.google.co.jp/"  Target="_blank">
      <img src="./../assets/logo.png" />
    </a>

    <p>GitHub</p>
    <a href="">
      <img src="" alt="">
    </a>

    <h3>LTとかした勉強会</h3>



  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'about'
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
