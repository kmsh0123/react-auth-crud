import React from 'react'
import { useSingleContactQuery } from '../features/api/contactApi';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Detailcard = () => {
  const token = Cookies.get("token");
  const {id} = useParams();
  const {data} = useSingleContactQuery({id,token});
  const getContacts = (data?.contact)
  const nav = useNavigate();
  return (
    <>
     <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className="shadow-lg p-5 space-y-5 w-1/4 text-center">
         <span>No.{getContacts?.id}</span>
         <img className='w-28 h-28 rounded-full mx-auto' src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" />
         <h1 className=''>{getContacts?.name}</h1>
         <p>{getContacts?.email}</p>
         <p>{getContacts?.phone}</p>
         <p>{getContacts?.address}</p>
      </div>
      <div className="my-5">
          <button onClick={()=> nav(`/`) } className='bg-green-500 p-3 px-16 text-white rounded-lg'>Back</button>
      </div>
    </div>
    </>
   
  )
}

export default Detailcard