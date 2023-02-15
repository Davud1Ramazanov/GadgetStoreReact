import '../Styles/negr';

function MainMenu() {
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
                    <input placeholder="&#128269;Search" type="text" class="input"></input><br></br>
                    <button id="find-search">Find</button>
                </div>
                <h1>Gadgets</h1>
                <div class="container"></div>
            </header>
        </div>
    );
}

export default MainMenu;