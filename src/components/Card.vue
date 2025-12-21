<script setup>
const { number, englishWord } = defineProps({
  number: Number,
  englishWord: String,
});

const numberToString = (number) => {
  if (number < 0) return;
  if (number < 10) return `0${number}`;

  return `${number}`;
};
</script>

<template>
  <div class="card-body">
    <div class="card-body__inner">
      <div class="card-number">{{ numberToString(number) }}</div>
      <div class="card-word">{{ englishWord }}</div>
      <button class="card-button">перевернуть</button>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  width: 250px;
  height: 376px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 16px 0px #0000001a;
}

.card-body:hover {
  box-shadow: 10px 10px 6px #0000001a;
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
}

.card-number {
  position: absolute;
  top: 0;
  left: 20px;
  background: white;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  transform: translateY(
    -50%
  ); /* чтобы центрировать по вертикали относительно верхней границы */
  z-index: 1;
}

.card-word {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}

.card-button {
  position: absolute;
  top: 319px;
  margin-left: auto;
  margin-right: auto;
  background: white;

  font-size: 12px;
  font-weight: 700;
  font-style: bold;
  letter-spacing: 12%;
  text-transform: uppercase;
  border: none;

  transform: translateY(
    -50%
  ); /* чтобы центрировать по вертикали относительно верхней границы */
  z-index: 1;
}

.card-button:hover {
  color: var(--color-bg-button);
}
</style>
