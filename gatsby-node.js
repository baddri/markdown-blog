const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/container/BlogPost/index.js`)
  const result = await graphql(
    `
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                path
                tags
              }
            }
          }
        }
      }
    `
  )

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: BlogPostTemplate,
      context: {
        pathSlug: path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  createTagPages(createPage, posts)
}

function createTagPages(createPage, posts) {
  const AllTagsTemplate = path.resolve("src/container/AllTags/index.js")
  const SingleTagTemplate = path.resolve("src/container/SingleTag/index.js")

  const postByTags = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postByTags[tag]) {
          postByTags[tag] = []
        }
        postByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postByTags)

  createPage({
    path: "/tags",
    component: AllTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: SingleTagTemplate,
      context: {
        posts,
        tag,
      },
    })
  })
}
