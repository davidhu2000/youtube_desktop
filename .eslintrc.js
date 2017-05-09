module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "comma-dangle": ["warn", "never"],
        "indent": ["warn", 2],
        "linebreak-style": ["warn","unix"],
        "semi": ["error", "always"],
        "no-unused-expressions": "warn",
        "no-useless-concat": "warn",
        "block-scoped-var": "error",
        "consistent-return": "error",
        "arrow-parens": ["error", "as-needed"],
        "jsx-a11y/img-has-alt": "off",
        "import/no-extraneous-dependencies": "off"
    }
};