<template>
  <div>
    <h2>LTしたやつ</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <h2>作ったもの</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "sonota"
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
