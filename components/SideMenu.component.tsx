import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/actions'
import { State } from '../schemas/redux.schema'


function SideMenu() {
    const dispatch = useDispatch()
    const categories = useSelector((state: State) => state.categories)
    return (
        <Row style={{ height: "100vh", fontSize: "20px" }} className="mt-5" as="aside">
            <Col>
                {categories.map(
                    category => (
                        <Row as="div" key={category}>
                            <Row style={{ width: '100%', cursor: "pointer" }} onClick={() => dispatch(setCategory(category))}>{category}</Row>
                            <Row><hr /></Row>
                        </Row>
                    )
                )}

            </Col>
        </Row>
    )
}
export default SideMenu