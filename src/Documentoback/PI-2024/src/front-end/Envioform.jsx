export default function Envioform() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de envio de formulário
        console.log("Formulário enviado");
    };

    return (
        <div>
            <h1>Envio de Formulário</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
