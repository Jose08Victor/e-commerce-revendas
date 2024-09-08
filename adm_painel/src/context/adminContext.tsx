import { createContext, useState } from "react";
import { AdminContextProps, AdminContextProviderProps, Themes, ProductData, PopUp, KitData, List, MagazineData } from "../types";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext<AdminContextProps | null>( null );

export const AdminContextProvider = ( props: AdminContextProviderProps ) => {
    const themes: Themes = {
        avonColor: "#E4004B",
        naturaColor: "#FF6916",
        defaultColor: "#4eb2ff"
    };

    const url = "https://marlene-cosmeticos-server.onrender.com";

    const [ themeColor, setThemeColor ] = useState( [themes.defaultColor ] );

    const [ brand, setBrand ] = useState<string>( "/" );

    const [ type, setType ] = useState<string>( "Produto" );

    const [ productName, setProductName ] = useState<string[] | []>( [] );

    const [ popUp, setPopUp ] = useState<PopUp | null>( null );

    const [ list, setList ] = useState<List>( {
        products: [],
        kits: [],
        magazine: []
    } );

    const [ productData, setProductData ] = useState<ProductData>( {
        name: "",
        image: null,
        price: "",
        category: "",
        quantity: "",
        validity: ""
    } );

    const [ kitData, setKitData ] = useState<KitData>( {
        image: null,
        nameOfProducts: [ "" ],
        price: "",
        quantity: ""
    } );

    const [ magazineData, setMagazineData ] = useState<MagazineData>( {
        currentCycle: "",
        startOfCycle: "",
        endOfCycle: "",
        avonMagazineImage: null,
        avonMagazineLink: "",
        casa_estiloMagazineImage: null,
        casa_estiloMagazineLink: "",
        naturaMagazineImage: null,
        naturaMagazineLink: ""
    } );

    const getProductList = async () => {
        try {
            const response = await axios.get( `${ url }/api/${ brand }/productList` );
            if ( !response.data.success ) toast.error( response.data.message );
            else setList( list => ( { ...list, products: response.data.data } ) );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const getKitList = async () => {
        try {
            const response = await axios.get( `${ url }/api/${ brand }/kitList` );
            if ( !response.data.success ) toast.error( response.data.message );
            else setList( list => ( { ...list, kits: response.data.data } ) );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const getMagazineList = async () => {
        try {
            const response = await axios.get( `${ url }/api/magazineData/get` );
            if ( !response.data.success ) toast.error( response.data.message );
            else setList( list => ( { ...list, magazine: response.data.data } ) );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    }

    const addProduct = async ( event: { preventDefault: () => void; } ) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append( "name", productData.name );
            formData.append( "price", productData.price );
            formData.append( "category", productData.category );
            formData.append( "quantity", productData.quantity );
            formData.append( "validity", productData.validity );
            if ( productData.image ) formData.append( "image", productData.image );

            const response = await axios.post( `${ url }/api/${ brand }/addProduct`, formData );
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

            setProductData( {
                name: "",
                image: null,
                price: "",
                category: "",
                quantity: "",
                validity: ""
            } );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const addKit = async ( event: { preventDefault: () => void; } ) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append( "nameOfProducts", kitData.nameOfProducts.join( "//" ) );
            formData.append( "price", kitData.price );
            formData.append( "quantity", kitData.quantity );
            if ( kitData.image ) formData.append( "image", kitData.image );

            const response = await axios.post( `${ url }/api/${ brand }/addKit`, formData );
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

            setKitData( {
                image: null,
                nameOfProducts: [ "" ],
                price: "",
                quantity: ""
            } );
            setProductName( [] );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const updateProduct = async ( event: { preventDefault: () => void; } ) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            if ( productData.name ) formData.append( "name", productData.name );
            if ( productData.price ) formData.append( "price", productData.price );
            if ( productData.category ) formData.append( "category", productData.category );
            if ( productData.quantity ) formData.append( "quantity", productData.quantity );
            if ( productData.validity ) formData.append( "validity", productData.validity );
            if ( productData.image ) formData.append( "image", productData.image );

            const response = await axios.put( `${ url }/api/${ brand }/updateProduct/${ popUp?.id }`, formData );
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

            getProductList();
            setPopUp( null );
            setProductData( {
                name: "",
                image: null,
                price: "",
                category: "",
                quantity: "",
                validity: ""
            } );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const updateKit = async ( event: { preventDefault: () => void; } ) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            if ( kitData.nameOfProducts ) formData.append( "nameOfProducts", kitData.nameOfProducts.join( "//" ) );
            if ( kitData.price ) formData.append( "price", kitData.price );
            if ( kitData.quantity ) formData.append( "quantity", kitData.quantity );
            if ( kitData.image ) formData.append( "image", kitData.image );

            const response = await axios.put( `${ url }/api/${ brand }/updateKit/${ popUp?.id }`, formData );
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

            getKitList();
            setPopUp( null );
            setProductName( [] );
            setKitData( {
                image: null,
                nameOfProducts: [ "" ],
                price: "",
                quantity: ""
            } );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const updateMagazineData = async ( event: { preventDefault: () => void; } ) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            if ( magazineData.currentCycle ) formData.append( "currentCycle", magazineData.currentCycle );
            if ( magazineData.startOfCycle ) formData.append( "startOfCycle", magazineData.startOfCycle );
            if ( magazineData.endOfCycle ) formData.append( "endOfCycle", magazineData.endOfCycle );
            if ( magazineData.avonMagazineImage ) formData.append( "image", magazineData.avonMagazineImage );
            if ( magazineData.avonMagazineLink ) formData.append( "avonMagazineLink", magazineData.avonMagazineLink );
            if ( magazineData.casa_estiloMagazineImage ) formData.append( "image", magazineData.casa_estiloMagazineImage );
            if ( magazineData.casa_estiloMagazineLink ) formData.append( "casa_estiloMagazineLink", magazineData.casa_estiloMagazineLink );
            if ( magazineData.naturaMagazineImage ) formData.append( "image", magazineData.naturaMagazineImage );
            if ( magazineData.naturaMagazineLink ) formData.append( "naturaMagazineLink", magazineData.naturaMagazineLink );
            if ( popUp?.brand ) formData.append( "magazine", popUp?.brand );


            const response = await axios.put( `${ url }/api/magazineData/update/66aec43fe9cad453353d4ec4`, formData );
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

            getMagazineList();
            setPopUp( null );
            setMagazineData( {
                currentCycle: "",
                startOfCycle: "",
                endOfCycle: "",
                avonMagazineImage: null,
                avonMagazineLink: "",
                casa_estiloMagazineImage: null,
                casa_estiloMagazineLink: "",
                naturaMagazineImage: null,
                naturaMagazineLink: ""
            } );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const removeProduct = async ( productId: string ) => {
        try {
            const response = await axios.delete( `${ url }/api/${ brand }/deleteProduct/${ productId }` );
            await getProductList();
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const removeKit = async ( productId: string ) => {
        try {
            const response = await axios.delete( `${ url }/api/${ brand }/deleteKit/${ productId }` );
            await getKitList();
            if ( !response.data.success ) toast.error( response.data.message );
            else toast.success( response.data.message );

        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const onChangeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const name = event.target.name;
        const value = event.target.value;

        brand === "/" && setMagazineData( magazineData => ( { ...magazineData, [ name ]: value } ) );
        type === "Produto" && setProductData( productData => ( { ...productData, [ name ]: value } ) );
        type === "Kit" && setKitData( kitData => ( { ...kitData, [ name ]: value } ) );
    };

    const onChangeValidityInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const inputValue = event.target.value.replace( /\D/g, '' ); // Remove qualquer caractere que não seja dígito
        let formattedValue = inputValue;

        if ( inputValue.length > 2 ) formattedValue = `${ inputValue.slice( 0, 2 ) }/${ inputValue.slice( 2 ) }`;
        if ( inputValue.length > 4 ) formattedValue = `${ formattedValue.slice( 0, 5 ) }/${ formattedValue.slice( 5 ) }`;

        brand === "/" && setMagazineData( magazineData => ( { ...magazineData, [ event.target.name ]: formattedValue } ) );
        type === "Produto" && setProductData( productData => ( { ...productData, [ event.target.name ]: formattedValue } ) );
    };

    const contextValue = { url, themes, themeColor, setThemeColor, brand, setBrand, type, setType, productData, setProductData, magazineData, setMagazineData, list, popUp, setPopUp, getProductList, getKitList, getMagazineList, addProduct, updateProduct, updateKit, updateMagazineData, removeProduct, removeKit, kitData, setKitData, productName, setProductName, addKit, onChangeHandler, onChangeValidityInput };

    return (
        <AdminContext.Provider value={ contextValue }>
            { props.children }
        </AdminContext.Provider>
    )
};
