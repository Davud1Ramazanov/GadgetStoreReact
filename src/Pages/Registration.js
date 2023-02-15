import '../Styles/Reg.css';

function Registration() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="window-reg">
          <p id="reg">Окно регистрации</p>
          <input id="login-reg" type="text" placeholder="Введите логин" /><br></br>
          <input id="password-reg" type="text" placeholder="Введите пароль" /><br></br>
          <button class="button">Enter</button>
        </div>
      </header>
    </div>
  );
}

export default Registration;
