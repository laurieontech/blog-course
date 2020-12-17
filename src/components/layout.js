import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>A fun footer</p>
    </footer>
  </div>
)

export default Layout
