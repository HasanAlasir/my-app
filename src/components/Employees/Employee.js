import React from 'react'

const Employee = (props) => {
  return (
    <div className=' text-xl rounded-lg border-red-300 border-2 my-3 p-6 '>
        <h2>{props.data.name}</h2>
        <small className='text-red-400 font-bold mr-2'>{props.data.job}</small>
        <small>{props.data.active ? 'active' : 'Inactive'}</small>
    </div>
  )
}

export default Employee