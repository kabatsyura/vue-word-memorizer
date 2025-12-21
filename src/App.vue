<script setup>
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Score from './components/Score.vue';
import { ref } from 'vue';

const score = ref(0);
const data = ref({
  word: 'unadmitted',
  translation: 'тайный',
  state: 'closed',
  status: 'fail',
});
</script>

<template>
  <section class="nav-bar">
    <h1 class="logo">Запомни слово</h1>
    <Score :score="score" />
  </section>
  <section class="game-grid">
    <Card :number="1" v-bind="data" />
  </section>
  <section class="start-game">
    <Button>Начать игру</Button>
  </section>
</template>

<style scoped>
.start-game {
  margin: 0 auto;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
