module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * vue/max-attributes-per-line conflicts with prettier
     * https://github.com/prettier/eslint-plugin-prettier/issues/94#issuecomment-438781791
     */
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
