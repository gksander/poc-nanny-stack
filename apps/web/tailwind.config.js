const base = require("../../tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
};
