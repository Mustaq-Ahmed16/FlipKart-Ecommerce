
import React, { createContext, useContext, useState } from 'react'

const EmailContext = createContext();


const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  )
}

const useEmailContext = () => useContext(EmailContext)

export { useEmailContext, EmailProvider }