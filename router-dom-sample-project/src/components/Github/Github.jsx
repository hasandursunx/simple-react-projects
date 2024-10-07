import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();


    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hasandursunx')
    //         .then((response) => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1 className='mb-10'> {data.name} </h1>
            <div className='flex  gap-10'>
                <img src={data.avatar_url} width={300} alt="" />
                <h3>Repos : {data.public_repos}</h3>
                <h3>Followers : {data.followers}</h3>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hasandursunx')
    return response.json()
}