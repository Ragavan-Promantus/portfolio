/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            cursor: {
                'fancy': 'url(./images/cursor1.png), default',
                'pointer': 'url(./images/cursor-pointer.png), pointer',
            }
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