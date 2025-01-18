import { useContext } from "react";
import { BagSVG, LogoSVG, MagnifyingGlassSVG, ProfileSVG } from "../svgContainer";
import { SideNavigation } from "../sideNavigation";
import { Bag } from "../bag";
import { HeaderContainer, Nav, Hamburguer, Ul, Span, Form, Input, CategoryField, SVGContainer } from "./styles";
import { AdminContext } from "../../context/adminContext";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { theme, setTheme, isBag, isNav, setIsNav, brand, setBrand, category, setCategory, inTheBag } = adminContext;

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
                    <Span>{inTheBag.length}</Span>

                    <ProfileSVG />
                </SVGContainer>
            </Nav>

            <Ul>
                <li onClick={ () => {
                    setTheme( "avonColor" )
                    setBrand( "avon" )
                } } className={ theme === "avonColor" ? "active" : "" }>Produtos Avon</li>

                <li onClick={ () => {
                    setTheme( "naturaColor" )
                    setBrand( "natura" )
                } } className={ theme === "naturaColor" ? "active" : "" }>Produtos Natura</li>
            </Ul>

            <CategoryField>
                { brand === "avon" ?
                    <>
                        <li onClick={ () => setCategory( "Perfumes" ) }
                            className={ category === "Perfumes" ? "selected" : "" }>Perfumes</li>

                        <li onClick={ () => setCategory( "Kits" ) }
                            className={ category === "Kits" ? "selected" : "" }>Kits</li>

                        <li onClick={ () => setCategory( "Rosto" ) }
                            className={ category === "Rosto" ? "selected" : "" }>Rosto</li>

                        <li onClick={ () => setCategory( "Lábios" ) }
                            className={ category === "Lábios" ? "selected" : "" }>Lábios</li>

                        <li onClick={ () => setCategory( "Olhos" ) }
                            className={ category === "Olhos" ? "selected" : "" }>Olhos</li>

                        <li onClick={ () => setCategory( "Unhas" ) }
                            className={ category === "Unhas" ? "selected" : "" }>Unhas</li>

                        <li onClick={ () => setCategory( "Desodorantes" ) }
                            className={ category === "Desodorantes" ? "selected" : "" }>Desodorantes</li>

                        <li onClick={ () => setCategory( "Cuidados Diários" ) }
                            className={ category === "Cuidados Diários" ? "selected" : "" }>Cuidados Diários</li>

                        <li onClick={ () => setCategory( "Casa&Estilo" ) }
                            className={ category === "Casa&Estilo" ? "selected" : "" }>Casa & Estilo</li>
                    </>
                    :
                    <>
                        <li onClick={ () => setCategory( "Perfumes" ) }
                            className={ category === "Perfumes" ? "selected" : "" }>Perfumes</li>

                        <li onClick={ () => setCategory( "Kits" ) }
                            className={ category === "Kits" ? "selected" : "" }>Kits</li>

                        <li onClick={ () => setCategory( "Cuidados Diários" ) }
                            className={ category === "Cuidados Diários" ? "selected" : "" }>Cuidados Diários</li>

                        <li onClick={ () => setCategory( "Maquiagem" ) }
                            className={ category === "Maquiagem" ? "selected" : "" }>Maquiagem</li>
                    </> }
            </CategoryField>

            { isNav && <SideNavigation /> }

            { isBag && <Bag /> }
        </HeaderContainer>
    )
}