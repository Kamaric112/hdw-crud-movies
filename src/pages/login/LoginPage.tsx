import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import * as Yup from 'yup';
import { useLogin } from '../../hooks/useLogin';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  username: string;
  password: string;
}

function LoginPage() {
  const { login } = useLogin();
  const { isAuthenticated } = useAuth();
  const loginSchema = Yup.object().shape({
    username: Yup.string().email('Invalid username').required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const navigate = useNavigate();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    const username = data.username;
    const password = data.password;
    login({ username: username, password: password });
    if (isAuthenticated) navigate('/', { replace: true });
  };
  return (
    <>
      <LoginForm loginSchema={loginSchema} onSubmit={onSubmit} />
    </>
  );
}

export default LoginPage;
