<script setup>
import IconHeart from './icons/IconHeart.vue';

const { score = 0 } = defineProps({ score: Number });
</script>

<template>
  <div class="score">
    {{ score }}
    <IconHeart />
  </div>
</template>

<style scoped>
.score {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: auto;
  gap: 10px;

  background-color: #cce8ff;
  border-radius: 36px;
  padding: 12px 24px;
  width: 110px;
}
</style>
