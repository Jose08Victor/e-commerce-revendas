import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/adminContext";
import { Section, DivContainer, Div, Form, Input, ButtonContainer, Button, Label, Label1, HOne, HTwo, ImgContainerDiv, MagazineContainer, ImgContainer, Test } from "./styles";
import { Link } from "react-router-dom";
import { EditMagazinePopUp } from "../../components/editMagazinePopUp";

export const Home = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { onChangeValidityInput, onChangeHandler, magazineData, setMagazineData, getMagazineList, updateMagazineData, list, themeColor, url, popUp, setPopUp } = adminContext;

    useEffect( () => { getMagazineList() }, [] );

    useEffect( () => setCode( "" ), [ list ] );

    const [ code, setCode ] = useState( "" );

    const setHandler = ( code: string ) => {
        setCode( code );
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
    };

    if ( list.magazine[ 0 ] ) {
        return (
            <Section>
                <DivContainer>
                    { code !== "Ciclo" && <Div>
                        <HOne theme={ themeColor }>Ciclo Atual : <span>{ `${ list.magazine[ 0 ].currentCycle }` }</span></HOne>

                        <Button theme={ themeColor } onClick={ () => setHandler( "Ciclo" ) }>Trocar Ciclo ?</Button>
                    </Div> }

                    { code === "Ciclo" && <Form theme={ themeColor } onSubmit={ updateMagazineData }>
                        <HTwo>Trocar Ciclo :</HTwo>

                        <Label htmlFor="ciclo">Ciclo :
                            <Input theme={ themeColor } onChange={ onChangeHandler } value={ magazineData.currentCycle.replace( /\D/g, '' ) } type="text" id="ciclo" maxLength={ 2 } name="currentCycle" required />
                        </Label>

                        <ButtonContainer>
                            <Button theme={ themeColor } type="submit">Confirmar</Button>
                            <Button theme={ themeColor } type="button" onClick={ () => setCode( "" ) }>Cancelar</Button>
                        </ButtonContainer>

                    </Form> }

                    { code !== "Périodo" && <Div>
                        <HOne theme={ themeColor }>Período : <span>{ `${ list.magazine[ 0 ].startOfCycle }` }</span> até <span>{ `${ list.magazine[ 0 ].endOfCycle }` }</span></HOne>

                        <Button theme={ themeColor } onClick={ () => setHandler( "Périodo" ) }>Trocar Périodo ?</Button>
                    </Div> }

                    { code === "Périodo" && <Form theme={ themeColor } onSubmit={ updateMagazineData }>
                        <HTwo>Trocar Período :</HTwo>
                        <Label1 htmlFor="start">Início :
                            <Input theme={ themeColor } id="start" type="text" value={ magazineData.startOfCycle } name="startOfCycle" onChange={ onChangeValidityInput } placeholder="DD/MM" maxLength={ 5 } required />
                        </Label1>

                        <Label htmlFor="end">Término :
                            <Input theme={ themeColor } id="end" type="text" value={ magazineData.endOfCycle } name="endOfCycle" onChange={ onChangeValidityInput } placeholder="DD/MM" maxLength={ 5 } required />
                        </Label>

                        <ButtonContainer>
                            <Button theme={ themeColor }>Confirmar</Button>
                            <Button theme={ themeColor } onClick={ () => setCode( "" ) }>Cancelar</Button>
                        </ButtonContainer>
                    </Form> }
                </DivContainer>

                <ImgContainerDiv>
                    <MagazineContainer>
                        <h2>Revista Avon :</h2>

                        <ImgContainer theme={ themeColor }>
                            <img src={ `${ url }/images/magazineData/${ list.magazine[ 0 ].avonMagazineImage }` } alt="" />

                            <Test>
                                <Link to={ list.magazine[ 0 ].avonMagazineLink } target="_blank" ><Button theme={ themeColor }>Ver Revista</Button></Link>

                                <Button theme={ themeColor } onClick={ () => setPopUp( { action: "edit magazine", image: list.magazine[ 0 ]?.avonMagazineImage, imageName: "avonMagazineImage", linkName: "avonMagazineLink", brand: "avon" } ) }>Trocar Revista ?</Button>
                            </Test>
                        </ImgContainer>
                    </MagazineContainer>

                    <MagazineContainer>
                        <h2>Revista Casa & Estilo :</h2>

                        <ImgContainer theme={ themeColor }>
                            <img src={ `${ url }/images/magazineData/${ list.magazine[ 0 ].casa_estiloMagazineImage }` } alt="" />

                            <Test>
                                <Link to={ list.magazine[ 0 ].casa_estiloMagazineLink } target="_blank" ><Button theme={ themeColor }>Ver Revista</Button></Link>

                                <Button theme={ themeColor } onClick={ () => setPopUp( { action: "edit magazine", image: list.magazine[ 0 ]?.casa_estiloMagazineImage, imageName: "casa_estiloMagazineImage", linkName: "casa_estiloMagazineLink", brand: "casa&estilo" } ) }>Trocar Revista ?</Button>
                            </Test>
                        </ImgContainer>
                    </MagazineContainer>

                    <MagazineContainer>
                        <h2>Revista Natura :</h2>

                        <ImgContainer theme={ themeColor }>
                            <img src={ `${ url }/images/magazineData/${ list.magazine[ 0 ].naturaMagazineImage }` } alt="" />

                            <Test>
                                <Link to={ list.magazine[ 0 ].naturaMagazineLink } target="_blank"><Button theme={ themeColor }>Ver Revista</Button></Link>

                                <Button theme={ themeColor } onClick={ () => setPopUp( { action: "edit magazine", image: list.magazine[ 0 ]?.naturaMagazineImage, imageName: "naturaMagazineImage", linkName: "naturaMagazineLink", brand: "natura" } ) }>Trocar Revista ?</Button>
                            </Test>
                        </ImgContainer>
                    </MagazineContainer>
                </ImgContainerDiv>
                { popUp?.action === "edit magazine" && <EditMagazinePopUp /> }
            </Section>
        )
    }
};
