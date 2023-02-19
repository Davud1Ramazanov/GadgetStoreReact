import axios from 'axios';
import '../Styles/Tables.css';

function Table() {

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
            let table = document.getElementsByClassName('table');
            let tbody = document.createElement('tbody');
            tbody.className = "tbody";

            let tr = document.createElement('tr');
            tr.setAttribute('id', `${item['id']}`)

            let id = document.createElement('td');
            id.innerText = `${item['id']}`;
            id.setAttribute('id', `${item['id']}`);
            tr.append(id);

            let namecategory = document.createElement('td');
            namecategory.innerText = `${item['nameGadgets']}`;
            namecategory.setAttribute('nameGadgets', `${item['nameGadgets']}`);
            tr.append(namecategory);

            let deletecategory = document.createElement('button');
            deletecategory.className = "del-btn-category";
            deletecategory.setAttribute('id', `${item['id']}`);
            deletecategory.innerText = "Delete";

            deletecategory.addEventListener('click', (e => {
                $.ajax({
                    type: "POST",
                    url: `https://localhost:7093/api/Categories/DeleteCategory?id=${item['id']}`,
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + getToken()
                    },
                    success: function (response) {
                        alert('Successful delete!')
                        location.reload();
                    }
                });
            }))
            tr.append(deletecategory);
            tbody.append(tr);
            table.append(tbody);
        }
        return (
            <div className="table-gadgets">
                <h1>Category</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                </table>
                <br /><button id="find">Get</button>
            </div>
        );
    })

    axios({
        method: 'GET',
        url: 'https://localhost:7081/api/Gadget',
        data: {},
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        for (const item of data.value) {
            let table = document.getElementsByClassName('table');
            var tbody = document.createElement('tbody');
            tbody.className = "tbody";

            var tr = document.createElement('tr');
            tr.setAttribute('id', `${item['id']}`)

            var img = document.createElement('td');
            var image = document.createElement('img');
            image.setAttribute('src', `${item['image']}`);
            image.setAttribute('width', '50');
            image.style.height = 10;
            img.append(image);
            tr.append(img)

            var id = document.createElement('td');
            id.innerText = `${item['id']}`;
            id.setAttribute('id', `${item['id']}`);
            tr.append(id);

            var idcategory = document.createElement('td');
            idcategory.innerText = `${item['idCategory']}`;
            idcategory.setAttribute('idCategory', `${item['idCategory']}`);
            tr.append(idcategory);

            var nameprod = document.createElement('td');
            nameprod.innerText = `${item['name']}`;
            nameprod.setAttribute('name', `${item['name']}`);
            tr.append(nameprod);

            var priceprod = document.createElement('td');
            priceprod.innerText = `${item['price']} USD`;
            priceprod.setAttribute('price', `${item['price']}`);
            tr.append(priceprod);

            var deletebutton = document.createElement('button');
            deletebutton.className = "del-btn";
            deletebutton.setAttribute('id', `${item['id']}`);
            deletebutton.innerText = "Delete";
            tr.append(deletebutton);
            tbody.append(tr);
            table.append(tbody);
        }
        return (
            <div className="table-gadgets">
                <h1>Gadgets</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">ID</th>
                            <th scope="col">ID Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                </table>
                <br /><button id="btn">Get</button>
            </div>
        );
    })

    axios({
        method: 'POST',
        url: 'https://localhost:7093/api/Gadgets/EditGadget',
        data: JSON.stringify({
            idCategory: $("#edit-idprod").val(),
            name: $("#edit-prod").val(),
            price: $("#edit-priceprod").val(),
            image: $("#edit-img").val()
        }),
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        return (
            <div id="myModal" class="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h1>Edit gadgets</h1>
                    </div>
                    <div class="modal-body">
                        <input id="edit-id" type="number" className="input" placeholder="Enter id" />
                        <input id="edit-idprod" type="number" className="input" placeholder="Enter id category" />
                        <input id="edit-img" type="text" className="input" placeholder="Enter url image" />
                        <input id="edit-prod" type="text" className="input" placeholder="Enter name product" />
                        <input id="edit-priceprod" type="number" className="input" placeholder="Enter price product" />
                        <br /><button id="edit-confirm-prod">Create</button>
                    </div>
                </div>
            </div>
        );
    })


    axios({
        method: 'POST',
        url: 'https://localhost:7093/api/Register/RegManager',
        data: JSON.stringify({
            login: $("#add-login").val(),
            password: $("#add-password").val(),
            email: $("#add-email").val()
        }),
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        return (
            <div id="for-crud">
                <div className="container">
                    <h1>Create Manager</h1>
                    <input id="add-login" type="number" className="input" placeholder="Enter login" />
                    <input id="add-password" type="number" className="input" placeholder="Enter password" />
                    <input id="add-email" type="number" className="input" placeholder="Enter email" />
                    <br /><button id="add-manager">Create</button>
                </div>
            </div>
        );
    })

    axios({
        method: 'POST',
        url: 'https://localhost:7093/api/Register/DelManager',
        data: JSON.stringify({
            login: $("#del-login").val(),
        }),
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        return (
            <div class="container">
                <h1>Delete Manager</h1>
                <input id="del-login" type="text" class="input" placeholder="Enter login" />
                <br /><button id="del-manager">Delete</button>
            </div>
        );
    })

    axios({
        method: 'POST',
        url: 'https://localhost:7093/api/Categories/CategoryCreate',
        data: JSON.stringify({
            nameGadget: $("#add-namegadget").val(),
        }),
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        return (
            <div class="container">
                <h1>Create categories</h1>
                <input id="add-namegadget" type="number" class="input" placeholder="Enter name gadget" />
                <br /><button id="add-gadgetname">Create</button>
            </div>
        );
    })

    axios({
        method: 'POST',
        url: 'https://localhost:7093/api/Gadgets/CreateGadget',
        data: JSON.stringify({
            idCategory: $("#add-idcategory").val(),
            name: $("#add-name").val(),
            price: $("#add-price").val(),
            image: $("#add-img").val()
        }),
        dataType: 'dataType',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        return (
            <div class="container">
                <h1>Create product</h1>
                <input id="add-idcategory" type="number" class="input" placeholder="Enter id category" />
                <input id="add-img" type="text" class="input" placeholder="Enter url image" />
                <input id="add-name" type="text" class="input" placeholder="Enter name product" />
                <input id="add-price" type="number" class="input" placeholder="Enter price product" />
                <br /><button id="add-prod">Create</button>
            </div>
        );
    })
}

export default Table;