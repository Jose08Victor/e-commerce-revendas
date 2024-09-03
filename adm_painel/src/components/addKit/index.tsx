import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import { useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddKitFields, AddPriceAndQuantity1 } from "./styles";
import { FormContainer, AddImgUpload, InputFields, Buttons, AddButton, ChangeButton, Input, InputName, Label, NameList } from "../styles/componentStyles";

export const AddKit = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { brand, setType, themeColor, kitData, setKitData, productName, setProductName, addKit } = adminContext;

    const text = useRef<HTMLInputElement | null>( null );

    const onChangeHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => setKitData( data => ( { ...data, [ e.target.name ]: e.target.value } ) );

    return (
        <FormContainer onSubmit={ addKit }>
            <AddImgUpload>
                <p>Escolha uma imagem</p>

                <label htmlFor="image">
                    <img src={ kitData.image ? URL.createObjectURL( kitData.image ) : brand === "avon" ? pink_cloud_upload : orange_cloud_upload } alt="Upload Area Image" />
                </label>

                <input onChange={ ( e ) => setKitData( kitData => ( { ...kitData, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden required />
            </AddImgUpload>

            <InputFields>
                <AddKitFields theme={ themeColor }>
                    <ul>
                        <p>Nome dos produtos :</p>

                        <InputName theme={ themeColor } ref={ text } type="text" id="text" />

                        <Label theme={ themeColor } htmlFor="text" onClick={ () => {
                            if ( text.current?.value ) {
                                setProductName( [ ...productName, text.current.value ] );
                                text.current.value = "";
                            }
                        } } >Adicionar</Label>

                        <NameList theme={ themeColor }>
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
                        </NameList>
                    </ul>

                    <AddPriceAndQuantity1>
                        <div>
                            <p>Preço :</p>

                            <Input theme={ themeColor } onChange={ onChangeHandler } value={ kitData.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } required />
                        </div>

                        <div>
                            <p>Quantidade :</p>

                            <Input theme={ themeColor } type="number" value={ kitData.quantity } name="quantity" onChange={ onChangeHandler } placeholder="-" min={ 0 } max={ 99 } required />
                        </div>
                    </AddPriceAndQuantity1>
                </AddKitFields>

                <Buttons>
                    <AddButton theme={ themeColor } onClick={ () => setKitData( kitData => ( { ...kitData, [ "nameOfProducts" ]: productName } ) ) }>Confirmar</AddButton>

                    <ChangeButton theme={ themeColor } onClick={ () => setType( "Produto" ) }>Adicionar Produto ?</ChangeButton>
                </Buttons>
            </InputFields>
        </FormContainer>
    )
};