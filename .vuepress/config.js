module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  themeConfig: {
    nav:[
      {text:'Home', link:'/'},
      {text:'categories', link:'/categories/'}
  ],
  },
  patterns: [
    
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}
