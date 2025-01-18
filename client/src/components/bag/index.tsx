import { Background, BagContainer, PriceContainer, TitleContainer, Prices } from "./styles";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { TrashCanSVG } from "../svgContainer";

export const Bag = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setIsBag, inTheBag, setInTheBag } = adminContext;

    const handleRemoveItem = ( id: string ) => {
        setInTheBag( inTheBag.filter( ( product ) => product._id !== id ) );
    };

    const handleIncrementQuantity = ( id: string ) => {
        setInTheBag(
            inTheBag.map( ( product ) =>
                product._id === id && product.currentQuantity < product.quantity
                    ? { ...product, currentQuantity: product.currentQuantity + 1 }
                    : product
            )
        );
    };

    const handleDecrementQuantity = ( id: string ) => {
        setInTheBag(
            inTheBag.map( ( product ) =>
                product._id === id && product.currentQuantity > 1
                    ? { ...product, currentQuantity: product.currentQuantity - 1 }
                    : product
            )
        );
    };

    return (
        <Background>
            <BagContainer>
                <TitleContainer>
                    <h1>Minha Sacola</h1>

                    <p onClick={ () => setIsBag( false ) } >x</p>
                </TitleContainer>

                <ul>
                    { inTheBag.map( ( product, index ) => {
                        return (
                            <li key={ index }>
                                <img src={ product.imageURL } alt={ product.name } />

                                <div className="product-features">
                                    <div className="product-title-container">
                                        <h3>{ product.name }</h3>

                                        <div onClick={ () => handleRemoveItem( product._id ) }>
                                            <TrashCanSVG />
                                        </div>
                                    </div>

                                    <div className="price-container">
                                        <div>
                                            <button onClick={ () => handleIncrementQuantity( product._id ) }>+</button>

                                            <span>{ product.currentQuantity }</span>

                                            <button onClick={ () => handleDecrementQuantity( product._id ) }>−</button>
                                        </div>

                                        <p>{ Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } ).format( product.price * product.currentQuantity ) }</p>
                                    </div>
                                </div>
                            </li>
                        )
                    } ) }
                </ul>

                <PriceContainer>
                    <Prices>
                        <div>
                            <h3>Total :</h3>
                            <p>{ Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } ).format( inTheBag.reduce( ( total, price ) => total + price.price * price.currentQuantity, 0 ) ) }</p>
                        </div>

                        <span>Desconto de R$ 20 á vista pelo pix</span>

                        <span>Ou até 3x sem juros no cartão</span>
                    </Prices>

                    <button className="continue">Continuar</button>

                    <button className="back-to-products">Ver mais produtos</button>
                </PriceContainer>
            </BagContainer>
        </Background>
    )
}