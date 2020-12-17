/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`,
}

const headerStyles = {
  paddingLeft: `10px`,
}

const mainStyles = {
  maxWidth: `container`,
  padding: `1rem`,
  mx: `auto`,
  textAlign: `center`,
}

const footerStyles = {
  textAlign: `center`,
  background: `lightgrey`,
}

const Layout = ({ children }) => (
  <div sx={bodyStyles}>
    <header sx={headerStyles}>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </header>
    <main sx={mainStyles}>{children}</main>
    <footer>
      <p sx={footerStyles}>A fun footer</p>
    </footer>
  </div>
)

export default Layout
