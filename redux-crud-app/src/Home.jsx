import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    return (
        <div className="container">
            <h2>CRUD App with JSON Server</h2>
            <button className='btn btn-success my-3'></button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>

    )
}
