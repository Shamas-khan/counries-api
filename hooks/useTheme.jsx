import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const useTheme = () => {
   
  return (
    useContext(ThemeContext)
  )
}

export default useTheme