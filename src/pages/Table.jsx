import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useContactQuery, useDeleteContactMutation} from '../features/api/contactApi';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Table = () => {
  const token = Cookies.get("token");
  const nav = useNavigate();
    const {data} = useContactQuery({token});
    const GetContacts = (data?.contacts?.data);
    const [deleteContact] = useDeleteContactMutation();
    const deleteHandler = (id) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'bg-green-700 p-2 px-5 rounded-lg mx-2 text-white',
          cancelButton: 'bg-red-700 p-2 px-5 rounded-lg text-white'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(async(result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          const {data} = await deleteContact({id,token});
          console.log(data);   
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your file has not been deleted)',
            'error'
          )
        }
      })   
    }
    
  return (
<div>
  <div className="flex flex-col mt-6 container mx-auto">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full text-center">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr className="text-2xl">
                <th scope="col" className="py-3.5 px-4 font-normal text-gray-500 dark:text-gray-400 text-center">
                Name
                </th>
                <th scope="col" className="px-12 py-3.5 font-normal text-center text-gray-500 dark:text-gray-400">
                  Email
                </th>
                <th scope="col" className="px-4 py-3.5 font-normal text-center text-gray-500 dark:text-gray-400">
                  Phone
                </th>
                <th scope="col" className="px-4 py-3.5 font-normal text-center text-gray-500 dark:text-gray-400">
                  Address
                </th>
                <th scope="col" className="px-4 py-3.5 font-normal text-center text-gray-500 dark:text-gray-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
           {
             GetContacts?.map((contact)=>(
              <tr key={contact.id}>
             <td className="px-4 py-4 whitespace-nowrap">
               <div>
                 <h2 className="text-gray-800 dark:text-white">{contact.name}</h2>
               </div>
             </td>
             <td className="px-12 py-4 whitespace-nowrap">
               <div className='dark:text-gray-200'>
                 <h1>{contact.email}</h1>
               </div>
             </td>
             <td className="px-4 py-4 whitespace-nowrap">
               <div>
                 <h4 className="text-gray-700 dark:text-gray-200">{contact.phone}</h4>
               </div>
             </td>
             <td className="px-4 py-4 whitespace-nowrap">
               <div>
                 <h4 className="text-gray-700 dark:text-gray-200">{contact.address}</h4>
               </div>
             </td>
             <td className="px-4 py-4 text-sm whitespace-nowrap">
               <button onClick={() => deleteHandler(contact?.id)} className="px-10 py-3 hover:text-slate-900 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                 Delete
               </button>
                <button onClick={() => nav(`/update/${contact?.id}`)} className="px-10 py-3 hover:text-slate-900 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                  Update
                </button>
                <button onClick={() => nav(`/detail/${contact?.id}`)} className="px-10 py-3 hover:text-slate-900 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                  Detail
                </button>
             </td>        
       </tr>
             ))
           }
            </tbody>
          </table>
          </div>
          </div>
          </div>
          </div>
</div>

  )
}
                                                                      
export default Table