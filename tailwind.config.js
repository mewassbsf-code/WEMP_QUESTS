export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wemp-pink': '#FF6B9D',
        'wemp-purple': '#C44569',
        'wemp-blue': '#667EEA',
        'wemp-dark': '#1A1A2E',
        'wemp-light': '#F7F7FF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
