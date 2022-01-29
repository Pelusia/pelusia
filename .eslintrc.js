module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: true,
        singleQuote: true,
        printWidth: 100,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        proseWrap: 'always',
        tabWidth: 2,
      },
    ],
  },
};
