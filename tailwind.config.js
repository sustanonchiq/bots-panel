/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '1w': '100px',
                '2w': '200px',
                '3w': '300px',
                '4w': '400px',
                '5w': '500px',
                '6w': '600px',
                '1/2w': '50px',
            },

            colors: {
                primary: '#24A1DE',
                'primary-dark': '#2086EA',
            },
        },
    },
    plugins: [],
};
