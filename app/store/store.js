"use client"
import React from 'react'
import { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [popType, setPopType] = useState("Add");
  const [enabled, setEnabled] = useState(false);

  return (
    <AppContext.Provider value={{ popType, setPopType, enabled, setEnabled }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
    return useContext(AppContext);
}

