import styled from "styled-components";

export const Main = styled.main`
    margin-bottom: 15px;
`
export const Ul = styled.ul`
    display: none;
    justify-content: center;
    gap: 10%;
    align-items: center;
    margin: 15px 0;

    li {
        color: #E4004B;
        cursor: pointer;
        font-size: 16px;
        letter-spacing: .5px;
        font-weight: 700;
        border-bottom: 2px solid transparent;

        &:last-child {
            color: #FF6916;
        }

        &.active {
            border-bottom: 2px solid ${ ( { theme } ) => theme.color };
        }
    }

    @media (max-width: 500px) {
        display: flex;
    }
`

export const CategoryField = styled.ul`
    display: none;
    align-items: center;
    padding: 5px 0;
    gap: 10px;
    overflow-x: auto;
    width: 88%;
    margin: 0 auto; 

    &::-webkit-scrollbar {
        height: 2px;
        background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ ( { theme } ) => theme.color };
        border-radius: 25px;
    }

    li {
        border-radius: 18px;
        font-size: 10px;
        border: 2px solid;
        padding: 4px 12px;
        letter-spacing: 2px;
        color: #fff;
        background-color: ${ ( { theme } ) => theme.color };
        white-space: nowrap;
        font-weight: 600;

        &:hover {
            color: ${ ( { theme } ) => theme.color };
            background-color: #fff;
            border: 2px solid ${ ( { theme } ) => theme.color };
            cursor: pointer;
        }

        &.selected {
            color: ${ ( { theme } ) => theme.color };
            background-color: #fff;
            border: 2px solid ${ ( { theme } ) => theme.color };
        }
    }

    @media (max-width: 500px) {
        display: flex;
    }
`

export const Banner = styled.img`
    width: 96%;
    border-radius: 20px;
    display: block;
    margin: 15px auto;

    @media(max-width: 500px) {
        border-radius: 10px;
    }
`

export const TitleOneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    color: ${ ( { theme } ) => theme.color };
    background-color: #fff;
    border-start-start-radius: 30px;
    border-start-end-radius: 30px;

    @media (max-width: 500px) {
        padding: 12px 20px;
        border-start-start-radius: 20px;
        border-start-end-radius: 20px;
    }
`

export const TitleOne = styled.h1`
    font-weight: 600;
    font-size: 29px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 25px;
    }

    @media (max-width: 500px) {
        font-size: 18px;
    }
`

export const TitleTwoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid ${ ( { theme } ) => theme.color };
    background-color: ${ ( { theme } ) => theme.color };
    border-radius: 15px;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover {
        background-color: #fff;
        transform: scale(1.04);
    }

    @media (max-width: 768px) {
        transform: scale(0.85);

        &:hover {
            transform: scale(0.9);
        }
    }
`

export const TitleTwo = styled.h1`
    font-size: 17px;
    font-weight: 600;
    letter-spacing: .5px;
    color: #fff;
    transition: .3s ease-in-out;

    ${ TitleTwoContainer }:hover & {
        color: ${ ( { theme } ) => theme.color };
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const Section = styled.section`
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        background-color: #fff;
        border-end-start-radius: 30px;
        border-end-end-radius: 30px;
        padding: 10px;
        
        li {
            background-color: ${ ( { theme } ) => theme.backgroundColor };
            width: 240px;
            min-height: 240px;
            border-radius: 15px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            position: relative;

            h3 {
                font-weight: 600;
                font-size: 15px;
                margin-bottom: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;   
                line-height: 17px;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            img {
                width: 100%;
                border-radius: 10px;
                margin-bottom: 15px;
                border: 1px solid ${ ( { theme } ) => theme.backgroundColor };
            }

            div {

                p {
                    font-weight: 900;
                    font-size: 21px;
                    line-height: 10px;
                    color: ${ ( { theme } ) => theme.color };
                }

                span {
                    font-size: 11px;
                    font-weight: 600;
                }
            }
        }
    }

    @media (max-width: 800px) {
        ul {
            gap: 15px;
            
            li {
                width: 200px;
                min-height: 200px;
                border-radius: 12px;
                padding: 10px;

                h3 {
                    font-size: 13px;
                    margin-bottom: 18px;
                    line-height: 15px;
                }

                img {
                    margin-bottom: 13px;
                }

                div {
                    p {
                        font-size: 19px;
                    }

                    span {
                        font-size: 10px;
                    }
                }
            }
        }   
    }

    @media (max-width: 500px) {
        ul {
            gap: 10px;
            border-end-start-radius: 20px;
            border-end-end-radius: 20px;
            
            li {
                width: 160px;
                border-radius: 9px;
                padding: 8px;

                h3 {
                    font-size: 11px;
                    line-height: 13px;
                }

                img {
                    margin-bottom: 10px;
                }

                div {
                    p {
                        font-size: 16px;
                        line-height: 4px;
                    }

                    span {
                        font-size: 8px;
                    }
                }
            }
        }   
    }
`