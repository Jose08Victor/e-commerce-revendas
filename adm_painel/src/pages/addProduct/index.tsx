import { useState } from "react";
import "./styles.css"
import axios from "axios";
import { toast } from "react-toastify";
import upload_area from "../../assets/cloud-upload.svg"

interface ProductData {
  name: string;
  image: File | null;
  price: string;
  category: string;
  quantity: string;
  validity: string;
}

export const AddProduct = ( { url, marca }: { url: string, marca: string } ) => {
  const [ data, setData ] = useState<ProductData>( {
    name: "",
    image: null,
    price: "",
    category: "",
    quantity: "",
    validity: ""
  } );

  const onChangeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const name = event.target.name;
    const value = event.target.value;
    setData( data => ( { ...data, [ name ]: value } ) )
  }

  const onChangeInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const inputValue = event.target.value.replace( /\D/g, '' ); // Remove qualquer caractere que não seja dígito
    let formattedValue = inputValue;

    if ( inputValue.length > 2 ) formattedValue = `${ inputValue.slice( 0, 2 ) }/${ inputValue.slice( 2 ) }`;
    if ( inputValue.length > 4 ) formattedValue = `${ formattedValue.slice( 0, 5 ) }/${ formattedValue.slice( 5 ) }`;

    setData( data => ( { ...data, [ event.target.name ]: formattedValue } ) )
  };

  const onSubmitHandler = async ( event: { preventDefault: () => void; } ) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append( "name", data.name )
    formData.append( "price", data.price )
    formData.append( "category", data.category )
    formData.append( "quantity", data.quantity )
    formData.append( "validity", data.validity )
    if ( data.image ) formData.append( "image", data.image );

    const response = await axios.post( `${ url }/api/${ marca }/add`, formData )

    if ( response.data.success ) {
      setData( {
        name: "",
        image: null,
        price: "",
        category: "",
        quantity: "",
        validity: ""
      } );

      toast.success( response.data.message )
    } else {
      toast.error( response.data.message )
    }
  }

  return (
    <form className="form-container" onSubmit={ onSubmitHandler } >
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