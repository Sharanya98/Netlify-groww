module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  themeConfig: {

  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}