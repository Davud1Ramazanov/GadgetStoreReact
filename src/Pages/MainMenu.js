import '../Styles/Menu.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function MainMenu() {

    function getToken() {
        return sessionStorage.getItem("token");
    }

    const [gadgetCount, setGadgetCount] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://localhost:7108/api/Gadgets/GadgetsList',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setGadgetCount(response.data);
        })
    })

    return (
        <div className="App">
            <header className="App-header">
                <nav className="top-menu">
                    <ul className="menu-main">
                        <li id="phones"><a href="">Phones</a></li>
                        <li><a href="">Laptop</a></li>
                        <li><a href="">Smart Watch</a></li>
                    </ul>
                </nav>
                <div className="group">
                    <h1>Gadgets Market</h1>
                    <input placeholder="&#128269;Search" type="text" className="search"></input><br></br>
                    <button id="find-search">Find</button>
                </div>
                <h1>Gadgets</h1>
                <div className="cards-gadget">
                    {gadgetCount.map(gadget => (
                        <div className='card' key={gadget.id}>
                            <img src={`${gadget.image}`} className="regular-img" style={{height: 130, width: 100}}></img>
                            <h2>{gadget.name}</h2>
                            <p>{gadget.price} USD</p>
                            <button className="buy-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}
export default MainMenu;