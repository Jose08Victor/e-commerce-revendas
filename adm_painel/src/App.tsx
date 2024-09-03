import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { AddItem } from "./pages/addItem";
import { ProductList } from "./pages/productList";
import { SideBar } from "./components/sideBar";
import { ToastContainer } from 'react-toastify';
import { AdminContext } from "./context/adminContext";
import { Home } from "./pages/home";
import { KitList } from "./pages/kitList";
import { useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';

function App () {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { brand } = adminContext;

  return (
    <BrowserRouter>
      <ToastContainer />

      <Header />

      <main>
        <SideBar />

        <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path={ `/${ brand }/adicionar-item` } element={ <AddItem /> } />

          <Route path={ `/${ brand }/lista-dos-produtos` } element={ <ProductList products={ "available" } /> } />

          <Route path={ `/${ brand }/produtos-indisponiveis` } element={ <ProductList products={ "unavailable" } /> } />

          <Route path={ `/${ brand }/kits-presentes` } element={ <KitList /> } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;