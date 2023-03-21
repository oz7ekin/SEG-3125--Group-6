import { Card, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt as phone, faTabletAlt as tablet, faLaptop as laptop } from '@fortawesome/free-solid-svg-icons';
import { faClock as watch } from '@fortawesome/free-regular-svg-icons';

function ProductInfo(props) {
  const [addPopUp, setAddPopUp] = useState(false);
  const [removePopUp, setRemovePopUp] = useState(false);

  function handleAdd() {
    let { show, onHide, handleAdd, ...item } = props;
    props.handleAdd(item);
    setAddPopUp(true);
  }

  function handleRemove(){
    props.handleRemove(props.id);
    setRemovePopUp(true);
  }

  useEffect(()=>{
    if(addPopUp){
      setTimeout(()=>{
        setAddPopUp(false);
      }, 2000);
    } else if(removePopUp){
      setTimeout(()=>{
        setRemovePopUp(false);
      }, 2000);
    }
  }, [addPopUp, removePopUp]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="fs-3">{props.name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <img src={props.image} alt={props.name} style={{ height: '23rem', width: '100%' }}></img>
          </div>
          <div className="col-6">
            <ListGroup className="list-group mb-4 fs-5">
              <ListGroupItem className="bg-light" style={{ borderColor: '#000000' }}><b>Price:</b> ${props.price}</ListGroupItem>
              <ListGroupItem className="bg-light" style={{ borderColor: '#000000' }}><b>Rating:</b> {props.rating}/5</ListGroupItem>
              <ListGroupItem className="bg-light" style={{ borderColor: '#000000' }}><b>Quality:</b> {props.quality}</ListGroupItem>
              <ListGroupItem className="bg-light" style={{ borderColor: '#000000' }}><b>Colour:</b> {props.colour}</ListGroupItem>
            </ListGroup>
            <ListGroup className="list-group mb-4">
              <ListGroupItem className="bg-light" style={{ borderColor: '#000000' }}><b className="fs-5">Description:</b> <br />{props.description}<br /></ListGroupItem>
            </ListGroup>
          </div>
          <div className="row mt-4">
            <b className="fs-5 mb-2">Reviews:</b>
            <div className="col-8">
              {props.reviews.map((review) => (<div className="mb-2">"{review}"</div>))}
            </div>
            <div className="col-4">
              {props.reviewers.map((reviewers) => (<div className="mb-2">- {reviewers}</div>))}
            </div>
          </div>
        </div>
        <hr />
        { addPopUp ? <div className="float-start fw-bold text-success"> Added to cart.</div> : <></>}
        { props.itemInCart(props.id) ? <Button variant="dark" className="float-end bg-danger" onClick={handleRemove}>Remove from Cart</Button> : <Button variant="dark" className="float-end bg-success" onClick={handleAdd}>Add to Cart</Button>}
        { removePopUp ? <div className="text-end fw-bold text-danger"> Removed from cart. &nbsp;</div> : <></>}
      </Modal.Body>
    </Modal>
  );
}

export default function ProductCard(props) {

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    $(document).ready(function () {
      $(".card").hover(
        function () {
          $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function () {
          $(this).removeClass('shadow-lg');
        }
      );
    });
  })

  return (
    <>
      <Card className="shadow mx-5 mb-5 card" style={{ width: '18rem', cursor: 'pointer', height: '34rem' }} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={props.image} style={{ width: '100%' }} />

        <Card.Body>
          <Card.Title>{props.category === "iPhone" ? <FontAwesomeIcon className="me-2" icon={phone} /> : props.category === "iPad" ? <FontAwesomeIcon className="me-2" icon={tablet} /> : props.category === "MacBook" ? <FontAwesomeIcon className="me-2" icon={laptop} /> : <FontAwesomeIcon className="me-2" icon={watch} />}
            {props.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem><b>Price:</b> ${props.price}</ListGroupItem>
            <ListGroupItem><b>Rating:</b> {props.rating}/5</ListGroupItem>
            <ListGroupItem><b>Quality:</b> {props.quality}</ListGroupItem>
            <ListGroupItem><b>Colour:</b> {props.colour}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      <ProductInfo
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </>
  );
}