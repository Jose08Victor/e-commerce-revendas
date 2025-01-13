import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AdminContextProps, AdminContextProviderProps, ThemeType } from "../types";

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

    const [ isBag, setIsBag ] = useState( false );

    const [ isNav, setIsNav ] = useState( false );

    const contextValue = { theme, setTheme, url, isBag, setIsBag, isNav, setIsNav };

    return (
        <AdminContext.Provider value={ contextValue }>
            <StyledThemeProvider theme={ themes[ theme ] }>
                { props.children }
            </StyledThemeProvider>
        </AdminContext.Provider>
    )
};