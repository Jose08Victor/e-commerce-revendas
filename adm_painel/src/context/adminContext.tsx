import { createContext, useState } from "react";
import { AdminContextProps, AdminContextProviderProps, ProductData, ProductsData, ProductPopUp } from "../types";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext<AdminContextProps | null>( null );

export const themes = {
    avonColor: "#E4004B",
    naturaColor: "#FF6916"
}

const AdminContextProvider = ( props: AdminContextProviderProps ) => {
    const url = "http://localhost:4000";

    const [themeColor, setThemeColor] = useState("#4eb2ff")

    const [ brand, setBrand ] = useState<string>( "/" );

    const [ list, setList ] = useState<ProductsData[] | never[]>( [] );

    const [ productPopUp, setProductPopUp ] = useState<ProductPopUp | null>( null );

    const [ data, setData ] = useState<ProductData>( {
        name: "",
        image: null,
        price: "",
        category: "",
        quantity: "",
        validity: ""
    } );

    const fetchList = async () => {
        const response = await axios.get( `${ url }/api/${ brand }/list` );
        if ( !response.data.success ) toast.error( "Error" );

        setList( response.data.data );
    }

    const addProduct = async ( event: { preventDefault: () => void; } ) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append( "name", data.name )
        formData.append( "price", data.price )
        formData.append( "category", data.category )
        formData.append( "quantity", data.quantity )
        formData.append( "validity", data.validity )
        if ( data.image ) formData.append( "image", data.image );

        const response = await axios.post( `${ url }/api/${ brand }/add`, formData )

        if ( !response.data.success ) toast.error( response.data.message )

        toast.success( response.data.message );
        setData( {
            name: "",
            image: null,
            price: "",
            category: "",
            quantity: "",
            validity: ""
        } );
    }

    const updateProduct = async ( event: { preventDefault: () => void; } ) => {
        event.preventDefault();

        const formData = new FormData();
        if ( data.name ) formData.append( "name", data.name )
        if ( data.price ) formData.append( "price", data.price )
        if ( data.category ) formData.append( "category", data.category )
        if ( data.quantity ) formData.append( "quantity", data.quantity )
        if ( data.validity ) formData.append( "validity", data.validity )
        if ( data.image ) formData.append( "image", data.image );

        const response = await axios.put( `${ url }/api/${ brand }/update/${ productPopUp?.id }`, formData )

        if ( !response.data.success ) toast.error( response.data.message );

        toast.success( response.data.message );
        fetchList();
        setProductPopUp( null );
        setData( {
            name: "",
            image: null,
            price: "",
            category: "",
            quantity: "",
            validity: ""
        } );
    }

    const removeProduct = async ( productId: string ) => {
        const response = await axios.delete( `${ url }/api/${ brand }/delete/${ productId }` );
        await fetchList();

        if ( !response.data.success ) toast.error( response.data.message );

        toast.success( response.data.message );
    }

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

    const contextValue = { url, themeColor, setThemeColor,brand, setBrand, data, setData, list, productPopUp, setProductPopUp, fetchList, addProduct, updateProduct, removeProduct, onChangeHandler, onChangeInput }

    return (
        <AdminContext.Provider value={ contextValue }>
            { props.children }
        </AdminContext.Provider>
    )
}

export default AdminContextProvider