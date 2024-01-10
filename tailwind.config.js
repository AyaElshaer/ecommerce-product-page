/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl":
          "0 10px 5px 5px hsl(25, 100%, 94%), 0 4px 6px -4px hsl(25, 100%, 94%)",
      },
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
      gray: "#eee",
      black: "#000",
      "slide-background" : 'rgb(0 0 0 / 75%)'
    },
  },
  plugins: [],
};

