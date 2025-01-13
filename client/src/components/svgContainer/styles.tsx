import styled from "styled-components";
import { TitleTwoContainer } from "../../pages/home/styles";

export const Svg = styled.svg`
    fill: ${ ( { theme } ) => theme.color };
    cursor: pointer;
    transition: .3s ease-in-out; 

    &:hover {
        transform: scale(1.2);
    }
`

export const LogoSvg = styled( Svg )`
    width: 90px; 
    height: 55px;

    text, circle {
        font-family: Georgia;
        text-anchor: middle;
        stroke: ${ ( { theme } ) => theme.color };
    }

    .text-1 {
        font-size: 95px;
    }

    .text-2 {
        font-size: 42px;
    }
    
    .circle-1 {
        fill: none;
        stroke-width: 6;
    }

    .stop-1 {
    stop-color: ${ ( { theme } ) => theme.color };
    stop-opacity: .6;
}

.stop-2 {
    stop-color: ${ ( { theme } ) => theme.color };
    stop-opacity: .5;
}

.shadow {
    flood-color: ${ ( { theme } ) => theme.color };
}

    @media (max-width: 500px) {
        height: 45px;   
    }
`

export const BagSvg = styled( Svg )`
    width: 28px;

    @media (max-width: 500px) {
        width: 20px;
    }
`

export const ProfileSvg = styled( Svg )`
    width: 25px;

    @media (max-width: 500px) {
        width: 18px;
    }
`

export const MagnifyingGlassSvg = styled( Svg )`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 95%;
    fill: #222;
    cursor: pointer;
    transition: .3s ease-in-out; 

    &:hover {
        fill: ${ ( { theme } ) => theme.color };
        transform: scale(1.2);
    }

    @media (max-width: 1024px) {
        left: 92%;
    }
`

export const TrashCanSvg = styled( Svg )`
    width: 17.5px;
    position: relative;
    right: -11px;
    top: -5px;

    &:hover {
        fill: gray;
    }
`

export const MagazineSvg = styled( Svg )`
    width: 40px;
    fill: #fff;

    ${ TitleTwoContainer }:hover & {
        fill: ${ ( { theme } ) => theme.color };
        transform: scale(1);
    }

    @media (max-width: 500px) {
        width: 30px;
    }
`

export const AddToBagSvg = styled( Svg )`
    position: absolute;
    width: 40px;
    fill: #fff;
    background-color: ${ ( { theme } ) => theme.color };
    border: 1px solid ${ ( { theme } ) => theme.color };
    border-radius: 50%;
    top: 182px;
    right: 18px;

    &:hover {
        background-color: #fff;
        fill: ${ ( { theme } ) => theme.color };
    }

    @media (max-width: 800px) {
        width: 35px;
        top: 150px;
        right: 14px;
    }

    @media (max-width: 500px) {
        width: 29px;
        top: 120px;
        right: 12px;
    }
`