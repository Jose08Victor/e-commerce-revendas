import { ReactNode } from "react";

export interface AdminContextProps {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
    url: string;
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    isBag: boolean;
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>;
    isNav: boolean;
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    list: List;
    inTheBag: Product[];
    setInTheBag: React.Dispatch<React.SetStateAction<Product[]>>;
    getAvonProductList: () => Promise<void>;
    getNaturaProductList: () => Promise<void>;
}

export interface AdminContextProviderProps {
    children: ReactNode;
}

export type ThemeType = "avonColor" | "naturaColor";

export interface List {
    avonProducts: [] |
    [ {
        _id: string;
        name: string;
        imageName: string;
        imageURL: string;
        price: number;
        category: string;
        quantity: number;
        validity: string;
    } ],
    avonKits: [] |
    [ {
        _id: string;
        imageName: string;
        imageURL: string;
        nameOfProducts: string[];
        price: number;
        quantity: number;
    } ],
    naturaProducts: [] |
    [ {
        _id: string;
        name: string;
        imageName: string;
        imageURL: string;
        price: number;
        category: string;
        quantity: number;
        validity: string;
    } ],
    naturaKits: [] |
    [ {
        _id: string;
        imageName: string;
        imageURL: string;
        nameOfProducts: string[];
        price: number;
        quantity: number;
    } ],
    magazine: [] |
    [ {
        _id: string;
        currentCycle: number;
        startOfCycle: string;
        endOfCycle: string;
        avonMagazineImageName: string;
        avonMagazineImageURL: string;
        avonMagazineLink: string;
        casa_estiloMagazineImageName: string;
        casa_estiloMagazineImageURL: string;
        casa_estiloMagazineLink: string;
        naturaMagazineImageName: string;
        naturaMagazineImageURL: string;
        naturaMagazineLink: string;
    } ]
}

export interface Product {
    _id: string;
    name: string;
    imageName: string;
    imageURL: string;
    price: number;
    category: string;
    quantity: number;
    validity: string;
}