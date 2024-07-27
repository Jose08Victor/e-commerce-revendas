import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { RemovalPopUpContainer } from "./styles";

export const RemovalPopUp = ({ productId }: { productId: string }) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setProductPopUp, removeProduct } = adminContext;

    return (
        <RemovalPopUpContainer>
            <h4>Desejar remover este produto?</h4>

            <button onClick={ () => {
                removeProduct( productId )
                setProductPopUp( null )
            } } >Sim</button>

            <button onClick={ () => setProductPopUp( null ) }>Não</button>
        </RemovalPopUpContainer>
    )
}