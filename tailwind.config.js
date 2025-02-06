/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Define Poppins as the default font
        },
      },
    },
    plugins: [],
  };

