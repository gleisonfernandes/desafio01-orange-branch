import React, { ReactNode, createContext, useContext, useState } from 'react';

interface DataContextType {
  id: number | undefined;
  setId: (id: number) => void;
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
  const [id, setId] = useState<number | undefined>(undefined);

  return (
    <DataContext.Provider value={{ id, setId }}>
      {children}
    </DataContext.Provider>
  );
};