import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const token = useSelector(state => state.login.token)
  return (
   
    <div>Home{ console.log(token)}</div>
  )
}
