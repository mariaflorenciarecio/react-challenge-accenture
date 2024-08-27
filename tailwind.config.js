module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'chivo': ['Chivo', 'sans-serif']
            },
            colors: {
                'white': '#FAFAFA',
                'purple': '#100217E5',
                'black': '#030B1C',
                'gray': '#E4E8EE',
            },
            fontWeight: {
                'normal': 400,
                'black': 900,
            },
            fontSize: {
                'tiny': '12px',
                'small': '14px',
                'medium': '16px',
                'large': '20px',
                'xlarge': '24px',
            },
            lineHeight: {
                'medium': '19px',
                'large': '24px',
                'xlarge': '28.5px',
            },
            boxShadow: {
                'navbar': '0px 3px 6px 0px #00000026',
            },
            variants: {
                fontWeight: ['responsive', 'hover', 'focus', 'active']
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')
    ],
}