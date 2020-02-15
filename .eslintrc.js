module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "airbnb-base"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
    "import/extensions": [2, {
      "js": "never",
      "ts": "never",
      "json": "never"
    }],
  }
};
