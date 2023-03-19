import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltV as arrows, faTags as price, faStarHalfAlt as rating, faAward as quality, faMobileAlt as phone, faTabletAlt as tablet, faLaptop as laptop } from '@fortawesome/free-solid-svg-icons';
import {  faClock as watch } from '@fortawesome/free-regular-svg-icons';

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
        <div className="col-2 sticky-top text-white" style={{ height: '100vh', backgroundColor: 'red', paddingTop: '5rem' }}>
            <div className="pt-4 px-4 mb-5">
                <div className="py-2">
                    <div className="d-grid gap-2">
                       
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("Phone") }}>
                            <FontAwesomeIcon className="me-1" icon={phone} /> Phones
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("Tablet") }}>
                            <FontAwesomeIcon className="me-1" icon={tablet} /> Tablets
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("Laptop") }}>
                            <FontAwesomeIcon className="me-1" icon={laptop} /> Laptops
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={() => { props.setCategory("Watch") }}>
                            <FontAwesomeIcon className="me-1" icon={watch} /> Watchs
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
            <p className="text-center mt-5">© Designed by Group 6 SEG 3125. <a href="https://github.com/oz7ekin/oz7ekin.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>

        </div>
    );
}
