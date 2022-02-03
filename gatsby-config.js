require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `LeeBrooks3`,
        siteUrl: `https://LeeBrooks3.github.io`
    },
    plugins: [{
        resolve: 'gatsby-source-contentful',
        options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID,
        }
    }, "gatsby-plugin-postcss", {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
        "trackingId": process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        }
    }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
        "icon": "src/images/icon.png"
        }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
        "name": "images",
        "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
        "name": "pages",
        "path": "./src/pages/"
        },
        __key: "pages"
    }]
};
