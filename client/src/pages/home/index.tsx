import banner_natura from "../../assets/banner_natura.jpg";
import banner_avon from "../../assets/banner_avon.jpg";
import { Banner, Main, Ul, CategoryField, TitleOneContainer, TitleOne, TitleTwo, TitleTwoContainer, Section } from "./styles";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddToBagSVG, MagazineSVG } from "../../components/svgContainer";

export const Home = () => {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { theme, setTheme, getAvonProductList, getNaturaProductList, list, brand, setBrand, category, setCategory, inTheBag, setInTheBag } = adminContext;

  useEffect( () => {
    getAvonProductList();
    getNaturaProductList();
  }, [] );

  useEffect( () => {
    setCategory( "Perfumes" );
  }, [ brand ] );

  return (
    <Main>
      <Ul>
        <li onClick={ () => {
          setTheme( "avonColor" )
          setBrand( "avon" )
        } } className={ theme === "avonColor" ? "active" : "" } >Produtos Avon</li>

        <li onClick={ () => {
          setTheme( "naturaColor" )
          setBrand( "natura" )
        } } className={ theme === "naturaColor" ? "active" : "" }>Produtos Natura</li>
      </Ul>

      <CategoryField>
        { brand === "avon" ?
          <>
            <li onClick={ () => setCategory( "Perfumes" ) }
              className={ category === "Perfumes" ? "selected" : "" }>Perfumes</li>

            <li onClick={ () => setCategory( "Kits" ) }
              className={ category === "Kits" ? "selected" : "" }>Kits</li>

            <li onClick={ () => setCategory( "Rosto" ) }
              className={ category === "Rosto" ? "selected" : "" }>Rosto</li>

            <li onClick={ () => setCategory( "Lábios" ) }
              className={ category === "Lábios" ? "selected" : "" }>Lábios</li>

            <li onClick={ () => setCategory( "Olhos" ) }
              className={ category === "Olhos" ? "selected" : "" }>Olhos</li>

            <li onClick={ () => setCategory( "Unhas" ) }
              className={ category === "Unhas" ? "selected" : "" }>Unhas</li>

            <li onClick={ () => setCategory( "Desodorantes" ) }
              className={ category === "Desodorantes" ? "selected" : "" }>Desodorantes</li>

            <li onClick={ () => setCategory( "Cuidados Diários" ) }
              className={ category === "Cuidados Diários" ? "selected" : "" }>Cuidados Diários</li>

            <li onClick={ () => setCategory( "Casa&Estilo" ) }
              className={ category === "Casa&Estilo" ? "selected" : "" }>Casa & Estilo</li>
          </>
          :
          <>
            <li onClick={ () => setCategory( "Perfumes" ) }
              className={ category === "Perfumes" ? "selected" : "" }>Perfumes</li>

            <li onClick={ () => setCategory( "Kits" ) }
              className={ category === "Kits" ? "selected" : "" }>Kits</li>

            <li onClick={ () => setCategory( "Cuidados Diários" ) }
              className={ category === "Cuidados Diários" ? "selected" : "" }>Cuidados Diários</li>

            <li onClick={ () => setCategory( "Maquiagem" ) }
              className={ category === "Maquiagem" ? "selected" : "" }>Maquiagem</li>
          </> }
      </CategoryField>

      { brand === "avon" ? <Banner src={ banner_avon } alt="Avon Banner" /> :
        <Banner src={ banner_natura } alt="Natura Banner" /> }

      <TitleOneContainer onClick={() => console.log(inTheBag)}>
        <TitleOne >{ brand === "avon" ? "Avon" : "Natura" } / { category } :</TitleOne>

        <TitleTwoContainer>

          <MagazineSVG />

          <TitleTwo>Ver Revistas</TitleTwo>
        </TitleTwoContainer>
      </TitleOneContainer>

      <Section>
        <ul>
          { brand === "avon" ? list.avonProducts.map( ( product, index ) => {
            if ( product.quantity > 0 && product.category === category )
              return (
                <li key={ index }>
                  <img src={ product.imageURL } alt={ product.name } />

                  <h3>{ product.name }</h3>

                  <div>
                    <p>{ Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } ).format( product.price ) }</p>

                    <span>R$20 de desconto no pix</span>
                  </div>

                  <div onClick={ () => setInTheBag([...inTheBag, product]) }>
                    <AddToBagSVG />
                  </div>
                </li>
              )
          } ) :
            list.naturaProducts.map( ( product, index ) => {
              if ( product.quantity > 0 && product.category === category )
                return (
                  <li key={ index }>
                    <img src={ product.imageURL } alt={ product.name } />

                    <h3>{ product.name }</h3>

                    <div>
                      <p>{ Intl.NumberFormat( 'pt-BR', { style: 'currency', currency: 'BRL' } ).format( product.price ) }</p>

                      <span>R$20 de desconto no pix</span>
                    </div>

                    <div onClick={ () => setInTheBag([...inTheBag, product]) }>
                      <AddToBagSVG />
                    </div>
                  </li>
                )
            } )
          }
        </ul>
      </Section>
    </Main>
  )
}