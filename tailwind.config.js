/** @type {import('tailwindcss').Config} */
export const content = ["./public/**/*.html","./src/**/*.{html,js}"]
export const theme = {
  extend: {},
};
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: ['lemonade']
}

