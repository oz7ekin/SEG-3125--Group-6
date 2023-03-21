import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Information from './Information';
import Payment from './Payment';
import Shipping from './Shipping';
import Cart from './Cart';
import Final from './Final';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight as arrow } from '@fortawesome/free-solid-svg-icons';

export default function Checkout(props) {
  const [stage, setStage] = useState(0); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [total, setTotal] = useState(0);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  let infoObj = { firstName, setFirstName, lastName, setLastName, phoneNum, setPhoneNum, email, setEmail };
  let payObj = { cardName, setCardName, cardNum, setCardNum, cardDate, setCardDate, cardCVV, setCardCVV };
  let shipObj = { address, setAddress, postal, setPostal, city, setCity, province, setProvince, country, setCountry };

  useEffect(() => {
    let curTotal = 0;
    props.cart.forEach(item => {
      curTotal += Number(item.price);
    });
    setTotal(curTotal);
    if (curTotal > 0 && stage === 0){
      setShowErrorMsg(false)
    }
  });

  function handleConfirm() {
    setFirstName("");
    setLastName("");
    setPhoneNum("");
    setEmail("");
    setCardName("");
    setCardNum("");
    setCardDate("");
    setCardCVV("");
    setAddress("");
    setPostal("");
    setCity("");
    setProvince("");
    setCountry("");
    props.handleClear([]);
    props.onHide();
    alert("Thank you for shopping at iSellForLess! Please check your email for your order confirmation.");
    setStage(0);
  }

  function handleNext() {
    if (stage === 0 && props.cart.length === 0) {
      setShowErrorMsg(true);
      return;
    } else if (stage === 1 && (firstName === "" || lastName === "" || email === "")) {
      setShowErrorMsg(true);
      return;
    } else if (stage === 2 && (cardName === "" || cardNum === "" || cardDate === "" || cardCVV === "")) {
      setShowErrorMsg(true);
      return;
    } else if (stage === 3 && (address === "" || postal === "" || city === "" || province === "" || country === "")) {
      setShowErrorMsg(true);
      return;
    }
    setShowErrorMsg(false);
    setStage(stage + 1);
  }

  function handleBack() {
    setShowErrorMsg(false);
    setStage(stage - 1);
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: '#E5E5E5' }} closeButton>
          <Modal.Title>
            {stage === 0 ? <div><span className="fw-bold text-success">Cart</span> <FontAwesomeIcon className="mx-1" icon={arrow} /> Information <FontAwesomeIcon className="mx-1" icon={arrow} /> Payment <FontAwesomeIcon className="mx-1" icon={arrow} /> Shipping <FontAwesomeIcon className="mx-1" icon={arrow} /> Summary</div> :
              stage === 1 ? <div><span className="fw-bold text-success">Cart <FontAwesomeIcon className="mx-1" icon={arrow} /> Information</span> <FontAwesomeIcon className="mx-1" icon={arrow} /> Payment <FontAwesomeIcon className="mx-1" icon={arrow} /> Shipping <FontAwesomeIcon className="mx-1" icon={arrow} /> Summary</div> :
                stage === 2 ? <div><span className="fw-bold text-success">Cart <FontAwesomeIcon className="mx-1" icon={arrow} /> Information <FontAwesomeIcon className="mx-1" icon={arrow} /> Payment</span> <FontAwesomeIcon className="mx-1" icon={arrow} /> Shipping <FontAwesomeIcon className="mx-1" icon={arrow} /> Summary</div> :
                  stage === 3 ? <div><span className="fw-bold text-success">Cart <FontAwesomeIcon className="mx-1" icon={arrow} /> Information <FontAwesomeIcon className="mx-1" icon={arrow} /> Payment <FontAwesomeIcon className="mx-1" icon={arrow} /> Shipping</span> <FontAwesomeIcon className="mx-1" icon={arrow} /> Summary</div> :
                    <div><span className="fw-bold text-success">Cart <FontAwesomeIcon className="mx-1" icon={arrow} /> Information <FontAwesomeIcon className="mx-1" icon={arrow} /> Payment <FontAwesomeIcon className="mx-1" icon={arrow} /> Shipping <FontAwesomeIcon className="mx-1" icon={arrow} /> Summary</span></div>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#CCCCCC' }}>
          {stage === 0 ? <Cart cart={props.cart} total={total} handleRemove={props.handleRemove} handleClear={props.handleClear} /> : stage === 1 ? <Information {...infoObj} /> : stage === 2 ? <Payment {...payObj} /> : stage === 3 ? <Shipping {...shipObj} /> : <Final {...infoObj} {...payObj} {...shipObj} total={total} />}
          {showErrorMsg ? stage === 0 ? <div className="fw-bold text-danger mt-3"> Sorry, you must have at least one item to begin the checkout process! </div> : <span className="fw-bold text-danger"> Oops! There's been an error - make sure you fill in all required fields marked with *.</span> : <></>}
          <hr />
          {stage !== 0 ? <Button variant="dark" className="float-start" onClick={handleBack}>Back</Button> : <></>}
          {stage !== 4 ? <Button variant="dark" className="float-end" onClick={handleNext}>Next</Button> : <Button variant="success" className="float-end" onClick={handleConfirm}>Confirm Order</Button>}
        </Modal.Body>
      </Modal>
    </>
  );
}