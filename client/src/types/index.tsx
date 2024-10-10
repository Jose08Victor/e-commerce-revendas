import { ReactNode } from "react";

export interface AdminContextProps {
    url: string;
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
    isBag: boolean;
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>;
    isNav: boolean;
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AdminContextProviderProps {
    children: ReactNode;
}

export type ThemeType = "avonColor" | "naturaColor";