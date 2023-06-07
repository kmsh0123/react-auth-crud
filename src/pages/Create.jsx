import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {ImSpinner2} from 'react-icons/im'
import {Link,useNavigate} from 'react-router-dom';
import { useCreateContactMutation } from '../features/api/contactApi';
import Cookies from 'js-cookie';

const Create = () => {
    const token = Cookies.get("token")
    const [isLoading,setIsLoading] = useState(false);
    const [createContact] = useCreateContactMutation();
    const {register,handleSubmit} = useForm();
    const nav = useNavigate();
    const registerHandler = async(user) => {
        setIsLoading(true)
        const {data} = await createContact({contact:user,token});
        console.log(data);
        if(data?.success){
            nav("/");
        }
        setIsLoading(false)

    }
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen ">
        <form onSubmit={handleSubmit(registerHandler)} className="w-96 shadow shadow-violet-300 p-5 rounded-2xl m-2 md:m-2 lg:m-0">
            <h1 className='text-3xl text-violet-600 font-semibold text-center mb-5'>Create Your Contact</h1>
            <div className="space-y-5">
            <input {...register("name")} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="text" placeholder='Enter Your UserName' />
            <input {...register("phone")} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="number" placeholder='Enter Your Phone' />
            <input {...register("email")} className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="email" placeholder='Enter Your email' />
            <input {...register("address")} className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="text" placeholder='Enter Your Address' />
            <div className="">
            <button type='submit' className={`bg-violet-700 rounded-3xl p-4 w-full text-white hover:bg-violet-900 transition duration-300 ${isLoading && "btn-disabled"}`}>{
              isLoading ? <ImSpinner2 className='animate-spin mx-auto h-5 w-5'/> : "Create Contact"
            }</button>
            </div>
            </div>
        </form>
    </div>
    
    </div>
  )
}

export default Create