import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';



function HomeModal(props) {

    const [data, setData] = useState({
        fullName: "",
        address: "",
        age: 0
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    function createEmployee() {
        const empData = {
            fullName: data.fullName,
            address: data.address,
            age: data.age
        };

        axios.post("https://localhost:7259/api/Employee/Create", empData).then((response) => { console.log(response) }).catch((err)=>{
            console.log(err.message)
        });

        props.setIsOpen(false);
    }

    return (
        <div>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <label for="">Full name</label>
                    <input
                        className='form-control'
                        type="text"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                    />
                    <label for="">Address</label>
                    <input
                        className='form-control'
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                    />
                    <label for="">Age</label>
                    <input
                        className='form-control'
                        type="number"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => createEmployee()} color="primary" >
                        Add
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { props.setIsOpen(false) }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default HomeModal
