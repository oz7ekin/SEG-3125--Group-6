import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle as question, faIdCard as card } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

export default function Information(props) {

    const firstNameTooltip = (props) => (
        <Tooltip id="firstName-tooltip" {...props}>
            Enter your first name.
        </Tooltip>
    );
    const lastNameTooltip = (props) => (
        <Tooltip id="lastName-tooltip" {...props}>
            Enter your last name.
        </Tooltip>
    );
    const emailTooltip = (props) => (
        <Tooltip id="email-tooltip" {...props}>
            Enter your email address. Example: john.appleseed@icloud.com
        </Tooltip>
    );
    const phoneNumberTooltip = (props) => (
        <Tooltip id="phoneNumber-tooltip" {...props}>
            Enter your phone number. Example: (613) 343-9866
        </Tooltip>
    );

    useEffect(() => {
        // Phone number input formatting
        $("input[type='tel']").each(function () {
            $(this).on("change keyup paste", function (e) {
                let output,
                    $this = $(this),
                    input = $this.val();

                if (e.keyCode !== 8) {
                    input = input.replace(/[^0-9]/g, '');
                    let area = input.substr(0, 3);
                    let pre = input.substr(3, 3);
                    let tel = input.substr(6, 4);
                    if ((area.length < 3) && (area.length !== 0)) {
                        output = "(" + area;
                    } else if (area.length === 3 && pre.length < 3) {
                        output = "(" + area + ") " + pre;
                    } else if (area.length === 3 && pre.length === 3) {
                        output = "(" + area + ") " + pre + "-" + tel;
                    }
                    $this.val(output);
                }
            });
        });
    })

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={card} /> Your Information <FontAwesomeIcon className="align-middle fs-4 text-primary" title="Your contact information is needed in case we need to contact you about your order." icon={question} /></h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold required">First&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={firstNameTooltip}
                    >
                        <input type="fname" style={{ width: '100%' }} value={props.firstName} onChange={(e) => { props.setFirstName(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold required">Last&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={lastNameTooltip}
                    >
                        <input type="lname" style={{ width: '100%' }} value={props.lastName} onChange={(e) => { props.setLastName(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold required">Email&nbsp;Address</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={emailTooltip}
                    >
                        <input type="text" style={{ width: '100%' }} value={props.email} onChange={(e) => { props.setEmail(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Phone&nbsp;Number</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={phoneNumberTooltip}
                    >
                        <input type="tel" maxLength="14" style={{ width: '100%' }} value={props.phoneNum} onChange={(e) => { props.setPhoneNum(e.target.value) }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}