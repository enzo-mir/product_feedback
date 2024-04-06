import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
