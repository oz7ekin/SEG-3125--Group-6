import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard as ccard } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

export default function Payment(props) {

    const nameTooltip = (props) => (
        <Tooltip id="name-tooltip" {...props}>
            Enter the name as it appears on your card.
        </Tooltip>
    );
    const numberTooltip = (props) => (
        <Tooltip id="number-tooltip" {...props}>
            Enter your credit card number. Example: 4520&nbsp;1203&nbsp;3304&nbsp;8888
        </Tooltip>
    );
    const expiryTooltip = (props) => (
        <Tooltip id="expiry-tooltip" {...props}>
            Enter your card expiry date. Example: 09/23
        </Tooltip>
    );
    const cvvTooltip = (props) => (
        <Tooltip id="cvv-tooltip" {...props}>
            Enter your security code (CVV). Example: 123
        </Tooltip>
    );

    useEffect(() => {
        //CC Number input formatting
        $("input[id='ccNumber']").each(function () {
            $(this).on("change keyup paste", function (e) {
                let output,
                    $this = $(this),
                    input = $this.val();

                if (e.keyCode !== 8) {
                    input = input.replace(/[^0-9]/g, '');
                    let first = input.substr(0, 4);
                    let second = input.substr(4, 4);
                    let third = input.substr(8, 4);
                    let fourth = input.substr(12, 4);
                    if ((first.length < 4) && (first.length !== 0)) {
                        output = first + " ";
                    } else if (first.length === 4 && second.length < 4) {
                        output = first + " " + second;
                    } else if (first.length === 4 && second.length === 4 && third.length < 4) {
                        output = first + " " + second + " " + third;
                    } else if (first.length === 4 && second.length === 4 && third.length === 4 && fourth.length < 4) {
                        output = first + " " + second + " " + third + " " + fourth;
                    } else if (first.length === 4 && second.length === 4 && third.length === 4 && fourth.length === 4) {
                        output = first + " " + second + " " + third + " " + fourth;
                    }

                    $this.val(output);
                }
            });
        });

        // CC Expiry input formatting
        $("input[id='ccExpiry']").each(function () {
            $(this).on("change keyup paste", function (e) {
                let output,
                    $this = $(this),
                    input = $this.val();

                if (e.keyCode !== 8) {
                    input = input.replace(/[^0-9]/g, '');
                    let month = input.substr(0, 2);
                    let year = input.substr(2, 2);
                    if ((month.length < 2) && (month.length !== 0)) {
                        output = month + "/";
                    } else if (month.length === 2 && year.length < 2) {
                        output = month + "/" + year;
                    } else if (month.length === 2 && year.length === 2) {
                        output = month + "/" + year;
                    }

                    $this.val(output);
                }
            });
        });

        //CC Number input formatting
        $("input[id='ccCVV']").each(function () {
            $(this).on("change keyup paste", function (e) {
                let output,
                    $this = $(this),
                    input = $this.val();

                if (e.keyCode !== 8) {
                    input = input.replace(/[^0-9]/g, '');
                    let cvv = input.substr(0, 3);
                    if ((cvv.length < 4) && (cvv.length !== 0)) {
                        output = cvv;
                    }

                    $this.val(output);
                }
            });
        });
    })

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={ccard} /> Payment Information</h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold required">Name&nbsp;on&nbsp;Card</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={nameTooltip}
                    >
                        <input type="text" style={{ width: '100%' }} value={props.cardName} onChange={(e) => { props.setCardName(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold required">Card&nbsp;Number</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={numberTooltip}
                    >
                        <input type="text" id="ccNumber" maxLength="19" style={{ width: '100%' }} value={props.cardNum} onChange={(e) => { props.setCardNum(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold required">Expiry Date</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={expiryTooltip}
                    >
                        <input type="text" id="ccExpiry" maxLength="5" style={{ width: '100%' }} value={props.cardDate} onChange={(e) => { props.setCardDate(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold required">CVV</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={cvvTooltip}
                    >
                        <input type="text" id="ccCVV" maxLength="3" style={{ width: '100%' }} value={props.cardCVV} onChange={(e) => { props.setCardCVV(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}
