import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../components/HomeLayout.component'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import ProductCard from '../components/ProductCard.component'
import { State } from '../schemas/redux.schema'
import { useEffect } from 'react'
import { setItems } from '../redux/actions'


export default function Home ()
{
  const dispatch = useDispatch()
  useEffect(
    () =>
    {
      async function fetchMyAPI ()
      {
        let response = await axios.get( 'https://limitless-lake-55070.herokuapp.com/category/' )
        let data = await response.data
        dispatch( setItems( data ) )
      }

      fetchMyAPI()
    }, [ dispatch ]
  )
  const category = useSelector( ( state: State ) => state.category )
  const categories = useSelector( ( state: State ) => state.categories )
  function FindItems ()
  {
    const allCategoryItems = useSelector( ( state: State ) => state.allCategoryItems )
    let filteredCategory = allCategoryItems.filter(
      item => item.categoryName === category
    )[ 0 ]
    return filteredCategory.products
  }
  function GetAllItems ()
  {
    return useSelector( ( state: State ) => state.allItems )
  }
  const products = categories.includes( category ) ? FindItems() : GetAllItems()

  return (
    <HomeLayout>
      <Row className="justify-content-center my-5" style={ { fontSize: "30px" } } >
        { category === 'all' ? 'ALL PRODUCTS' : category.toUpperCase() }
      </Row>
      <Row className="justify-content-center">
        {
          products.map(
            product =>
            (
              <ProductCard product={ product } key={ product.id } />
            )
          )
        }
      </Row>
    </HomeLayout>

  )
}
