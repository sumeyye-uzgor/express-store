import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import StyledNavbar from '../components/StyledNavbar.component'
import ToastNotify from '../components/ToastNotify.component'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Head from 'next/head'


function MyApp ( { Component, pageProps } )
{

  return (
    <Provider store={ store } { ...pageProps }>
      <Head>
        <title>Express Store</title>
        <meta name="description" content="A ecommerce website for fast shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main { ...pageProps }>
        <StyledNavbar />
        <ToastNotify />
        <Component { ...pageProps } />
      </main>
    </Provider>
  )

}

export default MyApp;
