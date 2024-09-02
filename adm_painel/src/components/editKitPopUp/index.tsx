import { useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";
import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import arrow_icon from "../../assets/arrow_icon.png";
import { ArrowIcon, CurrentImg, EditBackground, EditContainer, ImgContainer, ImgUpload, Input, InputName, EditButton, Label, AddPrice_Quantity } from "../styles/componentStyles";
import { EditKitTitle, KitNameList } from "./styles";

export const EditKitPopUp = ( { productImage }: { productImage: File } ) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, url, brand, kitData, setKitData, productName, setProductName, setPopUp, updateKit, onChangeHandler } = adminContext;

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

                        <CurrentImg src={ `${ url }/images/${ brand }/${ productImage }` } alt="Imagem do produto" />
                    </div>

                    <ArrowIcon src={ arrow_icon } alt="Arrow Icon" />

                    <div>
                        <p>Trocar imagem ?</p>

                        <label htmlFor="image">
                            <ImgUpload src={ kitData.image ? URL.createObjectURL( kitData.image ) : brand === "avon" ? pink_cloud_upload : orange_cloud_upload } alt="Upload Area Image" />
                        </label>

                        <input onChange={ ( e ) => setKitData( kitData => ( { ...kitData, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden />
                    </div>
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

                <AddPrice_Quantity>
                    <div>
                        <p>Editar preço ?</p>

                        <Input onChange={ onChangeHandler } theme={ themeColor } value={ kitData.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } />
                    </div>

                    <div>
                        <p>Editar quantidade ?</p>

                        <Input onChange={ onChangeHandler } theme={ themeColor } type="number" value={ kitData.quantity } name="quantity" placeholder="-" min={ 0 } max={ 99 } />
                    </div>
                </AddPrice_Quantity>

                <EditButton theme={ themeColor } onClick={ () => setKitData( kitData => ( { ...kitData, [ "nameOfProducts" ]: productName } ) ) } type="submit">Confirmar</EditButton>
            </EditContainer>
        </EditBackground>
    )
}