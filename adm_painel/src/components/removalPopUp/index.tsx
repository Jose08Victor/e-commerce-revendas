import { useContext } from "react";
import "./styles.css"
import { AdminContext } from "../../context/adminContext";

export const RemovalPopUp = ({ productId }: { productId: string }) => {
    const adminContext = useContext( AdminContext );

    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setProductPopUp, removeProduct } = adminContext;

    return (
        <div className="removal-pop-up">
            <h4>Desejar remover este produto?</h4>

            <button onClick={ () => {
                removeProduct( productId )
                setProductPopUp( null )
            } } >Sim</button>

            <button onClick={ () => setProductPopUp( null ) }>Não</button>
        </div>
    )
}