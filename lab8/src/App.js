import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Help from './components/Help';
import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle as info } from '@fortawesome/free-solid-svg-icons';
import allProducts from './Products';

function App() {
  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [priceSortType, setPriceSortType] = useState("");
  const [ratingSortType, setRatingSortType] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [qualitySortType, setQualitySortType] = useState("");
  const [modalShow, setModalShow] = React.useState(false); // information modal
  const [searchQuery, setSearchQuery] = useState("");

  function itemInCart(id){
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id){
        return true;
      } 
    }
    return false;
  }

  function handleAdd(item) {
    cart.push(item);
  }

  function handleRemove(id) {
    let tempCart = [];
    let itemRemoved = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id && !itemRemoved){
        itemRemoved = true;
        continue;
      } 
      tempCart.push(cart[i]);
    }
    setCart(tempCart);
  }

  useEffect(() => {
    let sortedProducts = [...allProducts];

    //search
    if (searchQuery !== "") {
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || prod.colour.toLowerCase().includes(searchQuery.toLowerCase()) || prod.quality.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    //sort price
    if (priceSortType === "L2H") {
      sortedProducts.sort((prod1, prod2) => { return Number(prod1.price) - Number(prod2.price) });
    } else if (priceSortType === "H2L") {
      sortedProducts.sort((prod1, prod2) => { return Number(prod2.price) - Number(prod1.price) });
    }

    //sort rating
    if (ratingSortType === "1") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 1);
    } else if (ratingSortType === "2") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 2);
    } else if (ratingSortType === "3") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 3);
    } else if (ratingSortType === "4") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 4);
    }

    //sort category
    if (categoryType === "iPhone") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "iPhone");
    } else if (categoryType === "iPad") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "iPad");
    } else if (categoryType === "MacBook") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "MacBook");
    } else if (categoryType === "Apple Watch") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "Apple Watch");
    }

    //sort quality
    if (qualitySortType === "Like New") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Like New");
    } else if (qualitySortType === "Good") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Good");
    } else if (qualitySortType === "Acceptable") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Acceptable");
    }

    setProducts(sortedProducts);
  }, [priceSortType, ratingSortType, categoryType, qualitySortType, searchQuery]);


  return (
    <div className="App">
      <NavBar cart={cart} handleRemove={handleRemove} handleClear={setCart} handleSearch={setSearchQuery} />
      <div className="row">
        <Sidebar sortByPrice={setPriceSortType} sortByRating={setRatingSortType} setCategory={setCategoryType} sortByQuality={setQualitySortType} />
        <div className="col-10 px-4 mt-5 bg-light d-flex flex-wrap" style={{ paddingTop: '4rem' }}>
          {products.map((item) => (<ProductCard {...item} handleAdd={handleAdd} handleRemove={handleRemove} itemInCart={itemInCart}/>))}
          <Button variant="secondary" className="shadow rounded-circle me-3 mb-3 p-2" style={{ position: 'fixed', right: '0', bottom: '0' }} onClick={() => setModalShow(true)}><FontAwesomeIcon className="fs-1" icon={info} /></Button>
          <Help
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;