import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Section, H1 } from "./styles";
import { AddProduct } from "../../components/addProduct";
import { AddKit } from "../../components/addKit";

export const AddItem = () => {
  const adminContext = useContext( AdminContext );

  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { type } = adminContext;

  return (
    <Section>
      { type === "Magazine" ? <H1>Adicionar Produto :</H1> : <H1>Adicionar { type } :</H1> }

      { type === "Kit" ? <AddKit /> : <AddProduct /> }
    </Section>
  );
};