import Cookies from 'js-cookie';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContactQuery } from '../features/api/contactApi';

const Pagination = () => {
  const token = Cookies.get("token");
  const {data} = useContactQuery({token});
  const GetContacts = (data?.contacts?.links);
  console.log(GetContacts);
  return (
    <div className = "flex justify-center my-3">
    {
        data?.contacts?.links?.map((contact) => (
            <NavLink to = {`?page=$`} key={contact.label} className = {`items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${contact.active}`}>
                {contact.label}
            </NavLink>
        ))
    }
    </div>
  )
}

export default Pagination