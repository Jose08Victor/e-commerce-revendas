import { LogoSVG } from "../svgContainer"
import { AcceptedCardsDiv, ContactsDiv, FooterContainer, Div, LogoDiv, LogoDivCopy } from "./styles"

export const Footer = () => {
    return (
        <FooterContainer>
            <Div>
                <AcceptedCardsDiv>
                    <img src="https://cdn.awsli.com.br/635/635842/arquivos/bandeiras-mercado-pago.png" alt="" />
                </AcceptedCardsDiv>

                <LogoDiv>
                    <LogoSVG />

                    <p>Copyright 2025 © Revendas.com All Right Reserved.</p>
                </LogoDiv>

                <ContactsDiv>
                    <h4>Contato :</h4>

                    <p>(71) 98831-3288</p>

                    <p>marlene11magalhaes@gmail.com</p>
                </ContactsDiv>
            </Div>

            <LogoDivCopy>
                <LogoSVG />

                <p>Copyright 2025 © Revendas.com All Right Reserved.</p>
            </LogoDivCopy>
        </FooterContainer>
    )
}