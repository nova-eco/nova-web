import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@app/components/PageHeader';
import LoginForm from '@app/forms/LoginForm';
import { LoginProps } from './LoginProps';

export const Login: React.FC<LoginProps> = (props) => {
  const { hasSetupBeenSuccessful, setupLoad, user } = props;
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess === true && user !== null) {
      if (hasSetupBeenSuccessful === false) {
        setupLoad(user);
      } else {
        navigate('/home');
      }
    }
  }, [hasSetupBeenSuccessful, loginSuccess, navigate, user]);

  console.log("IN LOGIN PAGE");
  return (
    <>
      <PageHeader title="Login" subtitle="Enter your login credentials" />
      <LoginForm
        onError={() => setLoginSuccess(false)}
        onSuccess={() => setLoginSuccess(true)}
      />
    </>
  );
};
