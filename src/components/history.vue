<template>
  <div>
    <h1>僕がやったこととか</h1>
    <h2>LTしたやつ</h2>
    <ul>
      <li v-for="LT in LTList">
        <a :href="LT.url">{{LT.titel}}</a>
      </li>
    </ul>
    <p>スライドだいたいここにあります</p>
    <iframe src="https://www.slideshare.net/iharyuuicih/slideshelf" width="615px" height="470px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:none;" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
    <h2>作ったもの</h2>
    <ul>
      <li v-for="making in Makinglist">
        <a :href="making.url">{{making.titel}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "sonota",
      data () {
          return {
            LTList : [
              { url:"https://re-build.connpass.com/event/114928/",titel:"沖縄 ×宮崎 × 秋田 × 福岡 × 山形 × 大阪 JSやらNight"},
              { url:"https://ginowan.connpass.com/event/114092/",titel:"沖縄・宜野湾エンジニア勉強会 #6 in ギークハウス沖縄"},
              { url:"https://codebase.connpass.com/event/83345/",titel:"エンジニア脳動会 -LTやろうぜ！NIGHT vol.1-"}
      ],
            Makinglist : [
              { url:"https://s17001.github.io/vuePokeDex/dist/#/",titel:"ポケモン図鑑(Vue)"},
              { url:"https://github.com/s17001/reactapp/tree/master/apiapp2",titel:"ポケモン図鑑(React)"},

            ]
          }
    },
    }
</script>

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
