import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Search from './Search'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Link to={'/create'}>
        <button className='p-5 px-28 bg-violet-600 rounded-lg my-5 block mx-auto text-white'>Create Page</button>
      </Link>
      <Search/>
      <Table/>
      <Pagination/>
    </div>
  )
}

export default Dashboard