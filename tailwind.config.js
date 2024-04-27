/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        accent: "#183D3D",
        "accent-shade": "#0D2323",
        neutral: "#A7D397",
      },
      colors: {
        accent: "#2F2F2F",
        "accent-tint": "#646464",
        "accent-primary": "#183D3D",
        "accent-secondary": "#A7D397",
        neutral: "#fff",
        "neutral-tint": "#F3F3F3",
      },
      borderColor: {
        accent: "#183D3D",
        neutral: "#A7D397",
      },
      padding: {
        normal: "12px 24px",
      },
      borderRadius: {
        xl: "8px",
      },
    },
  },
  plugins: [],
};
