import React from 'react';
import LoginForm from '../components/Users/LoginForm';
import RegistrationForm from '../components/Users/RegistrationForm';

const Home = () => (
    <>
        <div>Home directory</div>
        <RegistrationForm />
        <LoginForm />
    </>
);

export default Home;