import React, {useState } from "react"
import { Modal, Button } from "react-bootstrap"

export default function Errors(props){
    const [display, set_Display] = useState(true)
    console.log("display", display)

    const errorMessage = props.error
    console.log("error message", errorMessage)

    function exit(){
        set_Display(false)
    }

    return(
        <Modal
            show={display}
            onHide={exit}
            backdrop="static"
            keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>
                Oops, Error occurred!?!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {errorMessage}
            <br />
            Please click close to exit.
        </Modal.Body>
        <Modal.Footer>
            <Button 
                variant="outline-info"
                onClick={exit}>
                Close
            </Button>
        </Modal.Footer>
        </Modal>
    )
}