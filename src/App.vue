<template>
  <div id="app">
    <a href="/mypage/dist/#/">top</a>
    <a href="/mypage/dist/#/about">about</a>
    <a href="/mypage/dist/#/lang">lang</a>
    <a href="/mypage/dist/#/history">history</a>

    <router-view v-cloak />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a {
    text-decoration: none;
    color: rgba(53,53,53,0.97);
  }
  a:hover {
    color: rgba(65,67,187,0.97);
  }
  [v-cloak] {
    animation: showComponents 0.5s easa 0.2s forwards;
  }

  @keyframes showComponents {
    from  {opacity: 0}
    to    {opacity: 1}
  }

</style>
