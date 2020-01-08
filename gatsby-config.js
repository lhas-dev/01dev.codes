module.exports = {
  siteMetadata: {
    title: `01dev`,
    description: `Blog sobre tecnologia, programação, desenvolvimento, front-end, back-end.`,
    author: `@lhas`,
    siteUrl: `https://01dev.codes`,
    social: {
      instagram: `lhas01dev`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://codes.us7.list-manage.com/subscribe/post?u=74d8632f3fac9f0b6c0d9edf4&amp;id=74d11a35c0", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-68682771-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `01dev`,
        short_name: `01dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007d92`,
        display: `minimal-ui`,
        icon: `content/assets/01dev-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `0e1dev`,
      },
    },
  ],
}
