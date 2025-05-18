/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // добавь эту строку, если у тебя есть папка app
    "./pages/**/*.{js,ts,jsx,tsx}", // для страниц (если есть)
    "./components/**/*.{js,ts,jsx,tsx}", // для компонентов
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
