import pink_cloud_upload from "../../assets/pink_cloud_upload.svg";
import orange_cloud_upload from "../../assets/orange_cloud_upload.svg";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { AddButton, AddCategory_Price, AddImgUpload, AddName, AddProductFields, AddValidity_Quantity, FormContainer, InputFields } from "./styles";

export const AddProduct = () => {
  const adminContext = useContext( AdminContext );

  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { themeColor, data, setData, onChangeHandler, onChangeInput, addProduct, brand } = adminContext;

  return (
    <FormContainer onSubmit={ addProduct } >
      <AddImgUpload>
        <p>Escolha uma imagem :</p>

        <label htmlFor="image">
          <img src={ data.image ? URL.createObjectURL( data.image ) : brand === "avon" ? pink_cloud_upload : orange_cloud_upload } alt="Upload Area Image" />
        </label>

        <input onChange={ ( e ) => setData( data => ( { ...data, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden required />
      </AddImgUpload>

      <InputFields>
        <AddProductFields theme={ themeColor }>
          <AddName>
            <p>Nome :</p>

            <input onChange={ onChangeHandler } value={ data.name } type="text" name="name" placeholder="Digite aqui..." required />
          </AddName>

          <AddCategory_Price>
            <div>
              <p>Categoria :</p>

              <select onChange={ onChangeHandler } value={ data.category } name="category" required>
                <option value="">Escolha a categoria</option>
                <option value="Kits">Kits</option>
                <option value="Perfumes">Perfumes</option>
                <option value="Maquiagem">Maquiagem</option>
              </select>
            </div>

            <div>
              <p>Preço :</p>

              <input onChange={ onChangeHandler } value={ data.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } required />
            </div>
          </AddCategory_Price>

          <AddValidity_Quantity>
            <div>
              <p>Validade :</p>

              <input type="text" value={ data.validity } name="validity" onChange={ onChangeInput } placeholder="DD/MM/YYYY" maxLength={ 10 } required />
            </div>

            <div>
              <p>Quantidade :</p>

              <input type="number" value={ data.quantity } name="quantity" onChange={ onChangeHandler } placeholder="-" min={ 0 } max={ 99 } required />
            </div>
          </AddValidity_Quantity>
        </AddProductFields>

        <AddButton theme={ themeColor } type="submit">Adicionar</AddButton>
      </InputFields>
    </FormContainer>
  );
};