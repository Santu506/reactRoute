
// import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    
    /*  or */ 

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Santu506')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-3xl'>Github followers: {data.following}
    <img  className='rounded-3xl ml-96' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    // <h1>hello</h1>
  )
}



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Santu506')
    return response.json()
}
