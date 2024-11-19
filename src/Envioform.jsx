import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Components/Footer.jsx'
import Header4 from './Components/Header4.jsx'

function EmailForm() {
  const [email, setEmail] = useState('budasfecap@gmail.com');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      setStatus('Por favor, escreva uma mensagem.');
      return;
    }

    const templateParams = {
      to_email: email,
      message: message,
    };

    emailjs.send(
        'service_q3265j5',
    'template_f7068hm',   
    templateParams,       
    'iCM_T1brUFzFbEwLM'   
    )
      .then(() => {
        setStatus('E-mail enviado com sucesso!');
        setMessage('');
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        setStatus('Ocorreu um erro ao enviar o e-mail.');
      });
  };

  return ( 
    <div>
    <Header4 />
    <div className="email-form-container">
      <h2 className="email-form-title">Envie uma mensagem</h2>
      <form className="email-form" onSubmit={handleSendEmail}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Selecione o destinatário:</label>
          <select
            id="email"
            className="form-select"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <option value="budasfecap@gmail.com">Rafael Budoya</option>
            <option value="email2@example.com">drico</option>
            <option value="email3@example.com">fecap talvez</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Sua mensagem:</label>
          <textarea
            id="message"
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui"
          />
        </div>

        <button type="submit" className="form-button">Enviar</button>
      </form>
      {status && <p className={`status-message ${status.includes('sucesso') ? 'success' : 'error'}`}>{status}</p>}
    </div>
    <Footer />
    </div>
  );
}

export default EmailForm;
