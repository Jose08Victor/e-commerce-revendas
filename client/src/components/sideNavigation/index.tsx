import { useContext } from "react";
import avonIcon from "../../assets/avonIcon.png";
import naturaIcon from "../../assets/naturaIcon.png";
import { AdminContext } from "../../context/adminContext";
import { Nav, Form, Input, Button, Div, ImgContainer, Ul, LoginContainer } from "./styles";

export const SideNavigation = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setIsNav, theme, setTheme } = adminContext;

    return (
        <Nav>
            <Div>
                <Form>
                    <Input type="text" placeholder="buscar produto ..." />
                    <Button type="button" />
                </Form>

                <p onClick={() => setIsNav(false)}>x</p>
            </Div>

            <ImgContainer>
                <img onClick={() => setTheme("avonColor")} className={theme === "avonColor" ? "active" : ""} src={ avonIcon } alt="" />

                <img onClick={() => setTheme("naturaColor")} className={theme === "naturaColor" ? "active" : ""} src={ naturaIcon } alt="" />
            </ImgContainer>

            <Ul>
                <li>perfumes</li>
                <li>kits</li>
                <li>maquiagem</li>
                <li>batom</li>
                <li>colar</li>
                <li>brincos</li>
                <li>aneís</li>
                <li>sandálias</li>
            </Ul>

            <LoginContainer>
                <button>Login</button>

                <button>Cadastrar-se</button>
            </LoginContainer>
        </Nav>
    )
}