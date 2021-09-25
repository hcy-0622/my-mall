module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  // plugins: [],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 自动推断返回值类型
    '@typescript-eslint/no-var-requires': 'off', // 允许require
    //   'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    //   'react/react-in-jsx-scope': 'off',
    //   'jsx-a11y/accessible-emoji': 'off',
    //   'react/prop-types': 'off',
    //   '@typescript-eslint/explicit-function-return-type': 'off',
    //   'simple-import-sort/imports': 'error',
    //   'simple-import-sort/exports': 'error',
    //   'jsx-a11y/anchor-is-valid': [
    //     'error',
    //     {
    //       components: ['Link'],
    //       specialLink: ['hrefLeft', 'hrefRight'],
    //       aspects: ['invalidHref', 'preferButton'],
    //     },
    //   ],
  },
}
