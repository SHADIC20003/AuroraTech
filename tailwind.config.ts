import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
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
export default config
