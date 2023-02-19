import '../Styles/Menu.css';

function MainMenu() {

    function getToken() {
        return sessionStorage.getItem("AccsessToken");
    }

    axios({
        method: 'GET',
        url: 'https://localhost:7093/api/Categories/CategoryList',
        data: {},
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        for (const item of data.value) {
            let cont = document.getElementsByClassName('container');
            let card = document.createElement('div');
            card.className = 'card';

            let img = document.createElement('td');
            let image = document.createElement('img');
            image.setAttribute('src', `${item['image']}`);
            image.setAttribute('width', '80');
            image.style.height = 30;
            img.className = "regular-img";
            img.append(image);
            card.append(img)

            let name = document.createElement('h2');
            name.innerText = `${item['name']}`;
            name.setAttribute('name', `${item['name']}`);
            card.append(name);

            let price = document.createElement('h2');
            price.innerText = `${item['price']} USD`;
            price.setAttribute('price', `${item['price']}`);
            card.append(price);

            let buybutton = document.createElement('button');
            buybutton.className = "buy-button";
            buybutton.setAttribute('id', `${item['id']}`);
            buybutton.innerText = "Buy";

            buybutton.addEventListener('click', (e)=>{
                if(getToken()==null){
                    alert('You need gadget!');
                }
                else{
                    alert('You bought gadget!');
                }
            });
            card.append(buybutton);
            tbody.append(tr);
            cont.append(tbody);
        }

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
                        <input placeholder="&#128269;Search" type="text" className="input"></input><br></br>
                        <button id="find-search">Find</button>
                    </div>
                    <h1>Gadgets</h1>
                    <div className="container"></div>
                </header>
            </div>
        );
    })
}

export default MainMenu;