<template>
  <div id="footer">
    <span>Written by {this.author}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "qqxhb"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  margin: 40px;
  text-align: center;
  color: #eee;
  font-size: 15px;
  text-shadow: 0 3px 0 2px #eee;
}
</style>
