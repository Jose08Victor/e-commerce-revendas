import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import "./styles.css"
import { AddProduct } from "./pages/addProduct"
import { ProductList } from "./pages/productList"

function App () {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={ <AddProduct marca={"avon"} /> } />
        <Route path="/avon/lista-dos-produtos" element={ <ProductList marca={"avon"} produtos={ "disponivel" } /> } />
        <Route path="/avon/produtos-indisponiveis" element={ <ProductList marca={"avon"} produtos={ "indisponivel" } /> } />

        <Route path="/natura" element={ <AddProduct marca={"natura"} /> } />
        <Route path="/natura/lista-dos-produtos" element={ <ProductList marca={"natura"} produtos={ "disponivel" } /> } />
        <Route path="/natura/produtos-indisponiveis" element={ <ProductList marca={"natura"} produtos={ "indisponivel" } /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App