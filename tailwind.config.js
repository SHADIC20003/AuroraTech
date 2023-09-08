/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                merriWeather: ['Merriweather', 'serif'],
            },

            colors: {
                primary: '#EBECEE',
                nav: 'rgba(0, 51, 36, 0.79)',
                'nav-text': '#9FA3AA',
                'dark-green': '#003324',
                'side-bar-text': '#046045',
                'service-header': '#046045',
                'service-text': '#038761',
                'contact-bg': '#CBFFF0',
                'contact-header': '#322448',
                'contact-text': '#6C3B83',
                'contact-btn': '#CBFFF0',
            },
            backgroundImage: {
                'main-bg': "url('/main-bg.png')",
            },
            screens: {
                '3xl': { min: '1780px' },
            },
        },
    },
    plugins: [],
}
