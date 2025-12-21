<script setup>
import { ref } from 'vue';

const { number, word, translation, state, status } = defineProps({
  number: Number,
  word: String,
  translation: String,
  state: String,
  status: String,
});

const isFlipped = ref(false);

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value;
};

const numberToString = (number) => {
  if (number < 0) return;
  if (number < 10) return `0${number}`;

  return `${number}`;
};
</script>

<template>
  <div class="card-body">
    <div class="card-body__inner" :class="{ flipped: isFlipped }">
      <div class="card-number">{{ numberToString(number) }}</div>
      <div class="card-word front">{{ word }}</div>
      <div class="card-word back">{{ translation }}</div>
      <button class="card-button" @click="toggleFlip">перевернуть</button>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  width: 250px;
  height: 376px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px #0000001a;
  perspective: 1000px; /* Важен для 3D эффекта */
}

.card-body:hover {
  box-shadow: 10px 10px 16px #0000001a;
}

.card-body__inner {
  position: relative;
  width: 212px;
  height: 320px;
  top: 28px;
  left: 19px;
  border: 1px solid #cce8ff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  box-sizing: border-box;

  /* Не применяется поворот к общему контейнеру */
  transform-style: preserve-3d;
}

/* Элементы, содержащие слово (только они будут переворачиваться) */
.card-word {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backface-visibility: hidden; /* Скрывает противоположную сторону при повороте */
  width: 80%;
  transition: transform 0.6s; /* Применяется только к словам */
}

.card-word.front {
  z-index: 2;
}

/* Обратная сторона */
.card-word.back {
  transform: translate(-50%, -50%) rotateY(180deg); /* Изначальное расположение назад */
  z-index: 1;
}

/* Поворачиваются только слова */
.card-body__inner.flipped .card-word.front {
  transform: translate(-50%, -50%) rotateY(180deg);
}

.card-body__inner.flipped .card-word.back {
  transform: translate(-50%, -50%);
}

/* Оставляем позицию кнопки и номера стабильной */
.card-number {
  position: absolute;
  top: 0;
  left: 20px;
  background: #fff;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  transform: translateY(-50%);
  padding: 0 8px;
  z-index: 2;
}

/* Кнопка переворота */
.card-button {
  position: absolute;
  top: 307px;
  left: 50%;
  transform: translateX(-50%);
  background: white;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 12%;
  text-transform: uppercase;

  border: none;
  cursor: pointer;

  padding: 6px 12px;
  transition: color 0.3s;
  z-index: 3;
}

.card-button:hover {
  color: var(--color-bg-button);
}
</style>
