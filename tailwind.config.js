 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "380px",
      md: "580px",
      lg: "768px",
      xl: "1180px"
    },
    backgroundImage: {
      'hero': "url('assets/img/background.png')",
       blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
       'hero-green': 'linear-gradient(to bottom, rgba(33, 78, 7, 1), rgba(13, 25, 6, 1))'
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "4px",
        md: "32px"
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Pixelify: ["Pixelify Sans", "sans-serif"],
      Born: ["Born2bSportyFS", "sans-serif"]
    },
  },
  plugins: [],
}