import './Styles/App.css'
import axios from 'axios';
import { Link, Outlet, useNavigate} from "react-router-dom";

function App() {

  const navigate = useNavigate();
  var item_value = sessionStorage.getItem("token");
  sessionStorage.setItem("token", item_value);

  return (
    <div className="App">
      <header className="App-header">
        <div className="window-enter">
          <p id="enter">Войти в аккаунт</p>
          <input id="login-enter" type="text" placeholder="Введите логин" /><br></br>
          <input id="password-enter" type="text" placeholder="Введите пароль" /><br></br>
          <button className="button" onClick={() => {
            const login = document.getElementById('login-enter').value;
            const password = document.getElementById('password-enter').value;
            axios({
              method: 'post',
              url: 'https://localhost:7081/api/Authentication/login',
              data: {
                "email": login,
                "password": password
              },
              dataType: "dataType",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            })
              .then(data => sessionStorage.setItem('token', data['data']['token']))
              .then(response => {navigate('/menu')})
          }}>Enter</button>
          <Link to="/registration" style={{ padding: "10px" }}>Registration</Link><br/>
          <Link to="/admin" style={{ padding: "10px" }}>For Admin</Link>
        <Outlet/>
        </div>
      </header>
    </div>
  );
}

export default App;