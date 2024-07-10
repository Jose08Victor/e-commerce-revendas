import { Link, NavLink } from "react-router-dom";
//import avon_icon from "../../assets/avon_icon.png";
//import natura_icon from "../../assets/natura_icon.png";
import "./styles.css"

export const Header = () => {

    const toggleClass = () => document.querySelector( "nav" )?.classList.toggle( "toggle" )

    return (
        <header className="header">
            <Link to="/"><img className="logo" src="https://img.freepik.com/psd-gratuitas/circulo-vermelho_23-2150588573.jpg?semt=sph" alt="Test" /></Link>

            <nav>
                <input type="checkbox" id="menu-hamburguer" />

                <label htmlFor="menu-hamburguer">
                    <div className="menu" onClick={ toggleClass } >
                        <span className="hamburguer"></span>
                    </div>
                </label>

                <ul>
                    <li className="links">
                        <NavLink to="/avon" state={ "/avon" } onClick={ toggleClass }><p>Produtos Avon</p></NavLink>

                        <NavLink to="/natura" state={ "/natura" } onClick={ toggleClass } ><p>Produtos Natura</p></NavLink>
                    </li>

                    <li className="login-btn">
                        <button>Log out</button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}