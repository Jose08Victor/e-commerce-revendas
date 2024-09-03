import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Section, HOne } from "./styles";
import { AddProduct } from "../../components/addProduct";
import { AddKit } from "../../components/addKit";

export const AddItem = () => {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { type } = adminContext;

  return (
    <Section>
      { type === "Magazine" ? <HOne>Adicionar Produto :</HOne> : <HOne>Adicionar { type } :</HOne> }

      { type === "Kit" ? <AddKit /> : <AddProduct /> }
    </Section>
  );
};