/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#fff4ed', 100: '#ffebd5', 200: '#ffd3ab', 300: '#ffb57a',
                    400: '#ff8c3d', 500: '#ff6a0a', 600: '#ef5100', 700: '#c63b02',
                    800: '#9d2f0a', 900: '#7e290c',
                }
            }
        }
    },
    plugins: [],
}