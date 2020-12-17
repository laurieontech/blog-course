import React from "react"
import { graphql } from "gatsby"

const BlogPostPage = ({ data }) => <h1>{data.mdx.frontmatter.title}</h1>

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`

export default BlogPostPage
