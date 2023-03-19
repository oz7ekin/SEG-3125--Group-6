import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket as basket, faTimesCircle as remove } from '@fortawesome/free-solid-svg-icons';

export default function Cart(props) {

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={basket} /> Cart</h1>
            <div>
                {props.cart.map(item =>
                (
                    <div className="row mb-3 mx-2 p-1 rounded bg-white">
                        <div className="col-6 fs-5"><b>{item.name}</b><br />{item.quality}<br />{item.colour}</div>
                        <div className="col-3 text-end"><img src={item.image} alt={item.name} style={{ width: '60%' }}></img></div>
                        <div className="col-2 text-end fs-5">${item.price}</div>
                        <div className="col-1 d-flex"><Button variant="danger" className="my-auto p-2 text-middle" onClick={() => { props.handleRemove(item.id) }}><FontAwesomeIcon className="fs-3" icon={remove} /></Button></div>
                    </div>)
                )}
            </div>
            <div className="fs-5 text-end">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 text-end">
                        <b>Subtotal:</b> ${props.total.toFixed(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 text-end">
                        <b>Tax:</b> ${(props.total * 0.13).toFixed(2)}
                        <hr />
                    </div>
                </div>
                <div className="fs-4 row">
                    <div className="col-7 text-start">
                        <Button variant="danger" className="ms-2 p-2 text-middle" onClick={() => { props.handleClear([]) }}>Clear Cart</Button>
                    </div>
                    <div className="col-5 text-end">
                        <b>Total:</b> ${(props.total * 1.13).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    );
}
