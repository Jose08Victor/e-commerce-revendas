import { useContext, useEffect } from "react";
import { RemovalPopUp } from "../../components/removalPopUp";
import { EditKitPopUp } from "../../components/editKitPopUp";
import { AdminContext } from "../../context/adminContext";
import { KitListTableFormat } from "./styles";
import { ActionButton, ListContainer, ListTable } from "../styles/pageStyles";

export const KitList = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, themeColor, popUp, setPopUp, setProductName, list, getKitList, setType } = adminContext;

    useEffect( () => {
        getKitList();
    }, [getKitList] );

    return (
        <ListContainer theme={ themeColor }>
            <KitListTableFormat theme={ themeColor }>
                <li>Imagem</li>
                <li>Contéudo</li>
                <li>Preço</li>
                <li>Quantidade</li>
                <li>Ação</li>
            </KitListTableFormat>

            { list.kits.map( ( product, index ) => {
                return (
                    <ListTable theme={ themeColor } key={ index }>
                        <KitListTableFormat theme={ themeColor }>
                            <li><img src={ `${ url }/images/${ brand }/${ product.image }` } alt="Imagem do produto" /></li>

                            <li>{ product.nameOfProducts.map( ( name, index ) => {
                                return <h4 key={ index }>{ name }</h4>
                            } ) }</li>

                            <li>R$ { product.price }</li>

                            <li>{ product.quantity }</li>

                            <ActionButton theme={ themeColor }>
                                <button onClick={ () => {
                                    setPopUp( { id: product._id, action: "edit kit" } );
                                    setProductName( product.nameOfProducts );
                                    setType( "Kit" );
                                } }>Editar</button>

                                <button onClick={ () => {
                                    setPopUp( { id: product._id, action: "removal" } );
                                    setType( "Kit" );
                                } }>Remover</button>

                                { popUp?.id === product._id && popUp.action === "removal" && <RemovalPopUp productId={ product._id } /> }
                            </ActionButton>
                        </KitListTableFormat>

                        { popUp?.id === product._id && popUp.action === "edit kit" && <EditKitPopUp productImage={ product.image } /> }
                    </ListTable>
                )
            } ) }
        </ListContainer >
    )
};