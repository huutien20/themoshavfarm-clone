const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './pages/**/*.{html,js}', './components/**/*.{html,js}'],
    theme: {
        screens: {
            sm: '550px',
            md: '848px',
            lg: '1170px',
        },

        extend: {
            colors: {
                primary: '#25602a',
                primary_hover: '#669100',
                secondary: '#ffce02',
                secondary_hover: '#d7ad00',
                text: '#7d7d7d',
                text_primary: '#606060',
            },
            // fontSize: {
            //     heading: { fontSize: '48px', lineHeight: '77px' },
            // },
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                averta: ['AvertaStdCY', 'sans-serif'],
            },
            keyframes: {
                ring: {
                    '0%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '10%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '20%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '30%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '40%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '50%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '100%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                },
                zoomPhone: {
                    '0%': { transform: 'scale(.9)', boxShadow: '0 0 0 0 rgba(230, 8, 8, 0.7)' },
                    '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(230, 8, 8, 0)' },
                    '100%': { transform: 'scale(.9)', boxShadow: '0 0 0 0 rgba(230, 8, 8, 0)' },
                },
                zoomZalo: {
                    '0%': { transform: 'scale(.9)', boxShadow: '0 0 0 0 rgba(33, 150, 243, 0.7)' },
                    '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(33, 150, 243, 0)' },
                    '100%': { transform: 'scale(.9)', boxShadow: '0 0 0 0 rgba(33, 150, 243, 0)' },
                },
            },
            animation: {
                ring: 'ring 1s ease-in-out infinite',
                zoomPhone: 'zoomPhone 1.3s infinite',
                zoomZalo: 'zoomZalo 1.3s infinite',
            },
        },
    },
    plugins: [],
};
