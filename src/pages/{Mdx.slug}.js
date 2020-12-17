import React from "react"
import { graphql } from "gatsby"

const BlogPostPage = ({ data }) => <h2>{data.mdx.frontmatter.title}</h2>

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
