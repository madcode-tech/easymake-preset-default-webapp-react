module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: 'eslint:recommended',
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2
  },
  plugins: ['react']
};
