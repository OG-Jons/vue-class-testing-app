#!/bin/bash

npm install --save-dev @typescript-eslint/eslint-plugin \
  typescript ts-node-dev \
  @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier

cat > .eslintrc.js <<EOF
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
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier/vue",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
  },
  "ignorePatterns": ["dist"],
};
EOF

cat > .prettierrc.js <<EOF
module.exports = {
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  trailingComma: "all"
};
EOF
