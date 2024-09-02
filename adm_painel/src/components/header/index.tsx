import { Link } from "react-router-dom";
import { MutableRefObject, useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";
import { HeaderContainer, Logo, Nav, Ul, Links, P, LoginButton, Hamburguer, Menu } from "./styles";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );
    const { themes, themeColor, setThemeColor, setBrand } = adminContext;

    const navRef = useRef<HTMLElement | null>( null );
    const avonRef = useRef<HTMLAnchorElement | null>( null );
    const naturaRef = useRef<HTMLAnchorElement | null>( null );

    const navClass = () => navRef.current?.classList.toggle( "toggle" );

    const toggleClass = ( Ref1: MutableRefObject<HTMLAnchorElement | null>, Ref2: MutableRefObject<HTMLAnchorElement | null> ) => {
        Ref1.current?.classList.add( "active" );
        Ref2.current?.classList.remove( "active" );
        navRef.current?.classList.remove( "toggle" );
    };

    const removeClass = () => {
        naturaRef.current?.classList.remove( "active" );
        avonRef.current?.classList.remove( "active" );
        navRef.current?.classList.remove( "toggle" );
    };

    return (
        <HeaderContainer theme={ themeColor }>
            <Link to="/" onClick={ () => {
                removeClass();
                setBrand( "/" );
                setThemeColor( [themes.defaultColor] );
            } }>
                <Logo src="https://img.freepik.com/psd-gratuitas/circulo-vermelho_23-2150588573.jpg?semt=sph" alt="Test" />
            </Link>

            <Nav ref={ navRef }>
                <input type="checkbox" id="menu-hamburguer" />

                <label htmlFor="menu-hamburguer">
                    <Menu onClick={ navClass } >
                        <Hamburguer theme={ themeColor }></Hamburguer>
                    </Menu>
                </label>

                <Ul>
                    <Links theme={ themeColor }>
                        <Link ref={ avonRef } to="/avon/adicionar-item" onClick={ () => {
                            setBrand( "avon" );
                            toggleClass( avonRef, naturaRef );
                            setThemeColor( [themes.avonColor] );
                        } }><P>Produtos Avon</P></Link>

                        <Link ref={ naturaRef } to="/natura/adicionar-item" onClick={ () => {
                            setBrand( "natura" );
                            toggleClass( naturaRef, avonRef );
                            setThemeColor( [themes.naturaColor] );
                        } } ><P>Produtos Natura</P></Link>
                    </Links>

                    <li>
                        <LoginButton theme={ themeColor }>Log out</LoginButton>
                    </li>
                </Ul>
            </Nav>
        </HeaderContainer>
    );
};