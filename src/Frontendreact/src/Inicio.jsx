import { StrictMode } from 'react'
import Header from './Header.jsx'
import Titulo from './Titulo.jsx'
import Carrosel from './Carrosel.jsx'
import More from './More.jsx'
import Comentarios from './Comentarios.jsx'
import Footer from './Footer.jsx'
export default function Inicio(){
    return(
  <StrictMode>
    <Header />
    <Titulo />
    <Carrosel />
    <More />
    <Comentarios />
    <Footer />
  </StrictMode>
    )
}



