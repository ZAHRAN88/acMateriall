'use client'
import React from 'react'
import { TailwindIndicator } from './tailwind-indicator'
import { ThemeProvider } from './ThemeProvider'
interface Props {
    children: React.ReactNode
  }
const Providers = ({ children }: Props) => {
  return (
   <>
   <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    >
        
      {children}
      <TailwindIndicator /> 
    </ThemeProvider>
   </>
  )
}

export default Providers
