import React from "react";

import { Button, Modal } from "react-bootstrap"
import { useState } from "react";


const ModalWindow = ({ title, nameButton, children, onHandleSubmit, disabled }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        onHandleSubmit();
        setShow(false);
    };

    return (
        <div 
        style={{ paddingLeft: ".7rem"}}
        >
            <button  type="button" className=" btn btn-outline-primary me-2" onClick={handleShow} style={{borderColor: "#00008B", color: "#00008B" }}>
                {title}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                    <Button variant="primary"
                        disabled={disabled}
                        onClick={onSubmit} >
                        {nameButton}
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalWindow
