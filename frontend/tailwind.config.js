/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prymary: "#1E3A8A",
        heroPattern: "#FFBC8F8F", //el azul exacto de tu diseño
      },
      backgroundImage: {
           // Ruta de la imagen en public/
      },
    },
  },
  plugins: [],
}

