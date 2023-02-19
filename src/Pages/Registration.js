import '../Styles/Reg.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const navigate = useNavigate();
  var item_value = sessionStorage.getItem("token");
  sessionStorage.setItem("token", item_value);

  return (
    <div className="App">
      <header className="App-header">
        <div className="window-reg">
          <p id="reg">Окно регистрации</p>
          <input id="login-reg" type="text" placeholder="Введите логин" /><br></br>
          <input id="password-reg" type="text" placeholder="Введите пароль" /><br></br>
          <button className="button" onClick={() => {
            const login = document.getElementById('login-reg').value;
            const password = document.getElementById('password-reg').value;
            axios({
              method: 'post',
              url: 'https://localhost:7243/api/authentication/registration',
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
              .then(response => {navigate('/table')})  
          }}>Enter</button>
        </div>
      </header>
    </div>
  );
}

export default Registration;
