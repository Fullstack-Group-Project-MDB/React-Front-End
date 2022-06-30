import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  useEffect(() => {
    getUser()
      .then((user) => setCurrentUser(user))
      .then((user) => console.log(user))
      .catch((e) => console.error(e));
  }, []);
  const [currentUser, setCurrentUser] = useState({ email: null });
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const data = useContext(UserContext);
  if (data === undefined)
    throw new Error('UserContext must be wrapped in a provider');
  return data;
};

export { UserProvider, useUserContext, UserContext };
