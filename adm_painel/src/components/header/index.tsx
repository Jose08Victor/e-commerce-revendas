import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/adminContext";
import { HeaderContainer, Logo, Nav, Ul, Links, Li, Hamburguer, Menu } from "./styles";
import logo_mc from "../../assets/logo_MC.png";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themes, themeColor, setThemeColor, brand, setBrand } = adminContext;

    const [ isToggle, setIsToggle ] = useState( false );

    return (
        <HeaderContainer theme={ themeColor }>
            <Link to="/" onClick={ () => { setBrand( "/" ), setIsToggle( false ), setThemeColor( [ themes.defaultColor ] ) } }>
                <Logo src={ logo_mc } alt="Logo" />
            </Link>

            <Nav className={ isToggle ? "toggle" : "" }>
                <input type="checkbox" id="menu-hamburguer" />

                <label htmlFor="menu-hamburguer">
                    <Menu onClick={ () => setIsToggle( isToggle ? false : true ) } >
                        <Hamburguer theme={ themeColor }></Hamburguer>
                    </Menu>
                </label>

                <Ul>
                    <Links theme={ themeColor }>
                        <Link to="/avon/adicionar-item" className={ brand === "avon" ? "active" : "" }
                            onClick={ () => { setBrand( "avon" ), setIsToggle( false ), setThemeColor( [ themes.avonColor ] ) } }>
                            Produtos Avon</Link>

                        <Link to="/natura/adicionar-item" className={ brand === "natura" ? "active" : "" }
                            onClick={ () => { setBrand( "natura" ), setIsToggle( false ), setThemeColor( [ themes.naturaColor ] ) } } >
                            Produtos Natura</Link>
                    </Links>

                    <Li theme={ themeColor }>Log out</Li>
                </Ul>
            </Nav>
        </HeaderContainer>
    );
};