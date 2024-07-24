import { useContext, useEffect } from "react";
import "./styles.css"
import x_icon from "../../assets/x_icon.png"
import upload_area from "../../assets/cloud-upload.svg"
import arrow_icon from "../../assets/arrow_icon.png"
import { AdminContext } from "../../context/adminContext";

export const ProductList = ( { produtos }: { produtos: string } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, data, setData, list, productPopUp, setProductPopUp, fetchList, removeProduct, onChangeHandler, onChangeInput, updateProduct } = adminContext;

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

                                    { productPopUp?.id === product._id && productPopUp.action === "removal" && (
                                        <div key={ index } className="removal-pop-up">
                                            <h4>Desejar remover este produto?</h4>

                                            <button onClick={ () => {
                                                removeProduct( product._id )
                                                setProductPopUp( null )
                                            } } >Sim</button>

                                            <button onClick={ () => setProductPopUp( null ) }>Não</button>
                                        </div>
                                    ) }
                                </li>
                            </ul>

                            { productPopUp?.id === product._id && productPopUp.action === "edit" && (
                                <div key={ index } className="editor-background">
                                    <form className="editor-container" onSubmit={ updateProduct } >
                                        <div className="editor">
                                            <h1>Editar produto</h1>

                                            <img src={ x_icon } onClick={ () => {
                                                setProductPopUp( null )
                                                setData( {
                                                    name: "",
                                                    image: null,
                                                    price: "",
                                                    category: "",
                                                    quantity: "",
                                                    validity: ""
                                                } )
                                            } } />
                                        </div>

                                        <div className="img-container">
                                            <div className="current-img">
                                                <p>Imagem atual :</p>

                                                <img src={ `${ url }/images/${ brand }/${ product.image }` } alt="Imagem do produto" />
                                            </div>

                                            <img className="arrow_icon" src={ arrow_icon } alt="Arrow Icon" />

                                            <div className="editor-img-upload">
                                                <p>Trocar imagem ?</p>

                                                <label htmlFor="image">
                                                    <img src={ data.image ? URL.createObjectURL( data.image ) : upload_area } alt="Upload Area Image" />
                                                </label>

                                                <input onChange={ ( e ) => setData( data => ( { ...data, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden />
                                            </div>
                                        </div>

                                        <div className="editor-name">
                                            <p>Editar Nome ?</p>

                                            <input value={ data.name } onChange={ onChangeHandler } type="text" name="name" placeholder="Digite aqui..." />
                                        </div>

                                        <div className="editor-category-price">
                                            <div className="editor-category">
                                                <p>Editar Categoria ?</p>

                                                <select name="category" onChange={ onChangeHandler } >
                                                    <option value="">Escolha a categoria</option>
                                                    <option value="Kits">Kits</option>
                                                    <option value="Perfumes">Perfumes</option>
                                                    <option value="Maquiagem">Maquiagem</option>
                                                </select>
                                            </div>

                                            <div className="editor-price">
                                                <p>Editar Preço ?</p>

                                                <input value={ data.price } onChange={ onChangeHandler } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } />
                                            </div>
                                        </div>

                                        <div className="editor-validity-quantity">
                                            <div className="editor-validity">
                                                <p>Editar Validade ?</p>

                                                <input type="text" value={ data.validity } onChange={ onChangeInput } name="validity" placeholder="DD/MM/YYYY" maxLength={ 10 } />
                                            </div>

                                            <div className="editor-quantity">
                                                <p>Editar Quantidade ?</p>

                                                <input type="number" value={ data.quantity } onChange={ onChangeHandler } name="quantity" placeholder="-" min={ 0 } max={ 99 } />
                                            </div>
                                        </div>

                                        <button type="submit" className="editor-btn" >Confirmar</button>
                                    </form>
                                </div>
                            ) }
                        </div>
                    )
            }
            ) }
        </section>
    )
}