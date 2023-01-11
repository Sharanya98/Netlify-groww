module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  themeConfig: {
    navbar: false
  },
  patterns: [
    'docs/*.md',
    'docs/**/*.md',
    '.vupress/**/*.vue',
    '!amplify/**',
    '!tools/**'
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  },
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',

  themeConfig: {
      nav:[
          {text:'Home', link:'/'},
          {text:'categories', link:'/categories/'}
      ],
  }
}
