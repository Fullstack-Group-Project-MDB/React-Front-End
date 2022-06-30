import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { useForm } from '../hooks/useForm';
import { getUser, signIn, signUp } from '../services/users';

export default function AuthForm({ initialState }) {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { formState, clearForm, handleChange } = useForm(initialState);
  const history = useHistory();
  const { setCurrentUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      isSigningIn ? await signIn(formState) : await signUp(formState);
      const user = await getUser();
      setCurrentUser(user);
      clearForm();
      history.push('/');
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{errorMessage}</p>
      {isSigningIn ? (
        <span onClick={() => setIsSigningIn(!isSigningIn)}>Sign-In</span>
      ) : (
        <span onClick={() => setIsSigningIn(!isSigningIn)}>Sign-Up</span>
      )}
      <label htmlFor="Email-Input">
        <input
          placeholder="email"
          id="Email-Input"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Password-Input">
        <input
          placeholder="password"
          id="Password-Input"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{isSigningIn ? 'Sign-in' : 'Sign-up'}</button>
    </form>
  );
}
