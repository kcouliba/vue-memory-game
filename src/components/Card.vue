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
  height: 120px;
  width: 80px;
  margin: 0.5em;
  border-radius: 5px;
  box-shadow: 0.2em 0.2em rgba(50, 200, 50, 0.3);
}

div.card:hover {
  box-shadow: 0.2em 0.2em rgba(50, 200, 50, 0.5);
}

img {
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
</style>
