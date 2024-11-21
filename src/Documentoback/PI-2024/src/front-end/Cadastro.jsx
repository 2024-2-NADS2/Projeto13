import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    // Função de validação para confirmar se as senhas coincidem
    const validateConfirmPassword = (value) => {
        const password = watch('senha');
        return password === value || 'As senhas não coincidem';
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5001/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 201) {
                alert("Cadastro bem-sucedido! Agora, faça login.");
                navigate("/login");
            } else {
                const result = await response.json();
                alert(result.error || "Erro ao realizar o cadastro.");
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro de conexão com o servidor.");
        }
    };

    return (
        <div>
            <div className="body-container">
                <div className="login-container">
                    <h2 className="login-title">Cadastrar</h2>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: "E-mail é obrigatório" })}
                                className="form-input"
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                {...register("senha", { required: "Senha é obrigatória" })}
                                className="form-input"
                            />
                            {errors.senha && <p>{errors.senha.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-senha" className="form-label">Confirmar senha</label>
                            <input
                                type="password"
                                id="confirm-senha"
                                {...register("confirmPassword", {
                                    required: "Confirmação de senha é obrigatória",
                                    validate: validateConfirmPassword
                                })}
                                className="form-input"
                            />
                            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                        </div>
                        <button type="submit" className="submit-button">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
