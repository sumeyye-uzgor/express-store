import { Toast, Image } from "react-bootstrap"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeToast } from "../redux/actions"
import { State } from "../schemas/redux.schema";


function ToastNotify ()
{
    const toastInfo = useSelector( ( state: State ) => state.toastInfo )
    const { isToastOpen, toastProduct, toastMessage, isCartAction } = toastInfo
    const dispatch = useDispatch()
    return (
        <div>
            isToastOpen &&
            (<Toast onClose={ () => dispatch( closeToast() ) } show={ isToastOpen } delay={ 3000 } autohide
                style={ {
                    position: 'fixed',
                    top: "90px",
                    right: "30px",
                    zIndex: 7,
                    border: "1px solid black",
                } }
            >
                <Toast.Header closeButton={ false }>
                    <strong className="mr-auto">{ toastMessage }</strong>
                    {/* <small>just now</small> */ }
                </Toast.Header>
                {
                    isCartAction && (
                        <Toast.Body>
                            <Image src={ toastProduct.imageURL } width="30px" height="30px" alt="deneme" />

                            <span style={ { marginLeft: "20px" } } >{ toastProduct.name }</span>
                        </Toast.Body>
                    )
                }
            </Toast>)
        </div>
    );
}




export default ToastNotify;
