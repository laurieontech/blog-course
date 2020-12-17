import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title={`Home Page`} />
      {posts.map((post) => {
        return (
          <Link to={post.slug} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
