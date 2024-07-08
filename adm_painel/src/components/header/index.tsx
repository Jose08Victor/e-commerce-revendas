import { Link } from "react-router-dom";
//import avon_icon from "../../assets/avon_icon.png";
//import natura_icon from "../../assets/natura_icon.png";
import "./styles.css"

export const Header = () => {
    return (
        <header className="header">
            <Link to="/"><img className="logo" src="https://img.freepik.com/psd-gratuitas/circulo-vermelho_23-2150588573.jpg?semt=sph" alt="Test" /></Link>

            <nav>
                <input type="checkbox" id="menu-hamburguer" />

                <label htmlFor="menu-hamburguer">
                    <div className="menu">
                        <span className="hamburguer"></span>
                    </div>
                </label>

                <ul>
                    <li className="links">
                        <Link to="/"><p>Produtos Avon</p></Link>

                        <Link to="/natura"><p>Produtos Natura</p></Link>
                    </li>

                    <li className="btn">
                        <button>Log out</button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}