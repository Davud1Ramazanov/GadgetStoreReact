import './Styles/App.css'
import NavComponent from './NavComponent';
import Registration from './Pages/Registration';
import Table from './Pages/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  var item_value = sessionStorage.getItem("token");
  sessionStorage.setItem("token", item_value);

  return (
    <div className="App">
      <header className="App-header">

        <div className="window-enter">
          <p id="enter">Войти в аккаунт</p>
          <input id="login-enter" type="text" placeholder="Введите логин" /><br></br>
          <input id="password-enter" type="text" placeholder="Введите пароль" /><br></br>
          <button class="button" onClick={() => {
            const login = document.getElementById('login-enter').value;
            const password = document.getElementById('password-enter').value;
            axios({
              method: 'post',
              url: 'https://localhost:7081/api/Authentication/login',
              data: {
                "login": login,
                "password": password
              },
              dataType: "dataType",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            }).then(data => sessionStorage.setItem('token', data['data']['token']));
          }}>Enter</button>
          <BrowserRouter>
            <Routes>
              <Route path='/registration' element={<Registration />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;