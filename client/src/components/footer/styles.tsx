import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #fff;
    border-start-start-radius: 30px;
    border-start-end-radius: 30px;
    text-align: center;
    padding: 10px 0;

    @media (max-width: 500px) {
        padding: 8px 0 5px;
        border-start-start-radius: 20px;
        border-start-end-radius: 20px;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
`

export const AcceptedCardsDiv = styled.div`
    width: 200px;

    img {
        width: 150px;
    }

    @media (max-width: 500px) {
        width: 160px;

        img {
            width: 120px;
        }
    }

    @media (max-width: 375px) {
        width: 110px;

        img {
            width: 100px;
        }
    }
`

export const LogoDiv = styled.div`
    svg {
            cursor: default;

            &:hover {
            transform: scale(1.0);
        }
    }

    p {
        font-size: 11px;
        font-weight: 500;
    }

    @media (max-width: 715px) {
        display: none;

        p {
            font-size: 9px;
        }
    }
`

export const ContactsDiv = styled.div`
     p {
        font-size: 12px;
        font-weight: 500;
    }

    @media (max-width: 500px) {
        h4 {
            font-size: 11px;
        }

        p {
            font-size: 9px;
        }
    }

    @media (max-width: 375px) {
        h4 {
            font-size: 9px;
        }

        p {
            font-size: 7px;
        }
    }
`

export const LogoDivCopy = styled(LogoDiv)`
    display: none;

    @media (max-width: 715px) {
        display: block;
    }

    @media (max-width: 500px) {
        svg {
            height: 35px;
        }

        p {
            font-size: 6px;
        }
    }
`