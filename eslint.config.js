import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js, vue },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: ['js/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      'prettier/prettier': 'error', // ошибки Prettier отображаются как ошибки ESLint
      'no-console': 'off', // если Prettier и ESLint конфликтуют по этому правилу
    },
  },
];
