import React from 'react'

const Form = () => {
  return (
    <div className='container mx-auto w-1/2 flex flex-col bg-gray-200 rounded-xl shadow-border p-8 m-10'>
        <h1 className='text-3xl text-red-500 font-bold p-3 mx-auto'>Create Employee</h1>
        <form>
            <div className="container flex flex-col ">
                <label htmlFor="Name">Employee Name:</label>
                <input type="text" className='my-2 py-2 bg-gray-100' placeholder='' />
                
                <select className='my-2 py-2 bg-gray-100'>
                    <option value="someOption" className=''>JobS role</option>
                    <option value="otherOption">Scrum Master</option>
                    <option value="otherOption">Developer</option>
                    <option value="otherOption">Baby etter</option>
                </select>

                <button className='text-xl py-3 bg-red-500 text-white my-2 rounded-xl'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form