import { Link } from "react-router-dom";
import "./styles.css"
import { MutableRefObject, useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );
    const { setBrand } = adminContext;

    const navRef = useRef<HTMLElement | null>( null );
    const avonRef = useRef<HTMLAnchorElement | null>( null );
    const naturaRef = useRef<HTMLAnchorElement | null>( null );

    const navClass = () => navRef.current?.classList.toggle( "toggle" );

    const toggleClass = ( Ref1: MutableRefObject<HTMLAnchorElement | null>, Ref2: MutableRefObject<HTMLAnchorElement | null> ) => {
        Ref1.current?.classList.add( "active" );
        Ref2.current?.classList.remove( "active" );
        navRef.current?.classList.remove( "toggle" );
    }

    const removeClass = () => {
        naturaRef.current?.classList.remove( "active" );
        avonRef.current?.classList.remove( "active" );
        navRef.current?.classList.remove( "toggle" );
    }

    return (
        <header className="header">
            <Link to="/" onClick={ () => {
                removeClass();
                setBrand( "/" );
            } }>
                <img className="logo" src="https://img.freepik.com/psd-gratuitas/circulo-vermelho_23-2150588573.jpg?semt=sph" alt="Test" />
            </Link>

            <nav ref={ navRef }>
                <input type="checkbox" id="menu-hamburguer" />

                <label htmlFor="menu-hamburguer">
                    <div className="menu" onClick={ navClass } >
                        <span className="hamburguer"></span>
                    </div>
                </label>

                <ul>
                    <li className="links">
                        <Link ref={ avonRef } to="/avon/adicionar-produto" onClick={ () => {
                            setBrand( "avon" );
                            toggleClass( avonRef, naturaRef );
                        } }><p>Produtos Avon</p></Link>

                        <Link ref={ naturaRef } to="/natura/adicionar-produto" onClick={ () => {
                            setBrand( "natura" );
                            toggleClass( naturaRef, avonRef );
                        } } ><p>Produtos Natura</p></Link>
                    </li>

                    <li className="login-btn">
                        <button>Log out</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}