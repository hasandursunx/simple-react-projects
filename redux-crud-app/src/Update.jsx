import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

export const Update = () => {

    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);

    const { name, email } = existingUser[0];

    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (even) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3>Update User</h3>
                    <form onSubmit={handleSubmit} >
                        <div className='mb-4'>
                            <label htmlFor="name"> Name : </label>
                            <input value={uname} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className='form-control' placeholder='Enter Name' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email"> Email : </label>
                            <input value={uemail} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className='form-control' placeholder='Enter Mail' />
                        </div>
                        <br />
                        <button className="btn btn-info"> Update </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
