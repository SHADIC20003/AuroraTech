import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                slab: ['var(--font-roboto-slab)'],
                sans: ['var(--font-open-sans)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'border-gradient':
                    'linear-gradient(to bottom, #359976, #000A15 80%, #000A15)',
                'background-gradient':
                    'linear-gradient(90deg, rgba(86, 124, 196, 0.20) 0%, rgba(142, 216, 190, 0.20) 54%, rgba(147, 121, 188, 0.20) 86.5%, rgba(167, 58, 96, 0.20) 99%)',
            },
            colors: {
                blue: '#000A15',
                'blue-secondary': '#000F20',
                gray: {
                    100: '#B2B5B9',
                    300: '#666C73',
                    500: '#333B44',
                    muted: 'rgba(178, 181, 185, 0.50)',
                },
                green: {
                    300: '#359976',
                    500: '#22604B',
                },
                White: '#ECF8F4',
            },

            boxShadow: {
                card: '6px 6px 15px 0px #000A15',
            },
            animation: {
                scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
                'fade-in': 'fade-in 0.5s ease-in-out',
                'slide-in': 'slide-in 0.5s ease-out',
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'slide-in': {
                    from: { transform: 'translateX(-100px)', opacity: '0' },
                    to: { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
export default config
