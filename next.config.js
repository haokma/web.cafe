const path = require("path");

module.exports = {
  distDir: "build",
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
  },
  // sassOptions: {
  //   prependData: `
  //     // @import "styles/config/_variables.scss";
  //     // @import "styles/config/_mixins.scss";
  //   `,
  // },
};
