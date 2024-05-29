import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import FormCategoria from './components/categoria/formulariocategoria/FormCategoria';
import ListarCategorias from './components/categoria/listacategoria/ListaCategoria';
import Navbar from './components/navbar/NavBar';
import Home from './paginas/home/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategorias" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App