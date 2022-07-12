import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/portfolio-site",
  siteMetadata: {
    title: `Portfolio Site`,
    siteUrl: `https://divident.github.io/portfolio-site`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-6ED6WG01FV"
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/programmer.png`
      },
    },
  ]
};

export default config;
