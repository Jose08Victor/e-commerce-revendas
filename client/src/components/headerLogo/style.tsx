import styled from "styled-components";

export const Logo = styled.svg`
    width: 90px; 
    height: 55px;

    text, circle {
        font-family: Georgia;
        text-anchor: middle;
        fill: ${ ( { theme } ) => theme.color };
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