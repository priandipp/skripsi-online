module.exports = {
    extends: ["airbnb","prettier", "prettier/react"],
    rules: {
        "react/jsx-filename-extension": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/prop-types":0,
        "jsx-a11y/href-no-hash": 0,
        "react/no-string-refs": 0,
        "no-restricted-syntax": 0,
        "guard-for-in": 0,
        "react/no-array-index-key": 0,
    },
    globals: {
        document: 1
    },
    parser: "babel-eslint",
    env:{
        browser:1
    }
};
