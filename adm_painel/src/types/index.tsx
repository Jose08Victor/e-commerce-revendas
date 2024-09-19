import { ReactNode } from "react";

export interface AdminContextProps {
    url: string;
    themes: Themes;
    themeColor: string[];
    setThemeColor: React.Dispatch<React.SetStateAction<string[]>>;
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
    productName: string[] | [];
    setProductName: React.Dispatch<React.SetStateAction<string[] | []>>;
    productData: ProductData;
    setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
    kitData: KitData;
    setKitData: React.Dispatch<React.SetStateAction<KitData>>;
    magazineData: MagazineData;
    setMagazineData: React.Dispatch<React.SetStateAction<MagazineData>>;
    list: List;
    popUp: PopUp | null;
    setPopUp: React.Dispatch<React.SetStateAction<PopUp | null>>;
    getProductList: () => Promise<void>;
    getKitList: () => Promise<void>;
    getMagazineList: () => Promise<void>;
    addProduct: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    addKit: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    updateProduct: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    updateKit: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    updateMagazineData: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    removeProduct: ( productId: string ) => Promise<void>;
    removeKit: ( productId: string ) => Promise<void>;
    onChangeHandler: ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
    onChangeValidityInput: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export interface AdminContextProviderProps {
    children: ReactNode;
}

export interface Themes {
    avonColor: string;
    naturaColor: string;
    defaultColor: string;
}

export interface ProductData {
    name: string;
    image: File | null;
    price: string;
    category: string;
    quantity: string;
    validity: string;
}

export interface KitData {
    image: File | null;
    nameOfProducts: string[] | [];
    price: string;
    quantity: string;
}

export interface MagazineData {
    currentCycle: "";
    startOfCycle: "";
    endOfCycle: "";
    avonMagazineImage: File | null;
    avonMagazineLink: "";
    casa_estiloMagazineImage: File | null;
    casa_estiloMagazineLink: "";
    naturaMagazineImage: File | null;
    naturaMagazineLink: "";
}

export interface PopUp {
    action: string;
    id?: string;
    image?: string;
    imageName?: string;
    linkName?: string;
    brand?: string;
}

export interface List {
    products: [] |
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
    kits: [] |
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