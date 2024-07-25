import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import x_icon from "../../assets/x_icon.png";
import upload_area from "../../assets/cloud-upload.svg";
import arrow_icon from "../../assets/arrow_icon.png";
import "./styles.css";

export const EditPopUp = ( { productImage }: { productImage: File } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { url, brand, data, setData, setProductPopUp, onChangeHandler, onChangeInput, updateProduct } = adminContext;

    return (
        <div className="editor-background">
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

                        <img src={ `${ url }/images/${ brand }/${ productImage }` } alt="Imagem do produto" />
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
    )
}