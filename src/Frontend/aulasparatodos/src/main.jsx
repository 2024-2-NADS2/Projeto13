import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Titulo from './Titulo.jsx'
import Carrosel from './Carrosel.jsx'
import More from './More.jsx'
import Comentarios from './Comentarios.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Titulo />
    <Carrosel />
    <More />
    <Comentarios />
    <Footer />
  </StrictMode>,
)
