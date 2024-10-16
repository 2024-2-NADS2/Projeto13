export default function Carrosel(){
    return(
        <section className="cursos-destaque">
          <div className="container">
            <h2>Cursos</h2>
            <div className="carrossel">
              <div className="cursos">
                <div className="curso">Curso 1</div>
                <div className="curso">Curso 2</div>
                <div className="curso">Curso 3</div>
                <div className="curso">Curso 4</div>
                <div className="curso">Curso 5</div>
                <div className="curso">Curso 6</div>
                <div className="curso">Curso 7</div>
              </div>
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
          </div>
        </section>
    )
}