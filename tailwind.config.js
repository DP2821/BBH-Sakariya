/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                saffron: {
                    light: '#FFB366',
                    DEFAULT: '#FF9933',
                    dark: '#CC7A00',
                },
                maroon: {
                    light: '#A00000',
                    DEFAULT: '#800000',
                    dark: '#600000',
                },
                gold: {
                    light: '#FFE44D',
                    DEFAULT: '#FFD700',
                    dark: '#CCAC00',
                },
                warm: {
                    50: '#FFF8F0',
                    100: '#FFF1E0',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
