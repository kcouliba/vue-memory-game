<template>
  <div class="card">
    <img
      alt="alt name"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    alt: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card {
  flex: 0;
  border: 1px solid black;
  height: 60px;
  width: 40px;
  margin: 0.5em;
}

img {
  position: relative;
  left: -28px;
  top: -18px;
}
</style>
