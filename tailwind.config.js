const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            blue: colors.sky,
            yellow: colors.amber,
            black: colors.black,
            green: colors.green,
        },
        height: {
            sm: '5rem',
            xl: '100vh'
        },
    },
    variants: {
        extend: {
            visibility: ['hover'],
        },
    },
    plugins: [],
};
