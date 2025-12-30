/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // font-lobster
        lobster: ['Lobster'],
        // font-inter
        inter: ['Inter'],
        // expo-google-fonts kullanırken, static fontlar oldugu için ayrı tanımlama yapmak gerekir
        // font-sourgummy-thin
        'sourgummy-thin': ['SourGummy_100Thin'],
        // font-sourgummy-black
        'sourgummy-black': ['SourGummy_900Black'],
      },
    },
  },
  plugins: [],
};
