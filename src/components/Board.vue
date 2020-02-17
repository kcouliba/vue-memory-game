<template>
  <div>
    <div v-if="gameEnded">
      <h2>Congratulations !!!</h2>
      <p>Score {{score}}</p>
      <p>Failed {{failCounter}}</p>
      <button v-on:click="resetGame()">New game</button>
    </div>
    <div v-if="!gameEnded">
      <p>Score {{score}}</p>
      <p>Failed {{failCounter}}</p>
      <button v-on:click="resetGame()">Reset</button>
    </div>
    <div class="board" v-show="ready">
      <Card
        v-for="(card, i) in cards"
        v-bind:card="card"
        v-bind:key="card.id"
        v-bind:revealed="card.revealed"
        v-bind:class="{selected: isCardSelected(i), revealed: isCardRevealed(i), wrong: isWrongGuess(i)}"
        v-on:reveal="revealCard(i)"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { getDogImages } from "../api";
import { shuffle } from "../utils/array";

async function createCards(count) {
  const images = await getDogImages(count / 2);
  const cards = images.reduce((acc, image) => {
    return acc.concat(
      {
        id: --count,
        alt: "card image",
        src: image,
        revealed: false
      },
      {
        id: --count,
        alt: "card image",
        src: image,
        revealed: false
      }
    );
  }, []);

  return shuffle(cards);
}
const SCORE_GUESS = 10;
let multiplier = 1;

export default {
  name: "Board",
  components: { Card },
  props: { cardCount: Number },
  data() {
    return {
      ready: false,
      error: false,
      cards: [],
      guess: [],
      failCounter: 0,
      score: 0
    };
  },
  async created() {
    try {
      this.initGame();
    } catch (error) {
      this.error = true;
    }
  },
  computed: {
    gameEnded: function() {
      return (
        this.guess.length === 0 &&
        this.cards.every(card => card.revealed === true)
      );
    }
  },
  methods: {
    async initGame() {
      // we make sure we have an even count of cards
      const cards = await createCards(this.cardCount + (this.cardCount % 2));

      this.cards = cards;
      this.ready = true;
    },
    async resetGame() {
      this.resetData();
      try {
        this.initGame();
      } catch (error) {
        this.error = true;
      }
    },
    resetData() {
      this.ready = false;
      this.error = false;
      this.cards = [];
      this.guess = [];
      this.failCounter = 0;
    },
    revealCard: function(i) {
      if (this.guess.length === 2 || this.cards[i].revealed) return;
      this.cards[i].revealed = true;
      this.guess.push(i);
      this.guess.length === 2 && this.validateGuess();
    },
    isCardSelected: function(i) {
      return this.guess.includes(i);
    },
    isCardRevealed: function(i) {
      return this.cards[i].revealed && !this.isCardSelected(i);
    },
    isWrongGuess: function(i) {
      return this.guess.length === 2 && this.isCardSelected(i);
    },
    giveFeedback: function(positive) {
      return new Promise(resolve => {
        setTimeout(() => resolve(), positive ? 0 : 1000);
      });
    },
    validateGuess: async function() {
      const cardA = this.cards[this.guess[0]];
      const cardB = this.cards[this.guess[1]];
      const goodGuess = cardA?.src === cardB?.src;

      await this.giveFeedback(goodGuess);
      if (!goodGuess) {
        cardA.revealed = false;
        cardB.revealed = false;
        this.failCounter++;
        multiplier = 1;
      } else {
        this.score += Math.floor(SCORE_GUESS * multiplier);
        multiplier *= 1.2;
        multiplier = multiplier > 2 ? 2 : multiplier;
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
