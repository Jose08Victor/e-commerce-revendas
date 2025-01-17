import { useContext } from "react";
import avonIcon from "../../assets/avonIcon.png";
import naturaIcon from "../../assets/naturaIcon.png";
import { AdminContext } from "../../context/adminContext";
import { Nav, Form, Input, Div, ImgContainer, Ul, LoginContainer } from "./styles";
import { MagnifyingGlassSVG } from "../svgContainer";

export const SideNavigation = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setIsNav, theme, setTheme, brand, setBrand, category, setCategory } = adminContext;

    return (
        <Nav>
            <Div>
                <Form>
                    <Input type="text" placeholder="buscar produto ..." />
                    <MagnifyingGlassSVG />
                </Form>

                <p onClick={ () => setIsNav( false ) }>x</p>
            </Div>

            <ImgContainer>
                <img onClick={ () => {
                    setTheme( "avonColor" )
                    setBrand( "avon" )
                } } className={ theme === "avonColor" ? "active" : "" } src={ avonIcon } alt="" />

                <img onClick={ () => {
                    setTheme( "naturaColor" )
                    setBrand( "natura" )
                } } className={ theme === "naturaColor" ? "active" : "" } src={ naturaIcon } alt="" />
            </ImgContainer>

            <Ul>
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
            </Ul>

            <LoginContainer>
                <button>Login</button>

                <button>Cadastrar-se</button>
            </LoginContainer>
        </Nav>
    )
}