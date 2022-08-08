import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useApiHelper from '../../api';
import Link from 'next/link';
import { useToasts } from 'react-toast-notifications';

const EditStudent = (props) => {
    const api = useApiHelper();
    const router = useRouter();
    const { addToast } = useToasts();

    const [student, setStudent] = useState({});

    const handleChange = e => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        api.updateStudent(props.id, student).then(res => {
            router.push('/')
            addToast("Student updated successfully!", { appearance: 'success' })
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        api.studentDetails(props.id).then(res => {
            const data = {
                'name': res.name,
                'email': res.email,
                'address': res.address
            }
            setStudent(data)
        }).catch(error => {
            console.log(error)
        })
    }, [props.id])
    return (
        <div className='row'>
            <div className="col-lg-8 mx-auto">
                <h4 className='text-center'>Edit Student</h4>
                <hr />
                <form onSubmit={handleSubmit} action="">
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="name">Name</label>
                        <input value={student?.name ? student?.name : ""} type="text" onChange={handleChange} name="name" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input value={student?.email ? student?.email : ""} type="email" onChange={handleChange} name="email" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label' htmlFor="address">Address</label>
                        <input value={student?.address ? student?.address : ""} type="text" onChange={handleChange} name="address" className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className='btn btn-primary w-100 my-3'>Update</button>
                        <Link href="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditStudent

export async function getServerSideProps(context) {
    return {
        props: { id: context.params.id },
    }
}