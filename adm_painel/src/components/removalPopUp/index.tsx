import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { RemovalPopUpContainer } from "./styles";

export const RemovalPopUp = ( { productId }: { productId: string } ) => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { type, setPopUp, removeProduct, removeKit } = adminContext;

    return (
        <RemovalPopUpContainer>
            <h4>Desejar remover este produto?</h4>

            <button onClick={ () => {
                type === "Produto" ? removeProduct( productId ) : removeKit( productId );
                setPopUp( null );
            } } >Sim</button>

            <button onClick={ () => setPopUp( null ) }>Não</button>
        </RemovalPopUpContainer>
    )
};