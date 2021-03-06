module.exports = {
  siteMetadata: {
    title: 'IBM Edge Application Manager Trial Experience',
    description: 'DemoHub for IBM Edge Application Manager Trial',
    keywords: 'ibm,edge,ieam,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.com/ibm-garage-tsa/edge-demohub',
      subDirectory: '/',
      branch: 'main'
    },
  },
}
],
pathPrefix: "/edge-demohub",
};
