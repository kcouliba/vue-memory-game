<template>
  <div class="board" v-show="ready">
    <Card
      v-for="(card, i) in cards"
      v-bind:card="card"
      v-bind:key="i"
      v-bind:revealed="card.revealed"
      v-on:reveal="revealCard(i)"
    />
  </div>
</template>

<script>
import Card from "./Card";

async function createCards(count) {
  const images = await fetch(`https://pokeapi.co/api/v2/pokemon/${2}/`)
    .then(res => res.json())
    .then(res => {
      return [res?.sprites?.front_default];
    })
    .catch(e => {
      console.error(e);
      return [];
    });
  const cards = images.reduce((acc, image) => {
    return acc.concat(
      {
        alt: "card image",
        src: image,
        revealed: false
      },
      {
        alt: "card image",
        src: image,
        revealed: false
      }
    );
  }, []);
  // new Array(this.cardCount + (this.cardCount % 2));

  console.log("created cards", cards, count);

  return cards;
}

export default {
  name: "Board",
  components: { Card },
  props: { cardCount: Number },
  data() {
    return { ready: false, cards: [], guess: [] };
  },
  async created() {
    // we make sure we have an even count of cards
    const cards = await createCards(this.cardCount + (this.cardCount % 2));

    this.cards = cards;
    this.ready = true;
  },
  methods: {
    revealCard: function(i) {
      if (this.guess.length < 2) {
        this.cards[i].revealed = true;
        this.guess.push(i);
      }
      if (this.guess.length === 2) {
        setTimeout(() => {
          this.validateGuess();
        }, 1000);
      }
    },
    isCardRevealed: function(i) {
      return this.cards[i].revealed;
    },
    validateGuess: function() {
      const cardA = this.cards[this.guess[0]];
      const cardB = this.cards[this.guess[1]];

      if (cardA?.src !== cardB?.src) {
        cardA.revealed = false;
        cardB.revealed = false;
      }
      this.guess = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.board {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>
