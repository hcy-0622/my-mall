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
    'react/react-in-jsx-scope': 'off', // React 17 不必显式导入

    'jsx-a11y/no-static-element-interactions': 'off', // 忽略静态元素处理事件
    'jsx-a11y/click-events-have-key-events': 'off', // 忽略监听事件需要绑定 key 值
  },
}
