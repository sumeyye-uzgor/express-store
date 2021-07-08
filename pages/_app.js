import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import StyledNavbar from '../components/StyledNavbar.component'
import ToastNotify from '../components/ToastNotify.component'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store} {...pageProps}>
      <div {...pageProps}>
        <StyledNavbar />
        <ToastNotify />
        <Component {...pageProps} />
      </div>
    </Provider>
  )

}

export default MyApp;
