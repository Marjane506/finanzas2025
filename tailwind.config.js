const { plugin } = require("postcss");

//**@type {import('tailwindcss).Config} */
module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/*.js"],
    theme: {
        extend: {},
    },
    plugin: [],
};
