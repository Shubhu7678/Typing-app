import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  )
}

export default Layout