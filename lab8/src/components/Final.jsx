import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt as checklist, faIdCard as card, faCreditCard as ccard, faShippingFast as truck, faTags as price } from '@fortawesome/free-solid-svg-icons';

export default function Final(props) {

    return (
        <>
            <h1 className="text-center mb-4 fs-2"><FontAwesomeIcon icon={checklist} /> Summary</h1>
            <div className="row">
                <div className="col-6 mb-3">
                    <h2 className="fs-3"><FontAwesomeIcon icon={card} /> Your Information</h2>
                    <div className="ms-1"><b>First Name:</b> {props.firstName}</div>
                    <div className="ms-1"><b>Last Name:</b> {props.lastName}</div>
                    <div className="ms-1"><b>Email Address:</b> {props.email}</div>
                    <div className="ms-1"><b>Phone Number:</b> {props.phoneNum}</div>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="fs-3"><FontAwesomeIcon icon={ccard} /> Payment Information</h2>
                    <div className="ms-1">You are paying with your card ending in <b>{props.cardNum.substr(-4)}</b></div>
                    <div className="ms-1">with an expiry of <b>{props.cardDate}</b>.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mb-3">
                    <h2 className="fs-3"><FontAwesomeIcon icon={truck} /> Shipping Information</h2>
                    <div className="ms-1"><b>Shipping Address:</b> {props.address}</div>
                    <div className="ms-1"><b>Postal Code:</b> {props.postal}</div>
                    <div className="ms-1"><b>City/Town:</b> {props.city}</div>
                    <div className="ms-1"><b>Province:</b> {props.province}</div>
                    <div className="ms-1"><b>Country:</b> {props.country}</div>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="fs-3"><FontAwesomeIcon icon={price} /> Order Total</h2>
                    <div className="ms-1"><b>Subtotal:</b> ${props.total.toFixed(2)}</div>
                    <div className="ms-1"><b>Tax:</b> ${(props.total * 0.13).toFixed(2)}</div>
                    <div className="ms-1"><b>Total:</b> ${(props.total * 1.13).toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}
