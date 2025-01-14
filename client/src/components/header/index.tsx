import { useContext } from "react";
import { BagSVG, LogoSVG, MagnifyingGlassSVG, ProfileSVG } from "../svgContainer";
import { SideNavigation } from "../sideNavigation";
import { Bag } from "../bag";
import { HeaderContainer, Nav, Hamburguer, Ul, Span, Form, Input, CategoryField, SVGContainer } from "./styles";
import { AdminContext } from "../../context/adminContext";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { theme, setTheme, isBag, isNav, setIsNav } = adminContext;

    return (
        <HeaderContainer >
            <Nav>
                <Hamburguer onClick={ () => setIsNav( true ) }></Hamburguer>

                <a href="/">
                    <LogoSVG />
                </a>

                <Form>
                    <Input type="text" placeholder="buscar produto ..." />
                    <MagnifyingGlassSVG />
                </Form>

                <SVGContainer>
                    <BagSVG />
                    <Span>0</Span>

                    <ProfileSVG />
                </SVGContainer>
            </Nav>

            <Ul>
                <li onClick={ () => setTheme( "avonColor" ) } className={ theme === "avonColor" ? "active" : "" }>Produtos Avon</li>

                <li onClick={ () => setTheme( "naturaColor" ) } className={ theme === "naturaColor" ? "active" : "" }>Produtos Natura</li>
            </Ul>

            <CategoryField>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
                <li>Perfumes</li>
            </CategoryField>

            { isNav && <SideNavigation /> }

            { isBag && <Bag /> }
        </HeaderContainer>
    )
}