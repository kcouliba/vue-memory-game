<template>
  <div id="app">
    <h1>Memory</h1>
    <Board v-bind:cardCount="cardCount" />
  </div>
</template>

<script>
import Board from "./components/Board";

const cardCount = 24;

export default {
  name: "App",
  components: { Board },
  data() {
    return { cardCount };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 10em;
}

@media only screen and (max-width: 768px) {
  /* For smaller screens: */
  #app {
    margin: 1em;
  }
}
</style>
