import { Background, BagContainer, PriceContainer, TitleContainer, Prices } from "./styles";
import avonIcon from "../../assets/avonIcon.png";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

export const Bag = () => {
    const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { setIsBag } = adminContext;

    return (
        <Background>
            <BagContainer>
                <TitleContainer>
                    <h1>Minha Sacola</h1>

                    <p onClick={() => setIsBag(false)} >x</p>
                </TitleContainer>

                <ul>
                    <li>
                        <img src={ avonIcon } alt="" />

                        <div className="product-features">
                            <div className="product-title-container">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                            </div>

                            <div className="price-container">
                                <div>
                                    <button>+</button>

                                    <span>1</span>

                                    <button>−</button>
                                </div>

                                <p>R$ 30,00</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <img src={ avonIcon } alt="" />

                        <div className="product-features">
                            <div className="product-title-container">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                            </div>

                            <div className="price-container">
                                <div>
                                    <button>+</button>

                                    <span>1</span>

                                    <button>−</button>
                                </div>

                                <p>R$ 30,00</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <img src={ avonIcon } alt="" />

                        <div className="product-features">
                            <div className="product-title-container">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                            </div>

                            <div className="price-container">
                                <div>
                                    <button>+</button>

                                    <span>1</span>

                                    <button>−</button>
                                </div>

                                <p>R$ 30,00</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <img src={ avonIcon } alt="" />

                        <div className="product-features">
                            <div className="product-title-container">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                            </div>

                            <div className="price-container">
                                <div>
                                    <button>+</button>

                                    <span>1</span>

                                    <button>−</button>
                                </div>

                                <p>R$ 30,00</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <img src={ avonIcon } alt="" />

                        <div className="product-features">
                            <div className="product-title-container">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                            </div>

                            <div className="price-container">
                                <div>
                                    <button>+</button>

                                    <span>1</span>

                                    <button>−</button>
                                </div>

                                <p>R$ 30,00</p>
                            </div>
                        </div>
                    </li>
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