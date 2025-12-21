<script setup>
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Score from './components/Score.vue';
</script>

<template>
  <section class="nav-bar">
    <h1 class="logo">Запомни слово</h1>
    <Score :score="100" />
  </section>
  <sectoin class="game-grid"
    ><Card :number="1" english-word="unadmitted"
  /></sectoin>
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
