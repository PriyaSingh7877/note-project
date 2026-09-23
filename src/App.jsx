import React, { useState } from 'react'

const App = () => {


    const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e) =>{
    e.preventDefault()
   

    const copyTask =[...task];
    copyTask.push({ title,details})

    setTask(copyTask)

    setTitle('')
      setDetails('')
    
  }

  const deleteNote=(idx) =>{
    const copyTask =[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

 
  return ( 
      
      <div className=' h-screen lg:flex  bg-black bg-[url(https://i.pinimg.com/1200x/a6/f0/3b/a6f03b022139c27381c60f12050b4821.jpg)] text-amber-50'>

      {/* FORM*/}
       <form onSubmit ={(e) =>{
        submitHandler(e)
       }} className='flex gap-4 lg:flex p-10 flex-col items-start '>

        <h1 className='text-4xl mb-2 font-bold'> Add note</h1>
        


        {/* phla input heading */}
         <input type='text'
         placeholder='Heading' 
          className='px-5 w-full font-medium py-2 border-2 rounded'  value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          /> 
      
         {/* 2nd input note box */}
          <textarea type='text'
           className='px-5  w-full font-medium h-32 py-2 items-start flex-row flex  border-2 rounded' placeholder='Write your note' 
           value={details}
           onChange={(e)=>{
            setDetails(e.target.value)
           }}
           />


          {/* Button */}
          <button className='bg-white text-black active:scale-95 font-medium w-full rounded-2xl'>Add note</button>
        


       </form>
       <div className='lg:w-1/2 lg:border-1-2 p-10'>
       <h1 className='text-4xl font-bold'>Recent note</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
        {task.map(function(elem,idx) {

          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-5 px-4 bg-[url('https://i.pinimg.com/736x/6c/bd/d0/6cbdd0c419e67b88980666fe9d78ffd1.jpg')]">

        

       <div>
        <h3 className='leading-tight text-lg font-bold '>{elem.title}</h3>
        <p className=' mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
       </div>


       <button onClick={()=>{
        deleteNote(idx)
      
       }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-while'>Delete</button>
       </div>
        

      })}
      </div>
       </div>
    </div>
  )
}



export default App

