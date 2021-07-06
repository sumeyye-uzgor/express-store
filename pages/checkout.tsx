import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { State } from '../schemas/redux.schema'
import { deleteFromCart, setQuantity, setDetailsProduct, openToast, setCartEmpty } from '../redux/actions'
import { useRouter } from "next/router";
import { Product } from "../schemas/product.schema";

function Checkout() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: State) => state.cartItems)
    const cartTotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
    const router = useRouter();
    function handleDetails(product: Product) {
        dispatch(setDetailsProduct(product))
        router.push('/details')
    }
    function handleBuy() {
        dispatch(setCartEmpty())
        dispatch(openToast({ isCartAction: false, toastMessage: "We will take care of your order!" }))
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Row style={{ fontSize: "30px" }} className="justify-content-center my-5">
                        Checkout
                    </Row>
                    {cartItems.length > 0 ? cartItems.map(
                        item => (
                            <Row key={item.id} className="my-3 align-items-center" >
                                <Col xs={2} onClick={() => handleDetails(item)} style={{ cursor: "pointer" }}>
                                    <img src={item.image} width="50px" alt="product" />
                                </Col>
                                <Col xs={2} md={3} onClick={() => handleDetails(item)} style={{ cursor: "pointer" }}>
                                    {item.name}
                                </Col>
                                <Col xs={4} md={3} className="justify-content-center">
                                    <Row>
                                        <Col xs={1} />
                                        <Col xs={2} onClick={() => dispatch(setQuantity(item.id, 1))} style={{ cursor: "pointer" }}>+</Col>
                                        <Col xs={2}>{item.qty}</Col>
                                        {
                                            item.qty > 1 && <Col xs={2} onClick={() => dispatch(setQuantity(item.id, -1))} style={{ cursor: "pointer" }}>-</Col>
                                        }
                                        <Col xs={5} />

                                    </Row>
                                </Col>
                                <Col xs={2}>
                                    {item.qty} x ${item.price}
                                </Col>
                                <Col xs={2} onClick={() => dispatch(deleteFromCart(item.id))}>
                                    Delete
                                </Col>
                            </Row>
                        )
                    )
                        :
                        <Row className="justify-content-center my-5">
                            Your cart is empty!
                        </Row>
                    }

                    <Row className="justify-content-center mt-5">
                        <hr />
                    </Row>

                    <Row className="justify-content-end my-2 me-5" style={{ fontSize: "23px" }}>
                        <Col xs={12} md={6} />
                        <Col xs={12} md={3}> TOTAL: ${cartTotal}</Col>
                        <Col xs={12} md={3}>
                            <Button variant="dark" onClick={handleBuy}>
                                BUY ALL NOW!
                            </Button>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;