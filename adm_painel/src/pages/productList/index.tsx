import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";
import { RemovalPopUp } from "../../components/removalPopUp";
import { EditPopUp } from "../../components/editPopUp";
import "./styles.css";

export const ProductList = ( { produtos }: { produtos: string } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, list, productPopUp, setProductPopUp, fetchList } = adminContext;

    useEffect( () => {
        fetchList();
    }, [] )

    return (
        <section className="products-list">
            <ul className="category-field">

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
            </ul>

            <ul className="list-table-format">
                <li>Imagem</li>
                <li>Nome</li>
                <li>Preço</li>
                <li>Validade</li>
                <li>Quantidade</li>
                <li>Ação</li>
            </ul>

            { list.map( ( product, index ) => {
                if ( produtos === "disponivel" ? product.quantity > 0 : product.quantity === 0 )
                    return (
                        <div className="list-table" key={ index }>
                            <ul className="list-table-format">
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
                            </ul>

                            { productPopUp?.id === product._id && productPopUp.action === "edit" && <EditPopUp productImage={ product.image } /> }
                        </div>
                    )
            } ) }
        </section>
    )
}