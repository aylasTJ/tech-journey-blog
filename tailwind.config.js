/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: ["light", 
            "dark",
            {
                "fantasy":{
                    "primary": "#f5f1e8",
                    "base-100": "#101114",
                    "accent": "#2563e6",
                    "neutral": "#c7c9c7",
                    "secondary": "#2fb344",
                },
            },

        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite'
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui").default],
}
