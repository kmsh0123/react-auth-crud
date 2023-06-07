import Cookies from 'js-cookie'
import React from 'react'
import { useLogoutMutation } from '../features/api/authApi';
import { useDispatch } from 'react-redux';
import { removeUser } from '../features/services/authSlice';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const user = JSON.parse(Cookies.get("user"));  
    const token = Cookies.get("token");
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const logoutHandler = async () => {
        const {data} = await logout(token);
        if(data?.success){
            nav("/login")
        }
        dispatch(removeUser());
        console.log(data);
    }
  return (
<div className='bg-slate-600 p-5'>
    <div className='container mx-auto flex justify-between items-center text-white'>
        <h1 className='text-2xl'>Contact</h1>
        <ul className='flex items-center ms-auto space-x-10'>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
        <button onClick={logoutHandler} className='bg-red-500 p-3 px-10 rounded-md ms-10'>Logout</button>
    </div>
</div>
  )
}

export default Navbar