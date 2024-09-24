import { useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";
import arrow_icon from "../../assets/arrow_icon.png";
import { ArrowIcon, CurrentImg, EditBackground, EditContainer, ImgContainer, ImgUpload, Input, InputName, EditButton, Label, AddPriceAndQuantity } from "../styles/componentStyles";
import { EditKitTitle, KitNameList, EditKitImgUpload } from "./styles";

export const EditKitPopUp = ( { productImage }: { productImage: string } ) => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, kitData, setKitData, productName, setProductName, setPopUp, updateKit, onChangeHandler, handleFileUpload, handlePaste, handleDrop, handleDragOver, isSubmitting } = adminContext;

    const text = useRef<HTMLInputElement | null>( null );

    return (
        <EditBackground>
            <EditContainer theme={ themeColor } onSubmit={ updateKit } >
                <EditKitTitle theme={ themeColor }>
                    <h1>Editar Kit :</h1>

                    <p onClick={ () => {
                        setPopUp( null );
                        setProductName( [] );
                        setKitData( {
                            image: null,
                            nameOfProducts: [ "" ],
                            price: "",
                            quantity: ""
                        } );
                    } }>x</p>
                </EditKitTitle>

                <ImgContainer>
                    <div>
                        <p>Imagem atual</p>

                        <CurrentImg src={ productImage } alt="Imagem do produto" />
                    </div>

                    <ArrowIcon src={ arrow_icon } alt="Arrow Icon" />

                    <EditKitImgUpload theme={themeColor}>
                        { !kitData.image && <>
                            <h2>Trocar imagem?</h2>

                            <label htmlFor="image">Escolher arquivo</label>

                            <input type="file" accept="image/*" id='image' hidden onChange={ handleFileUpload } />

                            <div onPaste={ handlePaste } onDrop={ handleDrop } onDragOver={ handleDragOver }>
                                Arraste e solte a imagem aqui, ou clique e cole (Ctrl + V)
                            </div>
                        </> }

                        { kitData.image && <>
                            <ImgUpload src={ URL.createObjectURL( kitData.image ) } alt="Uploaded" />

                            <p onClick={ () => setKitData( kitData => ( { ...kitData, "image": null } ) ) }>X</p>
                        </> }
                    </EditKitImgUpload>
                </ImgContainer>

                <ul>
                    <p>Editar nome dos produtos ?</p>

                    <InputName theme={ themeColor } ref={ text } type="text" id="text" />

                    <Label theme={ themeColor } htmlFor="text" onClick={ () => {
                        if ( text.current?.value ) {
                            setProductName( [ ...productName, text.current.value ] );
                            text.current.value = "";
                        }
                    } } >Adicionar</Label>

                    <KitNameList theme={ themeColor }>
                        { productName.map( ( name, index ) => {
                            return (
                                <li key={ index }>
                                    <h4>{ name }</h4>

                                    <p onClick={ () => {
                                        const names: string[] | null = [];
                                        productName.filter( ( name, i ) => { if ( i !== index ) names.push( name ) } );
                                        setProductName( names );
                                    } }>x</p>
                                </li>
                            )
                        } ) }
                    </KitNameList>
                </ul>

                <AddPriceAndQuantity>
                    <div>
                        <p>Editar preço ?</p>

                        <Input onChange={ onChangeHandler } theme={ themeColor } value={ kitData.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } />
                    </div>

                    <div>
                        <p>Editar quantidade ?</p>

                        <Input onChange={ onChangeHandler } theme={ themeColor } type="number" value={ kitData.quantity } name="quantity" placeholder="-" min={ 0 } max={ 99 } />
                    </div>
                </AddPriceAndQuantity>

                <EditButton theme={ themeColor } onClick={ () => setKitData( kitData => ( { ...kitData, [ "nameOfProducts" ]: productName } ) ) } type="submit" disabled={isSubmitting}>
                { isSubmitting ? 'Enviando...' : 'Confirmar' }
                </EditButton>
            </EditContainer>
        </EditBackground>
    )
};