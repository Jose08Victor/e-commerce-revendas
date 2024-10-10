import styled from "styled-components";

export const Main = styled.main`
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
    padding: 5px;
    gap: 10px;
    overflow-x: auto;
    width: 95%;
    margin: 0 auto;

    &::-webkit-scrollbar {
        height: 2px;
        background-color: aliceblue;
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
        color: aliceblue;
        background-color: ${ ( { theme } ) => theme.color };
        white-space: nowrap;
        font-weight: 600;

        &:hover {
            color: ${ ( { theme } ) => theme.color };
            background-color: aliceblue;
            border: 2px solid ${ ( { theme } ) => theme.color };
            cursor: pointer;
        }
    }

    @media (max-width: 500px) {
        display: flex;
    }
`

export const Banner = styled.img`
    width: 96%;
    border-radius: 20px;
    height: 280px;
    display: block;
    margin: 15px auto;
    object-fit: cover;
`

export const TitleOneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
`

export const TitleOne = styled.h1`
    font-weight: 600;
    font-size: 29px;
    letter-spacing: 1px;
`

export const TitleTwoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 15px;
`

export const TitleTwo = styled.h1`
    font-size: 17px;
    font-weight: 600;
    letter-spacing: .5px;
`

export const Section = styled.section`
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        
        li {
            background-color: aliceblue;
            width: 240px;
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
                border: 1px solid ${ ( { theme } ) => theme.color };
            }

            div{
                
            p {
                font-weight: 900;
                font-size: 20px;
                line-height: 10px;
                color: ${ ( { theme } ) => theme.color };
            }

            span {
                font-size: 11px;
                font-weight: 600;
            }
        }
             
            svg {
                position: absolute;
                width: 40px;
                background-color: ${ ( { theme } ) => theme.color };
                border: 1px solid aliceblue;
                border-radius: 50%;
                top: 182px;
                right: 18px;
            }
        }
    }
`