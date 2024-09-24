import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import arrow_icon from "../../assets/arrow_icon.png";
import { EditImgUpload, EditName, EditInput } from "../editProductPopUp/styles";
import { ArrowIcon, CurrentImg, EditTitle, EditBackground, EditContainer, ImgContainer, ImgUpload, EditButton } from "../styles/componentStyles";

export const EditMagazinePopUp = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, magazineData, setMagazineData, setPopUp, updateMagazineData, onChangeHandler, popUp, handleFileUpload, handleDrop, handlePaste, handleDragOver, isSubmitting } = adminContext;

    const onValueHandler = () => {
        if ( popUp?.linkName === "avonMagazineLink" ) return magazineData.avonMagazineLink;
        if ( popUp?.linkName === "casa_estiloMagazineLink" ) return magazineData.casa_estiloMagazineLink;
        if ( popUp?.linkName === "naturaMagazineLink" ) return magazineData.naturaMagazineLink;
    }

    return (
        <EditBackground>
            <EditContainer theme={ themeColor } onSubmit={ updateMagazineData } >
                <EditTitle theme={ themeColor }>
                    <h1>Editar revista :</h1>

                    <p onClick={ () => {
                        setPopUp( null );
                        setMagazineData( {
                            currentCycle: "",
                            startOfCycle: "",
                            endOfCycle: "",
                            avonMagazineImage: null,
                            avonMagazineLink: "",
                            casa_estiloMagazineImage: null,
                            casa_estiloMagazineLink: "",
                            naturaMagazineImage: null,
                            naturaMagazineLink: ""
                        } );
                    } }>x</p>
                </EditTitle>

                <ImgContainer>
                    <div>
                        <p>Imagem atual</p>

                        <CurrentImg src={ popUp?.image } alt="Imagem do produto" />
                    </div>

                    <ArrowIcon src={ arrow_icon } alt="Arrow Icon" />

                    <EditImgUpload theme={ themeColor }>
                        { !magazineData.avonMagazineImage && !magazineData.casa_estiloMagazineImage && !magazineData.naturaMagazineImage && <>
                            <h2>Trocar imagem ?</h2>

                            <label htmlFor="image">Escolher arquivo</label>

                            <input type="file" accept="image/*" id='image' hidden onChange={ handleFileUpload } />

                            <div onPaste={ handlePaste } onDrop={ handleDrop } onDragOver={ handleDragOver }>
                                Arraste e solte a imagem aqui, ou clique e cole (Ctrl + V)
                            </div>
                        </> }

                        { magazineData.avonMagazineImage && <>
                            <ImgUpload src={ URL.createObjectURL( magazineData.avonMagazineImage ) } alt="Uploaded" />

                            <p onClick={ () => setMagazineData( magazineData => ( { ...magazineData, "avonMagazineImage": null } ) ) }>X</p>
                        </> }

                        { magazineData.casa_estiloMagazineImage && <>
                            <ImgUpload src={ URL.createObjectURL( magazineData.casa_estiloMagazineImage ) } alt="Uploaded" />

                            <p onClick={ () => setMagazineData( magazineData => ( { ...magazineData, "casa_estiloMagazineImage": null } ) ) }>X</p>
                        </> }

                        { magazineData.naturaMagazineImage && <>
                            <ImgUpload src={ URL.createObjectURL( magazineData.naturaMagazineImage ) } alt="Uploaded" />

                            <p onClick={ () => setMagazineData( magazineData => ( { ...magazineData, "naturaMagazineImage": null } ) ) }>X</p>
                        </> }
                    </EditImgUpload>
                </ImgContainer>

                <EditName>
                    <p>Editar Link ?</p>

                    <EditInput theme={ themeColor } value={ onValueHandler() } onChange={ onChangeHandler } type="text" name={ popUp?.linkName } placeholder="Digite aqui..." />
                </EditName>

                <EditButton theme={ themeColor } disabled={ isSubmitting } type="submit">
                    { isSubmitting ? 'Enviando...' : 'Confirmar' }
                </EditButton>
            </EditContainer>
        </EditBackground>
    )
};