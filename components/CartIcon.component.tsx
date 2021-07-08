import { useState } from 'react'
import { Col, Row, Button, Container } from "react-bootstrap"
import ShoppingBag from '../public/ShoppingBag.svg'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { State } from '../schemas/redux.schema'

const CartIcon = ({ className }: { className: string }): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false)
    const cartItems = useSelector((state: State) => state.cartItems)
    const router = useRouter()
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={className}>
            <ShoppingBag width="30px" height="30px" className="d-none d-md-block" />
            {/* <ShoppingBag width="30px" height="30px" className="d-block d-md-none" onClick={() => setIsHovered(!isHovered)} /> */}

            <Container
                className={isHovered ? 'd-flex align-items-center justify-content-center' : 'd-none'}
                style={{
                    position: 'fixed',
                    top: "43px",
                    width: "270px",
                    right: "30px",
                    zIndex: 9,
                    border: "1px solid black",
                    backgroundColor: "white"
                }}
            >
                {cartItems.length > 0 ?
                    (<Row className="justify-content-center">
                        <Col xs={11}>
                            {
                                cartItems.map(
                                    (item, idx) => (
                                        <Row className="d-flex my-3" key={idx}>
                                            <Col xs={3} >
                                                <img src={item.imageURL} width="50px" height="30px" alt="deneme" style={{ marginRight: "20px" }} />

                                            </Col>
                                            <Col xs={5} >
                                                {item.name}
                                            </Col>
                                            <Col xs={4} >
                                                {item.qty} x ${item.price}
                                            </Col>
                                        </Row>)
                                )
                            }
                            <Row className="d-flex my-3" >
                                <Button variant="dark" onClick={() => router.push('/checkout')}>Checkout</Button>
                            </Row>
                        </Col>
                    </Row>) :
                    <Row className="d-flex my-3 justify-content-center align-items-center">
                        Your cart is empty!
                    </Row>
                }
            </Container >
        </div>


    )

}

export default CartIcon