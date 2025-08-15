import { AuthProvider } from '@/utility/contextState.js/AuthContext'
import React from 'react'

const ContextProvider = ({children}) => {
  return (
   <AuthProvider>

    {children}
   </AuthProvider>
  )
}

export default ContextProvider