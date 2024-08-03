import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import "./styles.css"
import { AddProduct } from "./pages/addProduct"
import { ProductList } from "./pages/productList"
import { SideBar } from "./components/sideBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminContextProvider from "./context/adminContext"
import { Home } from "./pages/home"
import { KitList } from "./pages/kitList"

function App () {
  return (
    <AdminContextProvider>
      <BrowserRouter>
        <ToastContainer />

        <Header />

        <main>
          <SideBar />

          <Routes>
            <Route path="/" element={ <Home /> } />

            <Route path="/avon/adicionar-produto" element={ <AddProduct /> } />

            <Route path="/avon/lista-dos-produtos" element={ <ProductList produtos={ "disponivel" } /> } />

            <Route path="/avon/produtos-indisponiveis" element={ <ProductList produtos={ "indisponivel" } /> } />

            <Route path="/avon/kits-presentes" element={ <KitList /> } />


            <Route path="/natura/adicionar-produto" element={ <AddProduct /> } />

            <Route path="/natura/lista-dos-produtos" element={ <ProductList produtos={ "disponivel" } /> } />

            <Route path="/natura/produtos-indisponiveis" element={ <ProductList produtos={ "indisponivel" } /> } />

            <Route path="/natura/kits-presentes" element={ <KitList /> } />
          </Routes>
        </main>

      </BrowserRouter>
    </AdminContextProvider>
  )
}

export default App