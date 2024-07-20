/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        'z-0': '0',
        'z-1': '1px',
        'z-2': '2px',
        'z-4': '4px',
        'z-8': '8px',
        'z-16': '16px',
        'z-32': '32px',
        'z-64': '64px',
      },
    },
  },
  plugins: [],
}
