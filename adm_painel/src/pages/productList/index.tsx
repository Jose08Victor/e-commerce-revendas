import { useEffect, useState } from "react";
import "./styles.css"
import axios from "axios";
import { toast } from "react-toastify";
import x_icon from "../../assets/x_icon.png"
import upload_area from "../../assets/cloud-upload.svg"
import arrow_icon from "../../assets/arrow_icon.png"

interface ProductData {
    name: string;
    image: File | null;
    price: string;
    category: string;
    quantity: string;
    validity: string;
}

interface ProductsData {
    _id: string;
    name: string;
    image: File;
    price: number;
    category: string;
    quantity: number;
    validity: string;
}

interface ProductPopUp {
    id: string;
    action: string;
}

export const ProductList = ( { url, marca, produtos }: { url: string, marca: string, produtos: string } ) => {
    const [ list, setList ] = useState<ProductsData[] | never[]>( [] );

    const [ productPopUp, setProductPopUp ] = useState<ProductPopUp | null>( null );

    const [ data, setData ] = useState<ProductData>( {
        name: "",
        image: null,
        price: "",
        category: "",
        quantity: "",
        validity: ""
    } );

    const fetchList = async () => {
        const response = await axios.get( `${ url }/api/${ marca }/list` );
        if ( !response.data.success ) toast.error( "Error" );

        setList( response.data.data );
    }

    const removeProduct = async ( productId: string ) => {
        const response = await axios.delete( `${ url }/api/${ marca }/delete/${ productId }` );
        await fetchList();

        if ( !response.data.success ) toast.error( response.data.message );

        toast.success( response.data.message );
    }

    useEffect( () => {
        fetchList();
    }, [] )

    const onChangeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const name = event.target.name;
        const value = event.target.value;
        setData( data => ( { ...data, [ name ]: value } ) )
    }

    const onChangeInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const inputValue = event.target.value.replace( /\D/g, '' ); // Remove qualquer caractere que não seja dígito
        let formattedValue = inputValue;

        if ( inputValue.length > 2 ) formattedValue = `${ inputValue.slice( 0, 2 ) }/${ inputValue.slice( 2 ) }`;
        if ( inputValue.length > 4 ) formattedValue = `${ formattedValue.slice( 0, 5 ) }/${ formattedValue.slice( 5 ) }`;

        setData( data => ( { ...data, [ event.target.name ]: formattedValue } ) )
    };

    const onSubmitHandler = async ( event: { preventDefault: () => void; } ) => {
        event.preventDefault();

        const formData = new FormData();
        if ( data.name ) formData.append( "name", data.name )
        if ( data.price ) formData.append( "price", data.price )
        if ( data.category ) formData.append( "category", data.category )
        if ( data.quantity ) formData.append( "quantity", data.quantity )
        if ( data.validity ) formData.append( "validity", data.validity )
        if ( data.image ) formData.append( "image", data.image );

        const response = await axios.put( `${ url }/api/${ marca }/update/${ productPopUp?.id }`, formData )

        if ( !response.data.success ) toast.error( response.data.message );

        toast.success( response.data.message );
        fetchList();
        setProductPopUp( null );
        setData( {
            name: "",
            image: null,
            price: "",
            category: "",
            quantity: "",
            validity: ""
        } );
    }

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
                                <li><img src={ `${ url }/images/${ marca }/${ product.image }` } alt="Imagem do produto" /></li>

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
                                    <form className="editor-container" onSubmit={ onSubmitHandler } >
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

                                                <img src={ `${ url }/images/${ marca }/${ product.image }` } alt="Imagem do produto" />
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