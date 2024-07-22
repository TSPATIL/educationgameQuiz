import React, { useState } from 'react'
import {
    Link, useNavigate
} from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: '', usertype: '', email: '', password: '', cpassword: '' });
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: credentials.name, usertype: credentials.usertype, email: credentials.email, password: credentials.password, cpassword: credentials.cpassword})
        })
        const json = await response.json();
        if(json.success){
            navigate('/login');
        }
        else{
            alert(json.error)
        }
    }
    return (
        <div>
            <div className="col-md-10 mx-auto col-lg-3 my-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Signup</h3>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput1" placeholder="fullname" name='name' value={credentials.name} onChange={handleOnChange} />
                        <label htmlFor="floatingInput1">Name</label>
                    </div>
                    <div className=" mb-3">
                        <select className="form-select" aria-label="Default select example" name='usertype' value={credentials.usertype} onChange={handleOnChange}>
                            <option value=''>Choose</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" name='email' value={credentials.email} onChange={handleOnChange} />
                        <label htmlFor="floatingInput2">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword1" placeholder="Password" name='password' value={credentials.password} onChange={handleOnChange} />
                        <label htmlFor="floatingPassword1">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Confirm Password" name='cpassword' value={credentials.cpassword} onChange={handleOnChange} />
                        <label htmlFor="floatingPassword2">Confirm Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" style={{ backgroundColor: '#040b42' }}>Signup</button>
                    <hr className="my-4" />
                    <small className="text-body-secondary">Already have an account? - <Link to="/login">Click here</Link></small>
                </form>
            </div>
        </div>
    )
}
