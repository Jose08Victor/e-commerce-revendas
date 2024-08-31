import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Aside } from "./styles";

export const SideBar = () => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { brand, themeColor } = adminContext;

    return (
        <>
            { brand !== "/" && <Aside theme={ themeColor }>
                <NavLink to={ `${ brand }/adicionar-item` }>Adicionar Produto / Kit</NavLink>

                <NavLink to={ `${ brand }/lista-dos-produtos` }>Lista dos Produtos</NavLink>

                <NavLink to={ `${ brand }/kits-presentes` }>Lista dos Kits/Presentes</NavLink>

                <NavLink to={ `${ brand }/produtos-indisponiveis` }>Produtos Indisponíveis</NavLink>
            </Aside> }
        </>
    )
};