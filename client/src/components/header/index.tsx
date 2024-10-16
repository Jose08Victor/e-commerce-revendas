import { useContext } from "react";
import { HeaderLogo } from "../headerLogo";
import { SideNavigation } from "../sideNavigation";
import { Bag } from "../bag";
import { HeaderContainer, Nav, Hamburguer, Ul, Span, Form, Button, Input, CategoryField, SVGContainer, BagSVG, ProfileSVG } from "./styles";
import { AdminContext } from "../../context/adminContext";

export const Header = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { theme, setTheme, isBag, setIsBag, isNav, setIsNav } = adminContext;

    return (
        <HeaderContainer >
            <Nav>
                <Hamburguer onClick={ () => setIsNav( true ) }></Hamburguer>

                <HeaderLogo />

                <Form>
                    <Input type="text" placeholder="buscar produto ..." />
                    <Button type="button" />
                </Form>

                <SVGContainer>
                    <BagSVG onClick={ () => setIsBag( true ) } enable-background="new 704.081 796 200 200" viewBox="704.081 796 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m891.876 977.909-6.938-125.811h-34.661v-10.157c0-25.333-20.608-45.941-45.94-45.941s-45.94 20.609-45.94 45.941v10.157h-36.161l-5.969 126.355-.006.219c-.049 4.547 1.758 9.01 4.955 12.239 3.198 3.233 7.641 5.089 12.19 5.089h141.351c4.688 0 9.228-1.953 12.453-5.36 3.224-3.407 4.925-8.047 4.666-12.731zm-121.497-135.968c0-18.725 15.233-33.959 33.958-33.959 18.724 0 33.958 15.234 33.958 33.959v10.157h-67.917v-10.157zm108.128 140.461c-.973 1.026-2.339 1.615-3.751 1.615h-141.351c-1.37 0-2.707-.558-3.672-1.534-.942-.95-1.483-2.257-1.492-3.597l5.423-114.806h24.731v15.173c0 3.309 2.682 5.991 5.991 5.991s5.991-2.682 5.991-5.991v-15.173h67.917v15.173c0 3.309 2.682 5.991 5.991 5.991s5.99-2.682 5.99-5.991v-15.173h23.321l6.313 114.49c.081 1.41-.431 2.807-1.402 3.832z" /></BagSVG>

                    <Span>0</Span>

                    <ProfileSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></ProfileSVG>
                </SVGContainer>
            </Nav>

            <Ul>
                <li onClick={ () => setTheme( "avonColor" ) } className={theme === "avonColor" ? "active" : ""}>Produtos Avon</li>

                <li onClick={ () => setTheme( "naturaColor" ) } className={theme === "naturaColor" ? "active" : ""}>Produtos Natura</li>
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