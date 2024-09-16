import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import arrow_icon from "../../assets/arrow_icon.png";
import { EditName, EditInput } from "../editProductPopUp/styles";
import { ArrowIcon, CurrentImg, EditTitle, EditBackground, EditContainer, ImgContainer, ImgUpload, EditButton } from "../styles/componentStyles";

export const EditMagazinePopUp = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { themeColor, magazineData, setMagazineData, setPopUp, updateMagazineData, onChangeHandler, popUp } = adminContext;

    const onImageHandler = () => {
        if ( popUp?.imageName === "avonMagazineImage" ) return magazineData.avonMagazineImage ? URL.createObjectURL( magazineData.avonMagazineImage ) : pink_cloud_upload;
        if ( popUp?.imageName === "casa_estiloMagazineImage" ) return magazineData.casa_estiloMagazineImage ? URL.createObjectURL( magazineData.casa_estiloMagazineImage ) : pink_cloud_upload;
        if ( popUp?.imageName === "naturaMagazineImage" ) return magazineData.naturaMagazineImage ? URL.createObjectURL( magazineData.naturaMagazineImage ) : orange_cloud_upload;
    }

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

                    <div>
                        <p>Trocar imagem ?</p>

                        <label htmlFor="image">
                            <ImgUpload src={ onImageHandler() } alt="Upload Area Image" />
                        </label>

                        <input onChange={ ( e ) => setMagazineData( magazineData => ( { ...magazineData, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name={ popUp?.imageName } hidden />
                    </div>
                </ImgContainer>

                <EditName>
                    <p onClick={ () => console.log( magazineData )
                    }>Editar Link ?</p>

                    <EditInput theme={ themeColor } value={ onValueHandler() } onChange={ onChangeHandler } type="text" name={ popUp?.linkName } placeholder="Digite aqui..." />
                </EditName>

                <EditButton theme={ themeColor } type="submit">Confirmar</EditButton>
            </EditContainer>
        </EditBackground>
    )
};