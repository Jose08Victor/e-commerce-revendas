import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddCategoryAndPrice, AddInput, AddName, AddProductFields, AddSelect, AddValidityAndQuantity } from "./styles";
import { FormContainer, AddImgUpload, InputFields, Buttons, AddButton, ChangeButton } from "../styles/componentStyles";

export const AddProduct = () => {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { themeColor, productData, setProductData, addProduct, brand, setType, onChangeHandler, onChangeValidityInput } = adminContext;

  return (
    <FormContainer onSubmit={ addProduct } >
      <AddImgUpload>
        <p>Escolha uma imagem</p>

        <label htmlFor="image">
          <img src={ productData.image ? URL.createObjectURL( productData.image ) : brand === "avon" ? pink_cloud_upload : orange_cloud_upload } alt="Upload Area Image" />
        </label>

        <input onChange={ ( e ) => setProductData( productData => ( { ...productData, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden required />
      </AddImgUpload>

      <InputFields>
        <AddProductFields theme={ themeColor }>
          <AddName>
            <p>Nome :</p>

            <AddInput theme={ themeColor } onChange={ onChangeHandler } value={ productData.name } type="text" name="name" placeholder="Digite aqui..." required />
          </AddName>

          <AddCategoryAndPrice>
            <div>
              <p>Categoria :</p>

              <AddSelect theme={ themeColor } onChange={ onChangeHandler } value={ productData.category } name="category" required>
                <option value="">Escolha a categoria</option>
                { brand === "avon" ?
                  <>
                    <option value="Perfumes">Perfumes</option>
                    <option value="Rosto">Rosto</option>
                    <option value="Lábios">Lábios</option>
                    <option value="Olhos">Olhos</option>
                    <option value="Unhas">Unhas</option>
                    <option value="Desodorantes">Desodorantes</option>
                    <option value="Cuidados Diários">Cuidados Diários</option>
                    <option value="Casa&Estilo">Casa&Estilo</option>
                  </>
                  :
                  <>
                    <option value="Perfumes">Perfumes</option>
                    <option value="Maquiagem">Maquiagem</option>
                    <option value="Cuidados Diários">Cuidados Diários</option>
                  </> }
              </AddSelect>
            </div>

            <div>
              <p>Preço :</p>

              <AddInput theme={ themeColor } onChange={ onChangeHandler } value={ productData.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } required />
            </div>
          </AddCategoryAndPrice>

          <AddValidityAndQuantity>
            <div>
              <p>Validade :</p>

              <AddInput theme={ themeColor } type="text" value={ productData.validity } name="validity" onChange={ onChangeValidityInput } placeholder="DD/MM/YYYY" maxLength={ 10 } required />
            </div>

            <div>
              <p>Quantidade :</p>

              <AddInput theme={ themeColor } type="number" value={ productData.quantity } name="quantity" onChange={ onChangeHandler } placeholder="-" min={ 0 } max={ 99 } required />
            </div>
          </AddValidityAndQuantity>
        </AddProductFields>

        <Buttons>
          <AddButton theme={ themeColor } type="submit">Confirmar</AddButton>

          <ChangeButton theme={ themeColor } onClick={ () => setType( "Kit" ) }>Adicionar Kit ?</ChangeButton>
        </Buttons>
      </InputFields>
    </FormContainer>
  )
};