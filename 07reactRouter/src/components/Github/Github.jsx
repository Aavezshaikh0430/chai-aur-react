import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    
    //     fetch('http://api.github.com/users/Aavezshaikh0430')
    //     .then(response=>response.json())
    //     .then(data=>{console.log(data)
    //         setData(data)
    //     } )
    // }, [])

   
    
  return (
    <div className=' text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github followers : {data.followers}
    
    <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}
export default Github

export const githubInfoloader = async () =>{
    const response = await fetch('http://api.github.com/users/Aavezshaikh0430')
    return response.json()
}