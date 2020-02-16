<template>
  <div class="board">
    <Card v-for="i in cardCount" v-bind:key="i" />
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Board",
  components: { Card },
  props: { cardCount: Number },
  created() {
    // we make sure we have an even count of cards
    this.cardCount = this.cardCount + (this.cardCount % 2);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.board {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  height: 30em;
  align-content: center;
  justify-content: center;
}
</style>
