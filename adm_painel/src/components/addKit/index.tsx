import { useContext, useRef } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddKitFields, AddPriceAndQuantity1 } from "./styles";
import { FormContainer, AddImgUpload, InputFields, Buttons, AddButton, ChangeButton, Input, InputName, Label, NameList } from "../styles/componentStyles";

export const AddKit = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setType, themeColor, kitData, setKitData, productName, setProductName, addKit, handleFileUpload, handlePaste, handleDrop, handleDragOver, isSubmitting } = adminContext;

    const text = useRef<HTMLInputElement | null>( null );

    const onChangeHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => setKitData( data => ( { ...data, [ e.target.name ]: e.target.value } ) );

    return (
        <FormContainer onSubmit={ addKit }>
            <AddImgUpload theme={ themeColor }>
                { !kitData.image && <>
                    <h2>Envie uma imagem</h2>

                    <label htmlFor="image">Escolher arquivo</label>

                    <input type="file" accept="image/*" id='image' hidden onChange={ handleFileUpload } />

                    <div onPaste={ handlePaste } onDrop={ handleDrop } onDragOver={ handleDragOver }>
                        Arraste e solte a imagem aqui, ou clique e cole (Ctrl + V)
                    </div>
                </> }

                { kitData.image && <>
                    <img src={ URL.createObjectURL( kitData.image ) } alt="Uploaded" />

                    <p onClick={ () => setKitData( kitData => ( { ...kitData, "image": null } ) ) }>X</p>
                </> }
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
                    <AddButton theme={ themeColor } onClick={ () => setKitData( kitData => ( { ...kitData, [ "nameOfProducts" ]: productName } ) ) } disabled={ isSubmitting }>
                        { isSubmitting ? 'Enviando...' : 'Confirmar' }
                    </AddButton>

                    <ChangeButton theme={ themeColor } onClick={ () => setType( "Produto" ) }>Adicionar Produto ?</ChangeButton>
                </Buttons>
            </InputFields>
        </FormContainer>
    )
};