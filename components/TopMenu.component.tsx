import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/actions'
import { State } from '../schemas/redux.schema'
function TopMenu ()
{
    const dispatch = useDispatch()
    const categories = useSelector( ( state: State ) => state.categories )
    return (
        <Dropdown className="position-fixed" style={ { width: "100vw", height: "70px", zIndex: 3 } }>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={ { width: "90vw", zIndex: 3 } }>
                Categories
            </Dropdown.Toggle>

            <Dropdown.Menu style={ { width: "90vw", zIndex: 3, textAlign: "center" } } >
                { categories.map(
                    category => <Dropdown.Item key={ category } onClick={ () => dispatch( setCategory( category ) ) }>{ category }</Dropdown.Item>
                ) }
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default TopMenu