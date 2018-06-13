import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ModalTask extends Component {
    
    render() {

        var Modal = require('react-bootstrap').Modal;
        return (
            <Modal
            {...this.props}
            bsSize="small"
            aria-labelledby="contained-modal-title-sm"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="modal-task-title">Task Title</h4>
                    <p className="modal-task-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tempora quisquam eum quis in magni placeat ipsum doloremque alias eos?</p>

                    <h4 className="modal-task-btn">ACTION 01</h4>
                    <h4 className="modal-task-btn">COMPLETED</h4>
                    <h4 className="modal-task-btn">RESCHEDULE</h4>
                </Modal.Body>
            </Modal>
        );
    }
}


export default ModalTask;