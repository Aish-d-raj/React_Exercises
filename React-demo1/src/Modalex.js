import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalex(props) {
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} >
        <h4>{props.myarr[0].name}</h4>
      </Button><br></br>
      <br></br>
      <Button variant="primary" onClick={() => setShow1(true)}>
        <h4>{props.myarr[1].name}</h4>
      </Button>


      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.myarr[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{props.myarr[0].id}</p><p>{props.myarr[0].name}</p>
         <p>{props.myarr[0].email}</p></Modal.Body>
        
      </Modal>

      
      <Modal show={show1} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.myarr[1].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{props.myarr[1].id}</p><p>{props.myarr[1].name}</p>
         <p>{props.myarr[1].email}</p></Modal.Body>
        
      </Modal>

    </>
  );
}
export default Modalex;
