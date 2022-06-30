import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

const userContext = createContext();
const userProvider = ({ children }) => {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user || { email: null });
  return (
    <userContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </userContext.Provider>
  )
}

const useUserContext = () => {
  const data = useContext(userContext);
  if (data === undefined) throw new Error('UserContext must be wrapped in a provider');
  return data;
}

export { userProvider, useUserContext, userContext };