import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AdminContextProps, AdminContextProviderProps, ThemeType, List, Product } from "../types";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext<AdminContextProps | null>( null );

export const AdminContextProvider = ( props: AdminContextProviderProps ) => {
    const [ theme, setTheme ] = useState<ThemeType>( "avonColor" );

    const themes = {
        avonColor: {
            color: "#E4004B",
            backgroundColor: "rgba(228, 0, 75, .3)"
        },
        naturaColor: {
            color: "#ff5900",
            backgroundColor: "rgba(255, 105, 22, .45)",
        }
    };

    const url = "https://marlene-cosmeticos-server.onrender.com";

    const [ brand, setBrand ] = useState<string>( "avon" );

    const [ isBag, setIsBag ] = useState( false );

    const [ isNav, setIsNav ] = useState( false );

    const [ category, setCategory ] = useState( "Perfumes" );

    const [ list, setList ] = useState<List>( {
        avonProducts: [],
        avonKits: [],
        naturaProducts: [],
        naturaKits: [],
        magazine: []
    } );

    const [ inTheBag, setInTheBag ] = useState<Product[]>( [] );

    const getAvonProductList = async () => {
        try {
            const response = await axios.get( `${ url }/api/avon/productList` );

            if ( !response.data.success ) toast.error( response.data.message );
            else setList( list => ( { ...list, avonProducts: response.data.data } ) );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    const getNaturaProductList = async () => {
        try {
            const response = await axios.get( `${ url }/api/natura/productList` );

            if ( !response.data.success ) toast.error( response.data.message );
            else setList( list => ( { ...list, naturaProducts: response.data.data } ) );
        } catch ( error ) {
            console.log( error );
            toast.error( "Falha ao conectar com o servidor" );
        }
    };

    

    const contextValue = { theme, setTheme, url, isBag, setIsBag, isNav, setIsNav, category, setCategory, list, brand, setBrand, inTheBag, setInTheBag, getAvonProductList, getNaturaProductList };

    return (
        <AdminContext.Provider value={ contextValue }>
            <StyledThemeProvider theme={ themes[ theme ] }>
                { props.children }
            </StyledThemeProvider>
        </AdminContext.Provider>
    )
};