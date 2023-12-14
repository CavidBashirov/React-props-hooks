import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function HomeModal(props) {

    return (
        <div>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <label for="">Name</label>
                    <input className='form-control' type="text"/>
                    <label for="">surname</label>
                    <input className='form-control' type="text"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >
                        Add
                    </Button>{' '}
                    <Button color="secondary" onClick={()=>{props.setIsOpen(false)}}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default HomeModal
