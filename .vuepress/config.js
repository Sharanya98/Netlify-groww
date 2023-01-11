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
    'docs/*.md',
    'docs/**/*.md',
    '!amplify/**',
    '!tools/**'
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}
