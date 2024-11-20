import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook para navegação
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage(null); 
    
        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    senha: data.password, 
                }),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                localStorage.setItem('token', result.token);
                navigate('/videopage'); 
            } else {
                setErrorMessage(result.error || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            setErrorMessage('Erro ao conectar ao servidor');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="body-container">
            {loading && <p>Carregando...</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: "E-mail é obrigatório" })}
                            className="form-input"
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: "Senha é obrigatória" })}
                            className="form-input"
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="submit-button">Entrar</button>
                </form>
            </div>
        </div>
    );
}
