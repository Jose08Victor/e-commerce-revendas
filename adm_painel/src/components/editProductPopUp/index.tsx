import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import arrow_icon from "../../assets/arrow_icon.png";
import { EditCategoryAndPrice, EditName, EditSelect, EditInput, EditValidityAndQuantity, EditImgUpload } from "./styles";
import { ArrowIcon, CurrentImg, EditTitle, EditBackground, EditContainer, ImgContainer, ImgUpload, EditButton } from "../styles/componentStyles";

export const EditProductPopUp = ( { productImage }: { productImage: string } ) => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, brand, productData, setProductData, setPopUp, updateProduct, onChangeHandler, onChangeValidityInput, handleFileUpload, handlePaste, handleDrop, handleDragOver, isSubmitting } = adminContext;

    return (
        <EditBackground>
            <EditContainer theme={ themeColor } onSubmit={ updateProduct } >
                <EditTitle theme={ themeColor }>
                    <h1>Editar produto :</h1>

                    <p onClick={ () => {
                        setPopUp( null );
                        setProductData( {
                            name: "",
                            image: null,
                            price: "",
                            category: "",
                            quantity: "",
                            validity: ""
                        } );
                    } }>x</p>
                </EditTitle>

                <ImgContainer>
                    <div>
                        <p>Imagem atual</p>

                        <CurrentImg src={ productImage } alt="Imagem do produto" />
                    </div>

                    <ArrowIcon src={ arrow_icon } alt="Arrow Icon" />

                    <EditImgUpload theme={themeColor}>
                        { !productData.image && <>
                            <h2>Trocar imagem?</h2>

                            <label htmlFor="image">Escolher arquivo</label>

                            <input type="file" accept="image/*" id='image' hidden onChange={ handleFileUpload } />

                            <div onPaste={ handlePaste } onDrop={ handleDrop } onDragOver={ handleDragOver }>
                                Arraste e solte a imagem aqui, ou clique e cole (Ctrl + V)
                            </div>
                        </> }

                        { productData.image && <>
                            <ImgUpload src={ URL.createObjectURL( productData.image ) } alt="Uploaded" />

                            <p onClick={ () => setProductData( productData => ( { ...productData, "image": null } ) ) }>X</p>
                        </> }
                    </EditImgUpload>
                </ImgContainer>

                <EditName>
                    <p>Editar Nome ?</p>

                    <EditInput theme={ themeColor } value={ productData.name } onChange={ onChangeHandler } type="text" name="name" placeholder="Digite aqui..." />
                </EditName>

                <EditCategoryAndPrice>
                    <div>
                        <p>Editar Categoria ?</p>

                        <EditSelect theme={ themeColor } name="category" onChange={ onChangeHandler } >
                            <option value="">Escolha a categoria</option>
                            { brand === "avon" ?
                                <>
                                    <option value="Perfumes">Perfumes</option>
                                    <option value="Rosto">Rosto</option>
                                    <option value="Lábios">Lábios</option>
                                    <option value="Olhos">Olhos</option>
                                    <option value="Unhas">Unhas</option>
                                    <option value="Desodorantes">Desodorantes</option>
                                    <option value="Cuidados Diários">Cuidados Diários</option>
                                    <option value="Casa&Estilo">Casa&Estilo</option>
                                </>
                                :
                                <>
                                    <option value="Perfumes">Perfumes</option>
                                    <option value="Maquiagem">Maquiagem</option>
                                    <option value="Cuidados Diários">Cuidados Diários</option>
                                </> }
                        </EditSelect>
                    </div>

                    <div>
                        <p>Editar Preço ?</p>

                        <EditInput theme={ themeColor } value={ productData.price } onChange={ onChangeHandler } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } />
                    </div>
                </EditCategoryAndPrice>

                <EditValidityAndQuantity>
                    <div>
                        <p>Editar Validade ?</p>

                        <EditInput theme={ themeColor } type="text" value={ productData.validity } onChange={ onChangeValidityInput } name="validity" placeholder="DD/MM/YYYY" maxLength={ 10 } />
                    </div>

                    <div>
                        <p>Editar Quantidade ?</p>

                        <EditInput theme={ themeColor } type="number" value={ productData.quantity } onChange={ onChangeHandler } name="quantity" placeholder="-" min={ 0 } max={ 99 } />
                    </div>
                </EditValidityAndQuantity>

                <EditButton theme={ themeColor } type="submit" disabled={isSubmitting}>
                { isSubmitting ? 'Enviando...' : 'Confirmar' }
                </EditButton>
            </EditContainer>
        </EditBackground>
    )
};