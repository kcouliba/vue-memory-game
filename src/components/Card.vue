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
  height: 12em;
  width: 8em;
  margin: 0.5em;
  border-radius: 5px;
  box-shadow: 0.15em 0.15em rgba(93, 100, 93, 0.3);
}

.card:hover {
  box-shadow: 0.15em 0.15em rgba(204, 153, 14, 0.5);
}

div.card.selected {
  box-shadow: 0.2em 0.2em rgba(204, 153, 14, 0.7);
}

div.card.revealed {
  box-shadow: 0.2em 0.2em rgba(50, 200, 50, 0.3);
}

div.card.wrong {
  box-shadow: 0.2em 0.2em rgba(228, 45, 45, 0.8);
}

img {
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
</style>
