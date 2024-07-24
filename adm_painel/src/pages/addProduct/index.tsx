import "./styles.css"
import upload_area from "../../assets/cloud-upload.svg"
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

export const AddProduct = () => {
  const adminContext = useContext( AdminContext );

  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { data, setData, onChangeHandler, onChangeInput, addProduct } = adminContext;

  return (
    <form className="form-container" onSubmit={ addProduct } >
      <div className="add-img-upload">
        <p>Escolha uma imagem :</p>

        <label htmlFor="image">
          <img src={ data.image ? URL.createObjectURL( data.image ) : upload_area } alt="Upload Area Image" />
        </label>

        <input onChange={ ( e ) => setData( data => ( { ...data, [ e.target.name ]: e.target.files ? e.target.files[ 0 ] : null } ) ) } type="file" id="image" name="image" hidden required />
      </div>

      <div className="input-fields">
        <div className="add-product-fields">
          <div className="add-name">
            <p>Nome :</p>

            <input onChange={ onChangeHandler } value={ data.name } type="text" name="name" placeholder="Digite aqui..." required />
          </div>

          <div className="add-category-price">
            <div className="add-category">
              <p>Categoria :</p>

              <select onChange={ onChangeHandler } value={ data.category } name="category" required>
                <option value="">Escolha a categoria</option>
                <option value="Kits">Kits</option>
                <option value="Perfumes">Perfumes</option>
                <option value="Maquiagem">Maquiagem</option>
              </select>
            </div>

            <div className="add-price">
              <p>Preço :</p>

              <input onChange={ onChangeHandler } value={ data.price } type="Number" name="price" placeholder="R$ -" min={ 0 } max={ 999 } required />
            </div>
          </div>

          <div className="add-validity-quantity">
            <div className="add-validity">
              <p>Validade :</p>

              <input type="text" value={ data.validity } name="validity" onChange={ onChangeInput } placeholder="DD/MM/YYYY" maxLength={ 10 } required />
            </div>

            <div className="add-quantity">
              <p>Quantidade :</p>

              <input type="number" value={ data.quantity } name="quantity" onChange={ onChangeHandler } placeholder="-" min={ 0 } max={ 99 } required />
            </div>
          </div>
        </div>

        <button type="submit" className="add-btn">Adicionar</button>
      </div>
    </form>
  );
};