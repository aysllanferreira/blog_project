module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {

  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
