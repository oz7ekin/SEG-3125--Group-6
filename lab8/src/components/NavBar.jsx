import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket as cart, faSearch as search } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Checkout from './Checkout'

export default function NavBar(props) {

  const [modalShow1, setModalShow1] = React.useState(false);

  let searchInput = null;

  function handleSearch(event) {
    event.preventDefault();
    props.handleSearch(searchInput.value);
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <div className="d-flex">
          <img
            alt="iSellForLess logo"
            src={logo}
            className="d-inline-block align-top"
            style={{ height: '100%', width: '7%' }}
          />{' '}
          <div className="fs-1 fw-bold ms-3" style={{ color: '#B3B3B3' }}><h1>iSellForLess</h1></div>
        </div>
        <Form className="d-flex w-100" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={(input) => { searchInput = input; }}
          />
          <Button variant="outline-light" onClick={handleSearch}><FontAwesomeIcon className="fs-4" icon={search} /></Button>
        </Form>
        <Button variant="secondary" className="rounded-circle p-2 ms-5"><FontAwesomeIcon icon={cart} style={{ cursor: 'pointer' }} onClick={() => setModalShow1(true)} className="fs-2" />
        </Button>
      </Container>
      {/* <div className="me-3" id="google_translate_element"></div> */}
      <Checkout
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        cart={props.cart}
        handleRemove={props.handleRemove}
        handleClear={props.handleClear}
      />
    </Navbar>

  );

}