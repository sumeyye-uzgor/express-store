import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import StyledNavbar from '../components/StyledNavbar.component'
import ToastNotify from '../components/ToastNotify.component'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { useDispatch } from 'react-redux'

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
export async function getServerSideProps() {
  const res = await axios.get('https://limitless-lake-55070.herokuapp.com/category/')
  // const res = await axios.get('https://fakestoreapi.com/products')
  const data = await res.data
  let allProducts = []
  if (!data) {
    console.log('nothing found')
    return {}
  }
  data.map(
    category => allProducts.push(...category.products)
  )
  console.log(allProducts)
  return {
    props: { products: allProducts }, // will be passed to the page component as props
  }
}
export default MyApp;
