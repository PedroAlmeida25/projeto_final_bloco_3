import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import Home from './paginas/home/Home'
import Navbar from './components/navbar/NavBar'


function App() {
  const [] = useState(0)

return (
  <>
    <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]">
      <Home/>
      </div>
      <Footer/>
    </BrowserRouter>
  </>
)
}

export default App
