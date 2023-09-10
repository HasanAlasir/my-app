import React, { useState } from 'react'
import Employee from './Employee'

const data = [
    {id: 1, name:'Ahmed', job:'Developer', active:true},
    {id: 2, name:'Sara', job:'Designer', active:false},
    {id: 3, name:'Noor', job:'Tester', active:true},
    {id: 4, name:'Khaled', job:'PM', active:true},
];

const Employees = () => {
    const [mydata, setMydata] = useState(data);

    const editeData = () => {
        setMydata((stat) =>{
            const newData = [...stat];
            newData[0].name = 'Jon';
            return newData;
        });
    }

  return (

    <div className="container mx-auto w-1/2 flex flex-col bg-gray-200 rounded-xl shadow-border p-8 m-10">
        <button onClick={editeData} className='text-xl py-3 bg-red-500 text-white my-2 rounded-xl'>Edit</button>
        {mydata.map((employee) => (
            <Employee 
            data={employee} 
            >
            
            </Employee>
        ))}
        
    </div>
    
    
  )
}

export default Employees