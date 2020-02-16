<template>
  <div class="card" v-on:click="$emit('reveal')">
    <img v-if="revealed" v-bind:alt="card.alt" v-bind:src="card.src" />
    <img
      v-else
      alt="alt name"
      src="https://www.purpleeasel.com/wp-content/uploads/2018/09/Hidden-Crystals-yp3hr.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    revealed: Boolean,
    card: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card {
  flex: 0;
  border: 1px solid black;
  height: 90px;
  width: 60px;
  margin: 0.5em;
}

img {
  position: relative;
  width: inherit;
  height: inherit;
}
</style>
