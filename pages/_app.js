import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import StyledNavbar from '../components/StyledNavbar.component'

function MyApp({ Component, pageProps }) {
  return <React.Fragment  {...pageProps}>
    <StyledNavbar />
    <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp
