import React, { useState } from 'react';
import useApiHelper from '../api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useToasts } from 'react-toast-notifications';

const AddStudent = () => {
    const [formData, setFormData] = useState({});
    const api = useApiHelper();
    const router = useRouter();
    const { addToast } = useToasts();

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        api.addStudent(formData).then(res => {
            router.push('/')
            addToast("Student added successfully!", { appearance: 'success' })
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='row'>
            <div className="col-lg-8 mx-auto">
                <h4 className='text-center'>Add Student</h4>
                <hr />
                <form onSubmit={handleSubmit} action="">
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="name">Name</label>
                        <input type="text" onChange={handleChange} name="name" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input type="email" onChange={handleChange} name="email" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="address">Address</label>
                        <input type="text" onChange={handleChange} name="address" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className='btn btn-primary w-100 my-3'>Add</button>
                        <Link href="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent