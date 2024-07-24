import { NavLink } from "react-router-dom"
import "./styles.css"
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

export const SideBar = () => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { brand } = adminContext;

    return (
        <>
            { brand !== "/" && <aside>
                <NavLink to={ `${ brand }/adicionar-produto` }><button className="btn" >Adicionar Produto</button></NavLink>

                <NavLink to={ `${ brand }/lista-dos-produtos` }><button className="btn" >Lista dos Produtos</button></NavLink>

                <NavLink to={ `${ brand }/produtos-indisponiveis` }><button className="btn" >Produtos Indisponíveis</button></NavLink>
            </aside> }
        </>
    )
}