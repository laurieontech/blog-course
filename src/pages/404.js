import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title={`404 Page`} />
      <p>The big empty. This page does not exist.</p>
    </Layout>
  )
}

export default NotFoundPage
