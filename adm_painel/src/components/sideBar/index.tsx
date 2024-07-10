import { NavLink, useLocation } from "react-router-dom"
import "./styles.css"
import { useEffect, useState } from "react";

export const SideBar = () => {
    const { state } = useLocation();
    const [ location, setLocation ] = useState( "/avon" );

    useEffect( () => {
        if ( state ) setLocation( state )
    }, [ state ] )

    return (
        <aside>
            <NavLink to={ `${ location }/adicionar-produto` }><button className="btn" >Adicionar Produto</button></NavLink>

            <NavLink to={ `${ location }/lista-dos-produtos` }><button className="btn" >Lista dos Produtos</button></NavLink>

            <NavLink to={ `${ location }/produtos-indisponiveis` }><button className="btn" >Produtos Indisponíveis</button></NavLink>
        </aside>
    )
}