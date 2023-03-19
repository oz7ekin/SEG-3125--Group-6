import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filled, faBars as hamburger, faArrowsAltV as arrows, faTags as price, faStarHalfAlt as rating, faAward as quality, faMobileAlt as phone, faTabletAlt as tablet, faLaptop as laptop } from '@fortawesome/free-solid-svg-icons';
import { faStar as unfilled, faClock as watch } from '@fortawesome/free-regular-svg-icons';
import { faApple as apple } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar(props) {
    const [priceRadio, setPriceRadio] = useState(null);
    const [ratingRadio, setRatingRadio] = useState(null);
    const [qualityRadio, setQualityRadio] = useState(null);

    function handleReset(){
        props.setCategory("");
        props.sortByPrice("");
        props.sortByRating("");
        props.sortByQuality("");
        if (priceRadio != null){
            priceRadio.checked = false;
            setPriceRadio(null);
        } 
        if (ratingRadio != null){
            ratingRadio.checked = false;
            setRatingRadio(null);
        } 
        if (qualityRadio != null){
            qualityRadio.checked = false;
            setQualityRadio(null);
        } 
    }

    return (
        <div className="col-2 sticky-top text-white" style={{ height: '100vh', backgroundColor: '#212529', paddingTop: '5rem' }}>
            <div className="pt-4 px-4 mb-5">
                <h2 className="fs-3"><FontAwesomeIcon className="me-1" icon={hamburger} /> Categories</h2>
                <div className="py-2">
                    <div className="d-grid gap-2">
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("All") }}>
                            <FontAwesomeIcon className="me-1" icon={apple} /> All
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("iPhone") }}>
                            <FontAwesomeIcon className="me-1" icon={phone} /> iPhones
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("iPad") }}>
                            <FontAwesomeIcon className="me-1" icon={tablet} /> iPads
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("MacBook") }}>
                            <FontAwesomeIcon className="me-1" icon={laptop} /> MacBooks
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("Apple Watch") }}>
                            <FontAwesomeIcon className="me-1" icon={watch} /> Apple Watches
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h2 className="fs-3 mb-3"><FontAwesomeIcon icon={arrows} /> Sort</h2>
                <div className="ps-4 pb-2">
                    <Form>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={price} /> Price</h3>
                            <div key="default-radio">
                                <Form.Check
                                    type="radio"
                                    id="lowestToHighest"
                                    label="Lowest to Highest"
                                    name="priceSort"
                                    onClick={(e) => { props.sortByPrice("L2H"); setPriceRadio(e.target); }}
                                />
                                <Form.Check
                                    type="radio"
                                    id="highestToLowest"
                                    label="Highest to Lowest"
                                    name="priceSort"
                                    onClick={(e) => { props.sortByPrice("H2L"); setPriceRadio(e.target); }}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={rating} /> Average Rating</h3>
                            <Form.Check
                                type="radio"
                                id="4stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={(e) => { props.sortByRating("4"); setRatingRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="3stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={(e) => { props.sortByRating("3"); setRatingRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="2stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={(e) => { props.sortByRating("2"); setRatingRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="1star"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={(e) => { props.sortByRating("1"); setRatingRadio(e.target); }}
                            />
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={quality} /> Quality</h3>
                            <Form.Check
                                type="radio"
                                id="any"
                                label="Any"
                                name="qualitySort"
                                onClick={(e) => { props.sortByQuality("Any"); setQualityRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="likeNew"
                                label="Used - Like New"
                                name="qualitySort"
                                onClick={(e) => { props.sortByQuality("Like New"); setQualityRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="good"
                                label="Used - Good"
                                name="qualitySort"
                                onClick={(e) => { props.sortByQuality("Good"); setQualityRadio(e.target); }}
                            />
                            <Form.Check
                                type="radio"
                                id="acceptable"
                                label="Used - Acceptable"
                                name="qualitySort"
                                onClick={(e) => { props.sortByQuality("Acceptable"); setQualityRadio(e.target); }}
                            />
                        </div>
                    </Form>
                    <div className="mb-3">
                        <Button className="p-1" variant="secondary" onClick={handleReset}>Reset Fields</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}