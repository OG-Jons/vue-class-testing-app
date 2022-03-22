module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    test: "readonly",
    expect: "readonly",
  },
  extends: [
    "plugin:@peeky/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  ignorePatterns: ["dist"],
};
