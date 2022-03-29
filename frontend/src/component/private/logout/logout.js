import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { callremovetokenaction } from '../../../actions/loginaction';
import token from '../tokens/tokenmethod';

export const Logout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
    const fun=()=>{  token.removetoken(); dispatch(callremovetokenaction(null)); navigate("/",{replace:true});}
  return (
    <div><button onClick={()=>fun()}>Logout</button></div>
  )
}
