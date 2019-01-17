<template>
  <div>
    <h1>僕がやったこととか</h1>
    <h2>LTしたやつ</h2>
    <ul>
      <li v-for="LT in LTList">
        {{LT}}
      </li>
    </ul>
    <h2>作ったもの</h2>
    <ul>
      <li v-for="making in Makinglist">
        {{making}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "sonota",
      data () {
          return {
            LTList : [1,2,3],
            Makinglist : [1,2,3]
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
