import React, { useState } from 'react'
import Slider from '../components/home/Slider'
import Brand from '../components/home/Brand'
import '../assets/css/home.scss';
import { Button } from 'reactstrap';
import HomeModal from '../components/home/HomeModal';

function Home() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const employees = ["Ismayil Efendizade","Fidan Bashirova", "Kubra Memmedova","Huseyn Huseynov", "Pervin Mirzeyev", "Aydemir Resulov"]

    function increment(elem) {
        if (parseInt(elem.previousElementSibling.innerText) === 10) {
            return;
        }
        setCount(count + 1);
    }

    function decrement(elem) {
        if (parseInt(elem.previousElementSibling.previousElementSibling.innerText) <= 0) {
            return;
        }
        setCount(count - 1);
    }

    function showModal() {
        setIsOpen(true);
    }

    

    return (
        <div className='container mt-2'>
            <h1>Welcome</h1>
            {/* <h2 className='mt-5'>{count}</h2>
            <Button onClick={(e) => increment(e.target)} color='success'>+</Button>
            <Button className='mx-2' onClick={(e) => decrement(e.target)} color='warning'>-</Button>
            <Slider name={"Ismayil"} /> */}

            <ul className="list-group mt-4">
                {
                    employees.map(function(emp){
                        return <li className="list-group-item">{emp}</li>
                    })
                  
                }
                
               
            </ul>

            <HomeModal setIsOpen={setIsOpen} isOpen={isOpen} />

            <Button onClick={() => showModal()} color='success' className='mt-5'>Show modal</Button>

        </div>
    )
}

export default Home
