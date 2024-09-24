import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/header";
import { AddItem } from "./pages/addItem";
import { ProductList } from "./pages/productList";
import { SideBar } from "./components/sideBar";
import { ToastContainer } from 'react-toastify';
import { AdminContext } from "./context/adminContext";
import { Home } from "./pages/home";
import { KitList } from "./pages/kitList";
import { useContext, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Login } from "./pages/login";
import { auth } from "./firebaseConfig";

function App () {
  const adminContext = useContext( AdminContext );
  if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

  const { brand } = adminContext;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <ToastContainer />

      { location.pathname !== "/login" && <Header /> }

      <main>
        { location.pathname !== "/login" && <SideBar /> }

        <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path="/login" element={ <Login /> } />

          <Route path={ `/${ brand }/adicionar-item` } element={ <AddItem /> } />

          <Route path={ `/${ brand }/lista-dos-produtos` } element={ <ProductList products={ "available" } /> } />

          <Route path={ `/${ brand }/produtos-indisponiveis` } element={ <ProductList products={ "unavailable" } /> } />

          <Route path={ `/${ brand }/kits-presentes` } element={ <KitList /> } />
        </Routes>
      </main>
    </>
  )
}

export default App;