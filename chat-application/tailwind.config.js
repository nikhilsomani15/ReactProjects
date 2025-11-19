// /** @type {import('tailwindcss').Config} */
export default {
  important: true,  // NOW ALL TAILWIND CLASSES HAVE HIGH PRIORITY
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // IMPORTANT for Vite projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}