/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Bebas Neue 
        bebasNeue: ['var(--font-bebasNeue)'],
        // Inter 
        inter: ['var(--font-inter)'],
        interExtraBold: ['var(--font-interExtraBold)']
      },
      colors: {
        body: '#ffffff',
        primary: '#EBA639',
        dark: '#1C1C1C',
        defDark: '#333131',
        lightGray: '#EBEBEB',
        btnBlack: '#2B2929'
      },
      dropShadow: {
        'sectionTitle': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
