import { Link, Outlet } from "react-router-dom";

function NavComponent() {
    return (
        <div>
            <nav>
                <a href="#"><Link to="/registration">Нет аккаунта? Зарегистрироваться.</Link></a>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavComponent;