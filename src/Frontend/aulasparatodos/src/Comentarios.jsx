export default function Comentarios(){
    return(
        <section className="comentarios">
        <h2>Comentários</h2>
        <form>
          <textarea placeholder="Deixe seu comentário..." required></textarea>
          <button class="publciar">publicar</button>
        </form>
        <div className="lista-comentarios">
          <p><strong>João:</strong> Adorei os cursos!</p>
          <p><strong>Maria:</strong> Muito bem explicado.</p>
        </div>
      </section>
    )
}