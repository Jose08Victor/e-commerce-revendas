import { ReactNode } from "react";

export interface AdminContextProps {
    url: string;
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    data: ProductData;
    setData: React.Dispatch<React.SetStateAction<ProductData>>;
    list: ProductsData[] | never[];
    productPopUp: ProductPopUp | null;
    setProductPopUp: React.Dispatch<React.SetStateAction<ProductPopUp | null>>;
    fetchList: () => Promise<void>;
    addProduct: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    updateProduct: ( event: React.FormEvent<HTMLFormElement> ) => Promise<void>;
    removeProduct: ( productId: string ) => Promise<void>;
    onChangeHandler: ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
    onChangeInput: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export interface AdminContextProviderProps {
    children: ReactNode;
}

export interface ProductData {
    name: string;
    image: File | null;
    price: string;
    category: string;
    quantity: string;
    validity: string;
}

export interface ProductsData {
    _id: string;
    name: string;
    image: File;
    price: number;
    category: string;
    quantity: number;
    validity: string;
}

export interface ProductPopUp {
    id: string;
    action: string;
}