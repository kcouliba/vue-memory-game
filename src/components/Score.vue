<template>
  <div class="score">
    <p>{{score}}</p>
  </div>
</template>

<script>
export default {
  name: "Score",
  props: {
    score: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
