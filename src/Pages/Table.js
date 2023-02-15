import axios from 'axios';
import '../Styles/Tables.css';

function Table() {

    axios({
        method: 'get',
        url: 'url table',
        data: {},
        dataType: 'dataType',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => {
        for (const item of data.value) {
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
            tbody.append(tr);
        }
        return (
            <table></table>
        );
    })
}

export default Table;