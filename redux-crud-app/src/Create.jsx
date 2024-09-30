import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }
    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3>Add New User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor="name"> Name : </label>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className='form-control' placeholder='Enter Name' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email"> Email : </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className='form-control' placeholder='Enter Mail' />
                        </div>
                        <br />
                        <button className="btn btn-info"> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
