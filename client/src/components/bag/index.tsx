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

                                        <div onClick={() => handleRemoveItem(product._id)}>
                                            <TrashCanSVG />
                                        </div>
                                    </div>

                                    <div className="price-container">
                                        <div>
                                            <button>+</button>

                                            <span>1</span>

                                            <button>−</button>
                                        </div>

                                        <p>{ Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } ).format( product.price ) }</p>
                                    </div>
                                </div>
                            </li>
                        )
                    } ) }
                </ul>

                <PriceContainer>
                    <Prices>
                        <div>
                            <h3>Subtotal :</h3>
                            <p>R$ 90,00</p>
                        </div>

                        <div>
                            <h3>Descontos :</h3>
                            <p>R$ -30,00</p>
                        </div>

                        <div>
                            <h3>Total :</h3>
                            <p>R$ 60,00</p>
                        </div>

                        <span>Ou até 3x sem juros de R$ 20,00</span>
                    </Prices>

                    <button className="continue">Continuar</button>

                    <button className="back-to-products">Ver mais produtos</button>
                </PriceContainer>
            </BagContainer>
        </Background>
    )
}