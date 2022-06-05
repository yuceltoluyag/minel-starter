module.exports = {
  plugins: {
    'postcss-import': './postcss.config.cjs',
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: './tailwind.config.cjs',
    autoprefixer: {},
  },
}
