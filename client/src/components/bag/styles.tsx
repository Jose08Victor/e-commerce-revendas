import styled from "styled-components"

export const Background = styled.section`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, .5);
`

export const BagContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 460px;
    right: 0;
    background-color: aliceblue;
    transition: 1s ease-in-out;

    svg {
        width: 100%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }

    ul{
        height: 60%;
        overflow: auto;

        li {
            display: flex;
            border-bottom: solid 1px ${ ( { theme } ) => theme.backgroundColor };
            align-items: center;
            padding: 10px;

            img {
                width: 90px;
                outline: 1px solid ${ ( { theme } ) => theme.color };
                padding: 2px;
                border-radius: 15px;
            }

            .product-features {
                display: flex;
                flex-direction: column;
                height: 100px;
                justify-content: space-between;
                padding: 6px 12px;  

                .product-title-container {
                    display: flex;
                    align-items: start;
                    justify-content: space-between;

                    h3 {
                        font-size: 15px;
                        width: 94%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    svg {
                        width: 17.5px;
                        position: relative;
                        right: -11px;
                        top: -5px;
                        fill: ${ ( { theme } ) => theme.color };
                    }
                }

                .price-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    p {
                        font-weight: 800;
                    } 


                    div {
                        display: flex;

                        button {
                            width: 32px;
                            height: 32px;
                            font-size: 22px;
                            line-height: 32px;
                            border: 1px solid ${ ( { theme } ) => theme.color };
                            background-color: aliceblue;
                        }

                        span {
                            padding: 6px 12px 2px;
                            border-top: 1px solid ${ ( { theme } ) => theme.color };
                            border-bottom: 1px solid ${ ( { theme } ) => theme.color };
                            line-height: 20px;
                            font-weight: 700;
                        }
                    }
                }
            } 
        }
    }
`

export const TitleContainer = styled.div`
    border-bottom: 1px solid ${ ( { theme } ) => theme.color };
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7%;
    position: relative;

    h1 {
        font-weight: 400;
        letter-spacing: 2px;
        font-size: 22px;
    }

    p {
        font-weight: 600;
        font-size: 32px;
        position: absolute;
        top: -3px;
        right: 10px;
        color: ${ ( { theme } ) => theme.color };
    }
`

export const PriceContainer = styled.div`
    border-top: 1px solid ${ ( { theme } ) => theme.color };
    height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
        width: 100%;
        text-align: end;
        font-size: 12px;
        font-weight: 500;
        color: ${ ( { theme } ) => theme.color };
    }

    .continue {
        font-size: 25px;
        padding: 8px 60px;
        letter-spacing: 2px;
        border-radius: 20px;
        border: 1px solid ${ ( { theme } ) => theme.color };
        color: ${ ( { theme } ) => theme.color };
    }

    .back-to-products {
        border: none;
        letter-spacing: 3px;
        font-weight: 600;
        color: ${ ( { theme } ) => theme.color };
    }
`

export const Prices = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 75%;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h3 {
            font-weight: 600;
        }

        p {
            font-weight: 800;
        }
    }
`