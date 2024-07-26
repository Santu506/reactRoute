import React from 'react'

function Login() {
  return (
    <div className=' w-full bg-lime-300 pt-11 pb-36'>
        <form action="" className='max-w-96 m-auto'>
        <label htmlFor="email" className='text-emerald-600 font-bold p-1'>Email:</label>
            <input type="text" id='email' name='email' placeholder='email'className='w-full m-1 p-2 rounded-md border-none outline-none' required/>
            <label htmlFor="password" className='text-emerald-600 font-bold p-1'>password:</label>
            <input type="password" id='password' name="password" placeholder='password'  className='w-full m-1 p-2 rounded-md border-none outline-none' required/>
            <button className='bg-pink-600 p-2 pl-3 pr-3 block m-auto mt-4 rounded-xl text-white'>submit</button>
        </form>
    </div>
  )
}

export default Login