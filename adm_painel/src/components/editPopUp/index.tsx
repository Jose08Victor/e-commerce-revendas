import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import x_icon from "../../assets/x_icon.png";
import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import arrow_icon from "../../assets/arrow_icon.png";
import { ArrowIcon, CurrentImg, Edit, EditBackground, EditButton, EditCategory_Price, EditContainer, EditName, EditValidity_Quantity, ImgContainer, ImgUpload } from "./styles";

export const EditPopUp = ( { productImage }: { productImage: File } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, url, brand, data, setData, setProductPopUp, onChangeHandler, onChangeInput, updateProduct } = adminContext;

    return (
        <EditBackground>
            <EditContainer theme={themeColor} onSubmit={ updateProduct } >
                <Edit>
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
                </Edit>

                <ImgContainer>
                    <div>
                        <p>Imagem atual :</p>

                        <CurrentImg src={ `${ url }/images/${ brand }/${ productImage }` } alt="Imagem do produto" />
                    </div>

                    <ArrowIcon src={ arrow_icon } alt="Arrow Icon" />

                    <div>
                        <p>Trocar imagem ?</p>

                        <label htmlFor="image">
                            <ImgUpload src={ data.image ? URL.createObjectURL( data.image ) : brand === "avon" ? pink_cloud_upload : orange_cloud_upload } alt="Upload Area Image" />
                        </label>

                        <input onChange={ ( e ) => setData( data => ( { ...data, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden />
                    </div>
                </ImgContainer>

                <EditName>
                    <p>Editar Nome ?</p>

                    <input value={ data.name } onChange={ onChangeHandler } type="text" name="name" placeholder="Digite aqui..." />
                </EditName>

                <EditCategory_Price>
                    <div>
                        <p>Editar Categoria ?</p>

                        <select name="category" onChange={ onChangeHandler } >
                            <option value="">Escolha a categoria</option>
                            <option value="Kits">Kits</option>
                            <option value="Perfumes">Perfumes</option>
                            <option value="Maquiagem">Maquiagem</option>
                        </select>
                    </div>

                    <div>
                        <p>Editar Preço ?</p>

                        <input value={ data.price } onChange={ onChangeHandler } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } />
                    </div>
                </EditCategory_Price>

                <EditValidity_Quantity>
                    <div>
                        <p>Editar Validade ?</p>

                        <input type="text" value={ data.validity } onChange={ onChangeInput } name="validity" placeholder="DD/MM/YYYY" maxLength={ 10 } />
                    </div>

                    <div>
                        <p>Editar Quantidade ?</p>

                        <input type="number" value={ data.quantity } onChange={ onChangeHandler } name="quantity" placeholder="-" min={ 0 } max={ 99 } />
                    </div>
                </EditValidity_Quantity>

                <EditButton theme={themeColor} type="submit">Confirmar</EditButton>
            </EditContainer>
        </EditBackground>
    )
}