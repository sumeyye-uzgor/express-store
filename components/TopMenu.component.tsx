import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/actions'
import { State } from '../schemas/redux.schema'
function TopMenu() {
    const dispatch = useDispatch()
    const categories = useSelector((state: State) => state.categories)
    return (
        <Dropdown className="position-fixed" style={{ width: "100vw", height: "70px", zIndex: 3 }}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "90vw", zIndex: 3 }}>
                Categories
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "90vw", zIndex: 3, textAlign: "center" }} >
                {categories.map(
                    category => <Dropdown.Item key={category} onClick={() => dispatch(setCategory(category))}>{category}</Dropdown.Item>
                )}
                {/* <Dropdown.Item onClick={() => dispatch(setCategory('all'))}>All Products</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(setCategory('hats'))}>Hats</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(setCategory('sneakers'))}>Sneakers</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(setCategory('jackets'))}>Jackets</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(setCategory('men'))}>Men</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(setCategory('women'))}>Women</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default TopMenu