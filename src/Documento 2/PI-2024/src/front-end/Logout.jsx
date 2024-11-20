import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remover o token do localStorage
    localStorage.removeItem('token');

    // Redirecionar para a página de login
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;
