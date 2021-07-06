import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions'
interface Props {
    category: string,
    categoryName: string,
}

const MenuItem = (props: Props) => {
    const dispatch = useDispatch()
    return (
        <Row style={{ width: '100%', cursor: "pointer" }} onClick={() => dispatch(setCategory(props.category))}>{props.categoryName}</Row>
    )
}
function SideMenu() {
    return (
        <Row style={{ height: "100vh", fontSize: "20px" }} className="mt-5">
            <Col>
                <MenuItem categoryName="All Products" category="all" />
                <Row><hr /></Row>
                <MenuItem categoryName="Hats" category="hats" />
                <Row><hr /></Row>
                <MenuItem categoryName="Sneakers" category="sneakers" />
                <Row><hr /></Row>
                <MenuItem categoryName="Jackets" category="jackets" />
                <Row><hr /></Row>
                <MenuItem categoryName="Men" category="men" />
                <Row><hr /></Row>
                <MenuItem categoryName="Women" category="women" />
                <Row><hr /></Row>
            </Col>
        </Row>
    )
}
export default SideMenu