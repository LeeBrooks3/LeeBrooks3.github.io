const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["**/*.{jsx,tsx}"],
    theme: {
        fontFamily: {
            body: "Inter",
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
