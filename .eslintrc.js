module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: "@babel/eslint-parser",
      requireConfigFile: false,
      sourceType: 'module',
      ecmaVersion: 2022,
      ecmaFeatures: {
        globalReturn: false,
        impliedStrict: false,
        jsx: false,
      },
    },
  };