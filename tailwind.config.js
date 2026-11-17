/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        riet: {
          navy: '#0c2340',
          'navy-dark': '#071629',
          'navy-light': '#14355d',
          blue: '#1a64b3',
          'blue-light': '#eaf2fa',
          gold: '#f5a623',
          'gold-hover': '#e09210',
          'gold-light': '#fef7eb',
          ink: '#1c2d42',
          muted: '#62778f',
          paper: '#f6f9fc',
          line: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(12, 35, 64, 0.06)',
        'lift': '0 12px 30px rgba(12, 35, 64, 0.12)',
      }
    },
  },
  plugins: [],
}
