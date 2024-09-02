import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/adminContext";
import { RemovalPopUp } from "../../components/removalPopUp";
import { EditProductPopUp } from "../../components/editProductPopUp";
import { CategoryField, ProductListTableFormat } from "./styles";
import { ActionButton, ListContainer, ListTable } from "../styles/pageStyles";

export const ProductList = ( { products }: { products: string } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, list, popUp, setPopUp, getProductList, themeColor, setType } = adminContext;

    const [ category, setCategory ] = useState( "Perfumes" );

    useEffect( () => {
        getProductList();
    }, [getProductList] );

    return (
        <ListContainer theme={ themeColor }>
            <CategoryField theme={ themeColor }>
                { brand === "avon" ?
                    <>
                        <li onClick={ () => setCategory( "Perfumes" ) }
                            className={ category === "Perfumes" ? "selected" : "" }>Perfumes</li>

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

                        <li onClick={ () => setCategory( "Maquiagem" ) }
                            className={ category === "Maquiagem" ? "selected" : "" }>Maquiagem</li>

                        <li onClick={ () => setCategory( "Cuidados Diários" ) }
                            className={ category === "Cuidados Diários" ? "selected" : "" }>Cuidados Diários</li>
                    </> }
            </CategoryField>

            <ProductListTableFormat theme={ themeColor }>
                <li>Imagem</li>
                <li>Nome</li>
                <li>Preço</li>
                <li>Validade</li>
                <li>Quantidade</li>
                <li>Ação</li>
            </ProductListTableFormat>

            { list.products.map( ( product, index ) => {
                if ( products === "available" ? product.quantity > 0 && product.category === category : product.quantity === 0 && product.category === category )
                    return (
                        <ListTable theme={ themeColor } key={ index }>
                            <ProductListTableFormat theme={ themeColor }>
                                <li><img src={ `${ url }/images/${ brand }/${ product.image }` } alt="Imagem do produto" /></li>

                                <li>{ product.name }</li>

                                <li>R$ { product.price }</li>

                                <li>{ product.validity }</li>

                                <li>{ product.quantity }</li>

                                <ActionButton theme={ themeColor }>
                                    <button onClick={ () => {
                                        setPopUp( { id: product._id, action: "edit product" } );
                                        setType( "Produto" );
                                    } }>Editar</button>

                                    <button onClick={ () => {
                                        setPopUp( { id: product._id, action: "removal" } );
                                        setType( "Produto" );
                                    } }>Remover</button>

                                    { popUp?.id === product._id && popUp.action === "removal" && <RemovalPopUp productId={ product._id } /> }
                                </ActionButton>
                            </ProductListTableFormat>

                            { popUp?.id === product._id && popUp.action === "edit product" && <EditProductPopUp productImage={ product.image } /> }
                        </ListTable>
                    )
            } ) }
        </ListContainer>
    )
}