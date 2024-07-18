import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { GetUser } from '../service/user';
import { useAuth } from '../providers/AuthProvider/useAuth';
import { User } from '../service/user/types';

interface DataContextType {
  user: User | undefined;
}

interface DataContextProvider {
    children: React.ReactNode;
  }

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext deve ser usado dentro de um DataProvider');
  }
  return context;
};

export const DataProvider= ({children}: DataContextProvider) => {
  const auth = useAuth();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUserByEmail = async () => {
      try {
        const response = await GetUser(auth?.token ?? "", auth?.email ?? "");
        if(response) {
          setUser(response?.data);
        }
      } catch (error) {
        
      }
    }

    getUserByEmail();
  }, [auth?.token, auth?.email])
  return (
    <DataContext.Provider value={{user}}>
      {children}
    </DataContext.Provider>
  );
};