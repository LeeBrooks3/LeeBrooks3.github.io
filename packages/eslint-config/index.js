module.exports = {
    extends: ["next", "turbo", "prettier"],
    plugins: ["prettier", "simple-import-sort"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                printWidth: 120,
            },
        ],
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
