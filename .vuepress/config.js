module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  // dest: 'dist',
  // public: 'public',
  themeConfig: {
    nav:[
      {text:'Home', link:'/'},
      {text:'categories', link:'/categories/'}
  ],
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
  }
  }
}
