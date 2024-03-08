/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/terminal/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
        'xs': '428px',
      },
    },
    extend: {
      backgroundImage: {
        singularity: "url('/brand/singularity.png')",
        "dot-pattern": "url('/pattern/dotted/lightAlt.svg')",
      },
    },
  },
  plugins: [],
}
