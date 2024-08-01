import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";
import { RemovalPopUp } from "../../components/removalPopUp";
import { EditPopUp } from "../../components/editPopUp";
import { CategoryField, ListTable, ListTableFormat, ProductListContainer } from "./styles";

export const ProductList = ( { produtos }: { produtos: string } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, list, productPopUp, setProductPopUp, fetchList, themeColor } = adminContext;

    useEffect( () => {
        fetchList();
    }, [] )

    return (
        <ProductListContainer theme={themeColor}>
            <CategoryField theme={themeColor}>
                <li>perfumes</li>
                <li>maquiagem</li>
                <li>Kits</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
                <li>maquiagem</li>
            </CategoryField>

            <ListTableFormat theme={themeColor}>
                <li>Imagem</li>
                <li>Nome</li>
                <li>Preço</li>
                <li>Validade</li>
                <li>Quantidade</li>
                <li>Ação</li>
            </ListTableFormat>

            { list.map( ( product, index ) => {
                if ( produtos === "disponivel" ? product.quantity > 0 : product.quantity === 0 )
                    return (
                        <ListTable theme={themeColor} key={ index }>
                            <ListTableFormat theme={themeColor}>
                                <li><img src={ `${ url }/images/${ brand }/${ product.image }` } alt="Imagem do produto" /></li>

                                <li>{ product.name }</li>

                                <li>R$ { product.price }</li>

                                <li>{ product.validity }</li>

                                <li>{ product.quantity }</li>

                                <li>
                                    <button onClick={ () => setProductPopUp( { id: product._id, action: "edit" } ) }>Editar</button>

                                    <button onClick={ () => setProductPopUp( { id: product._id, action: "removal" } ) }>Remover</button>

                                    { productPopUp?.id === product._id && productPopUp.action === "removal" && <RemovalPopUp productId={ product._id } /> }
                                </li>
                            </ListTableFormat>

                            { productPopUp?.id === product._id && productPopUp.action === "edit" && <EditPopUp productImage={ product.image } /> }
                        </ListTable>
                    )
            } ) }
        </ProductListContainer>
    )
}