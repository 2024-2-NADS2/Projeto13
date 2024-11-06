import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Header />
            <div className="body-container">
                <div className="login-container">
                    <h2 className="login-title">Login</h2>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Nome de Usuário</label>
                            <input
                                type="text"
                                id="username"
                                {...register("username", { required: "Nome de usuário é obrigatório" })}
                                className="form-input"
                            />
                            {errors.username && <p>{errors.username.message}</p>}
                        </div>
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
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: "Senha é obrigatória" })}
                                className="form-input"
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="submit-button">Entrar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
