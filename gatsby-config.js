module.exports = {
  plugins: [
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/work`
      }
    },
    {
      resolve:'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-85334980-1',
        head: false,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms'
  ]
};