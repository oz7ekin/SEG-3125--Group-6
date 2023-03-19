import { Modal } from "react-bootstrap";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle as question, faUsers as about, faPhone as contact, faClock as hours, faHandsHelping as service } from '@fortawesome/free-solid-svg-icons';

export default function Help(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="fs-4"><FontAwesomeIcon icon={question} /> Information</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className="fs-5"><FontAwesomeIcon icon={about} /> About Us</h2>
        <p>
          Founded in April 2020 and based in Ottawa, Ontario, Canada. Our mission is to provide contactless delivery of low-cost Apple products for our clients in Ontario.
        </p>
        <h2 className="fs-5"><FontAwesomeIcon icon={contact} /> Contact Us</h2>
        <p>For inquiries, feel free to email us at <a href="mailto:contact@isellforless.ca">contact@isellforless.ca</a> (1-3 business days) or call us at (613) 314-2020.</p>
        <div className="row">
          <div className="col-6 text-center"><h2 className="fs-5 mb-4"><FontAwesomeIcon icon={hours} /> Operating Hours</h2>
            <p><b>Sunday:</b> Closed
              <br />
              <b>Monday:</b> 8:00&nbsp;AM&nbsp;-&nbsp;6:00&nbsp;PM
              <br />
              <b>Tuesday:</b> 8:00&nbsp;AM&nbsp;-&nbsp;6:00&nbsp;PM
              <br />
              <b>Wednesday:</b> 8:00&nbsp;AM&nbsp;-&nbsp;5:00&nbsp;PM
              <br />
              <b>Thursday:</b> 7:00&nbsp;AM&nbsp;-&nbsp;6:00&nbsp;PM
              <br />
              <b>Friday:</b> 9:00&nbsp;AM&nbsp;-&nbsp;3:00&nbsp;PM
              <br />
              <b>Saturday:</b> 10:00&nbsp;AM&nbsp;-&nbsp;3:00&nbsp;PM
            </p>
            <p>Closed on holidays.</p>
          </div>
          <div className="col-6 text-center"><h2 className="fs-5"><FontAwesomeIcon icon={service} /> Customer Service Centre</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.5212061801834!2d-75.51159146108778!3d45.453953679863936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce121776ff9477%3A0x9eafa552f4f154ec!2s2269%20Belcourt%20Blvd%2C%20Orl%C3%A9ans%2C%20ON%20K1C%201M7!5e1!3m2!1sen!2sca!4v1626549463711!5m2!1sen!2sca" width="100%" height="250" style={{ border: '0' }} allowfullscreen="" loading="lazy"
              title="Steven's Veterinary Hospital Google Maps view"></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}