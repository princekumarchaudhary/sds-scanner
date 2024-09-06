import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

function LoginPage({ setUserData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [view, setView] = useState('login'); // 'login', 'signup', 'forgotPassword'

    const handleLogin = (data) => {
        console.log('Login Data:', data);
        setUserData(data); // Save user data
        navigate('/ssn'); // Navigate to SSN page after login
    };

    const handleSignUp = (data) => {
        console.log('Sign-Up Data:', data);
        setView('login');
    };

    const handleForgotPassword = (data) => {
        console.log('Forgot Password Data:', data);
    };

    const renderLoginForm = () => (
        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
            <div className="form-group">
                <input
                    type="text" placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div className="form-group">
                <input
                    type="email" placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
                <input
                    type="password" placeholder="Password"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <button type="submit">Login</button>
            <p className="switch-link" onClick={() => setView('signup')}>Don't have an account? Sign Up</p>
            <p className="switch-link" onClick={() => setView('forgotPassword')}>Forgot Password?</p>
        </form>
    );

    const renderSignUpForm = () => (
        <form onSubmit={handleSubmit(handleSignUp)} className="login-form">
            <div className="form-group">
                <input
                    type="text" placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div className="form-group">
                <input
                    type="email" placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
                <input
                    type="password" placeholder="Password"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
            <p className="switch-link" onClick={() => setView('login')}>Already have an account? Log In</p>
        </form>
    );

    const renderForgotPasswordForm = () => (
        <form onSubmit={handleSubmit(handleForgotPassword)} className="login-form">
            <div className="form-group">
                <input
                    type="email" placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <button type="submit">Reset Password</button>
            <p className="switch-link" onClick={() => setView('login')}>Back to Login</p>
        </form>
    );

    return (
        <div className="login-container">
            <h1>Sensitive Data Scanner - Login Page</h1>
            {view === 'login' && renderLoginForm()}
            {view === 'signup' && renderSignUpForm()}
            {view === 'forgotPassword' && renderForgotPasswordForm()}
        </div>
    );
}

export default LoginPage;
