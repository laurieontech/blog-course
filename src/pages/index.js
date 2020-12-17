import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={`Home Page`} />
      <div>Hello World</div>
    </Layout>
  )
}

export default IndexPage
