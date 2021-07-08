import React, { useState } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap"
import { Product } from '../schemas/product.schema'
import styles from '../styles/ProductCard.module.css'
import { addToCart, setDetailsProduct, openToast } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'


const ProductCard = ( { product }: { product: Product } ): JSX.Element =>
{

    const [ isHovered, setIsHovered ] = useState( false )
    const dispatch = useDispatch()
    const router = useRouter();
    function handleDetails ()
    {
        dispatch( setDetailsProduct( product ) )
        router.push( '/details' )
    }
    function handleCart ()
    {
        console.log( product )
        dispatch( addToCart( product ) )
        dispatch( openToast( { isCartAction: true, toastProduct: product } ) )
    }
    return (
        <Col xs={ 11 } md={ 5 } lg={ 4 } className="mb-5">
            <Card
                className={ `mb-2 ${ styles.styledCard }` }
                bg="white"
            >
                {/* <Card.Img variant="top" src={product.imageURL} height="350px" style={{ border: "1px solid black" }} /> */ }
                {/* <Card.Img className="cardImage" src={product.imageUrl} alt={product.name} height="270px" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} /> */ }
                <Card.Img className={ `d-none d-md-flex ${ styles.imageCol1 }` } as="div" style={ {
                    backgroundImage: "url('" + product.imageURL + "')",

                } } onMouseEnter={ () => setIsHovered( true ) } onMouseLeave={ () => setIsHovered( false ) } >
                    <Row className={ `${ styles.imageRow }` }>
                        <Col className={ `${ styles.imageCol2 }` }>
                            <Button className={ isHovered ? styles.cardButton : 'd-none' } variant="dark" onClick={ handleCart }> Add To Cart</Button>
                            <Button className={ isHovered ? styles.cardButton : 'd-none' } variant="dark" onClick={ handleDetails }>Product Details</Button>

                        </Col>
                    </Row>


                </Card.Img>
                <Card.Img className={ `d-md-none d-flex ${ styles.imageCol1 }` } as="div" style={ {
                    backgroundImage: `url(${ product.imageURL })`,

                } } >
                    <Row className={ `${ styles.imageRow }` }>
                        <Col className={ `${ styles.imageCol2 }` }>
                            <Button className={ styles.cardButton } variant="dark" onClick={ handleCart }> Add To Cart</Button>
                            <Button className={ styles.cardButton } variant="dark" onClick={ handleDetails }>Product Details</Button>

                        </Col>
                    </Row>


                </Card.Img>


                <Card.Body className="cardBody d-flex align-items-end justify-content-between" onClick={ handleDetails }>

                    <Row>
                        { product.name }

                    </Row>
                    <Row>

                        &#36;{ product.price }
                    </Row>

                </Card.Body>
            </Card >
        </Col >
    )

}

export default ProductCard