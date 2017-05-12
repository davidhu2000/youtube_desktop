module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
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
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "quotes": "off",
        "no-underscore-dangle": "off",
        "indent": [2, 2, {"SwitchCase": 1}],
        "no-console": "off", // TODO: remove during production,
        "no-case-declarations": "off",
        "prefer-const": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "jsx-quotes": "off",
        "react/prop-types": [2, { ignore: ['location', 'router', 'children']}],
        "import/prefer-default-export": "off",
        "consistent-return": "off",
        "no-else-return": "off",
        "class-methods-use-this": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/no-danger": "off"
    }
};