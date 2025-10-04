import { useState } from 'react';

import './App.css';

const createEmptyForm = () => ({
  name: '',
  email: '',
  password: '',
});

function App() {
  const [mode, setMode] = useState('login');
  const [formValues, setFormValues] = useState(createEmptyForm());

  const isLogin = mode === 'login';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = isLogin
      ? { email: formValues.email, password: formValues.password }
      : formValues;

    // Replace with API call or navigation after connecting to a backend
    console.log(`${mode.toUpperCase()} SUBMIT`, payload);
  };

  const handleSwitch = () => {
    setMode(isLogin ? 'signup' : 'login');
    setFormValues(createEmptyForm());
  };

  return (
    <main className="auth-wrapper">
      <section className="auth-card">
        <header className="auth-header">
          <h1>{isLogin ? 'Welcome back' : 'Create an account'}</h1>
          <p>
            {isLogin
              ? 'Log in with the email address you used to sign up.'
              : 'Sign up to get started with your new account.'}
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <label className="auth-field">
              <span>Name</span>
              <input
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
            </label>
          )}

          <label className="auth-field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
            />
          </label>

          <button className="auth-submit" type="submit">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
        </form>

        <footer className="auth-footer">
          <span>{isLogin ? "Don't have an account?" : 'Already registered?'}</span>
          <button className="link-button" type="button" onClick={handleSwitch}>
            {isLogin ? 'Create one' : 'Log in'}
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;