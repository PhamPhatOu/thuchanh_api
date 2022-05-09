
import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function ModalExam({show,handleClose,infoUser}) {
    return (
      <>
       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{infoUser?.name}</Modal.Title>
          </Modal.Header>
          
          <Modal.Body><h5>Địa chỉ</h5> <p> Số nhà: {infoUser?.address.suite}</p> 
          <p>Đường:   {infoUser?.address.street}</p>    <p>Thành Phố: {infoUser?.address.city}</p>
          <p>SĐT: {infoUser?.phone}</p>
          <p>website: {infoUser?.website}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
}
