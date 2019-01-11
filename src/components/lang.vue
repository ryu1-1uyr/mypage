<template>
  <div class="hello">
    <h2>すこしわかり</h2>
    <ul>
      <li v-for="lang in SpecialtyLang">
        {{lang}}
      </li>
    </ul>
    <h2>微妙にわかり</h2>
    <ul>
      <li v-for="lang in UsuallyLang">
        {{lang}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'lang',
  data () {
    return {
      SpecialtyLang : ['日本語','JavaScript','Ruby','HTML5 CSS3'],
      UsuallyLang : ['うちなーぐち','PHP','Python3']

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
