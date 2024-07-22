import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import "./styles.css"
import { AddProduct } from "./pages/addProduct"
import { ProductList } from "./pages/productList"
import { SideBar } from "./components/sideBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {

  const url = "http://localhost:4000";

  return (
    <BrowserRouter>
      <ToastContainer />
      
      <Header />

      <main>
        <SideBar />

        <Routes>
          <Route path="/avon/adicionar-produto" element={ <AddProduct url={ url } marca={ "avon" } /> } />

          <Route path="/avon/lista-dos-produtos" element={ <ProductList url={ url } marca={ "avon" } produtos={ "disponivel" } /> } />

          <Route path="/avon/produtos-indisponiveis" element={ <ProductList url={ url } marca={ "avon" } produtos={ "indisponivel" } /> } />


          <Route path="/natura/adicionar-produto" element={ <AddProduct url={ url } marca={ "natura" } /> } />

          <Route path="/natura/lista-dos-produtos" element={ <ProductList url={ url } marca={ "natura" } produtos={ "disponivel" } /> } />

          <Route path="/natura/produtos-indisponiveis" element={ <ProductList url={ url } marca={ "natura" } produtos={ "indisponivel" } /> } />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App