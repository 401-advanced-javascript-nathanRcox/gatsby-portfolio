const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Rhead/Documents/Projects/cf-projects/Code 401/git-hub-repos/gatsby-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Rhead/Documents/Projects/cf-projects/Code 401/git-hub-repos/gatsby-portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Rhead/Documents/Projects/cf-projects/Code 401/git-hub-repos/gatsby-portfolio/src/pages/index.js")))
}
