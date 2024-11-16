export default function Envioform(){
    return(
        <div>
            <h2>Envie uma mensagem</h2>
        <form id="emailForm">
            <label for="email">Selecione o destinatário:</label>
            <select id="email">
                <option value="email1@example.com">Destinatário 1</option>
                <option value="email2@example.com">Destinatário 2</option>
                <option value="email3@example.com">Destinatário 3</option>
            </select>
        
            <label for="message">Sua mensagem:</label>
            <textarea id="message" placeholder="Digite sua mensagem aqui"></textarea>
            
            <button type="button" onclick="sendEmail()">Enviar</button>
        </form>
        </div>
    )
}