<script></script>
<template>
  <button class="button">
    <slot />
  </button>
</template>
<style scoped>
  .button {
    background: var(--color-bg-button);
    border: none;
    border-radius: 30px;
    padding: 16px 10px;
    width: 335px;

    color: var(--font-button-color);
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0%;
  }
</style>