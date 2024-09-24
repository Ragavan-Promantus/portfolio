/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            cursor: {
                custom: 'url(images/icons8-cursor.png), default',
                // pointer: 'url(/src/images/r-letter.webp), pointer',
            },
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
            '6xl': '4.052rem',
        },
    },
    plugins: [],
}