/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Rohit Kadam | Software Developer`,
    author: `Rohit`,
    description: `Technically sophisiticated professional, armed with indepth knowledge and highly successful experience in SDLC, system architecture, test automation, service management, infrastructure support, application development and facilitating process improvement initiatives.Highly creative and multitalented Software Developer with verifiable success in producing quality software.`,
    siteUrl: `https://rohit-kadam.tech/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohit | Software Developer`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      },
    },
  ],
};
