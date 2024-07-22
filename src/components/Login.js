import React, { useState } from 'react'
import {
    Link, useNavigate
} from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const navigate = useNavigate();
  const handleOnChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    let response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    })
    let json = await response.json();
    if(json.success){
        localStorage.setItem('token', json.authToken);
        let response = await fetch('http://127.0.0.1:5000/api/auth/getuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        let json1 = await response.json();
        localStorage.setItem('usertype', json1.usertype);
        localStorage.setItem('username', json1.name);
        navigate('/');
    }
    else{
        alert(json.error);
    }
  }
  return (
    <div>
        <div className="col-md-10 mx-auto col-lg-3 my-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
                <h3 className='text-center mb-4'>Login</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={credentials.email} onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={credentials.password} onChange={handleOnChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit"  style={{backgroundColor: '#040b42'}}>Login</button>
                <hr className="my-4" />
                <small className="text-body-secondary">Don't have any account? - <Link to="/signup">Click here</Link></small>
            </form>
        </div>
    </div>
  )
}
