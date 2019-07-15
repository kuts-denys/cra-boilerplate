module.exports = {
  '*.{js,jsx,css}': ['prettier --write', 'git add'],
  '*.{js,jsx}': ['eslint --fix', 'git add'],
  '*.css': ['stylelint src/**/*.css --fix', 'git add'],
};
