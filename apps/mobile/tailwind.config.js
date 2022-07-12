const base = require("../../tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./**/*.{js,ts,jsx,tsx}"],
};
