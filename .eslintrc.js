module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/recommended', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
      },
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],

  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript'
  ]
}
