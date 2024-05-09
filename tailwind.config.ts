/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffafc3', // Pink
        secondary: '#0a192f',// Midnight Blue
        background: '#f4f4f4', // Light Gray
        text: '#333333', // Dark Gray
        accent: '#fb4a5f', // Coral Pink
      },
    },
  }
  ,plugins: [
    require('tailwind-scrollbar')
  ],
}