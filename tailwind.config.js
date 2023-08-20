/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontFamily: {
        BeVietnamPro: "BeVietnamPro"
      },
      extend: {
        colors: {
          grey: "#e5e5dc",
          glass: "rgba(255,255,255,0.45)",
          transparentBlack : "rgba(0,0,0,0.7)",
          bgbtn:"#344e41",
          borderColor:'#588157',
          ince:'#a3b18a',
          totalCard:'#3a5a40'
        }
      },
      screens: {
        ss: "480px",
        sm: "600px",
        md: "768px",
        lg: "1099px"
      },
    },
    plugins: [require("daisyui")],
  };