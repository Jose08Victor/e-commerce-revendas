import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Aside, Button } from "./styles";

export const SideBar = () => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { brand, themeColor } = adminContext;

    return (
        <>
            { brand !== "/" && <Aside theme={themeColor}>
                <NavLink to={ `${ brand }/adicionar-produto` }><Button theme={themeColor} >Adicionar Produto</Button></NavLink>

                <NavLink to={ `${ brand }/lista-dos-produtos` }><Button theme={themeColor} >Lista dos Produtos</Button></NavLink>

                <NavLink to={ `${ brand }/produtos-indisponiveis` }><Button theme={themeColor} >Produtos Indisponíveis</Button></NavLink>
            </Aside> }
        </>
    )
}