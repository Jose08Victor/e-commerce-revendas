//import banner_natura from "../../assets/banner_natura.jpg";
import banner_avon from "../../assets/banner_avon.jpg";
import { Banner, Main, Ul, CategoryField, TitleOneContainer, TitleOne, TitleTwo, TitleTwoContainer, Section } from "./styles";
import naturaIcon from "../../assets/naturaIcon.png";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddToBagSVG, MagazineSVG } from "../../components/svgContainer";

export const Home = () => {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { theme, setTheme } = adminContext;

  return (
    <Main>
      <Ul>
        <li onClick={ () => setTheme( "avonColor" ) } className={ theme === "avonColor" ? "active" : "" } >Produtos Avon</li>

        <li onClick={ () => setTheme( "naturaColor" ) } className={ theme === "naturaColor" ? "active" : "" }>Produtos Natura</li>
      </Ul>

      <CategoryField>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
      </CategoryField>

      <Banner src={ banner_avon } alt="" />

      {/* <Banner src={ banner_natura } alt="" /> */ }

      <TitleOneContainer>
        <TitleOne>Avon / Perfumes :</TitleOne>

        <TitleTwoContainer>

          <MagazineSVG />

          <TitleTwo>Ver Revistas</TitleTwo>
        </TitleTwoContainer>
      </TitleOneContainer>

      <Section>
        <ul>
          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <AddToBagSVG />
          </li>
        </ul>
      </Section>
    </Main>
  )
}