import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Conteudo from './Conteudo.jsx'


export default function Videospage(){
  return(
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Conteudo />
      </div>
      <div style={{ display: "flex" }}>
        <Conteudo />
      </div>
      <div style={{ display: "flex" }}>
        <Conteudo />
      </div>
      <div style={{ display: "flex" }}>
        <Conteudo />
      </div>
      <Footer />
    </div>
  )
}
    