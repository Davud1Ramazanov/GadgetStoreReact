import '../Styles/Admin.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignAdmin() {

    const navigate = useNavigate();
    var item_value = sessionStorage.getItem("token");
    sessionStorage.setItem("token", item_value);

    return (
        <div class="window-enter">
            <p id="enter">Войти в аккаунт</p>
            <input id="login-enter" type="text" placeholder="Введите логин" /><br />
            <input id="password-enter" type="text" placeholder="Введите пароль" /><br />
            <button className="button" onClick={() => {
                const login = document.getElementById('login-enter').value;
                const password = document.getElementById('password-enter').value;
                axios({
                    method: 'post',
                    url: 'https://localhost:7093/api/Authenticate/login',
                    data: {
                        "login": login,
                        "password": password
                    },
                    dataType: "dataType",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                    .then(data => sessionStorage.setItem('token', data['data']['token']))
                    .then(response => { navigate('/table') })
            }}>Enter</button>
        </div>
    );
}

export default SignAdmin;