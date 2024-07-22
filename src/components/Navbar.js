import React from 'react'
import logo from '../media/iQuiz2.svg'
import {
    Link, useLocation, useNavigate
} from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md sticky-top border-bottom border-warning" aria-label="Fourth navbar example" style={{ backgroundColor: '#061161', height: '80px' }}>
                <div className="container-fluid">
                    <Link className='d-flex justify-content-center mt-4 mx-4' to="/" style={{textDecoration : 'none'}}>
                        <img className="d-block mx-auto mb-4" src={logo} alt="" width="50" height="50" />
                        <span className="navbar-brand mx-2 fs-3 text-light">iQuiz</span>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav col-lg justify-content-lg-center fs-5">
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-warning ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item mx-3">
                                <Link className={`nav-link ${location.pathname === '/quiz'? 'active' : ''}`} to="/quiz">Quiz</Link>
                            </li> */}
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-warning ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-warning" to="/" data-bs-toggle="dropdown" aria-expanded="false">Results</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/answer">View Result</Link></li>
                                    {
                                        localStorage.getItem('usertype') === 'admin' ?
                                            <Link className={`dropdown-item`} to="/feedback">Feedback</Link> :
                                            null
                                    }
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-warning ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="d-flex mx-5" role="button">
                            {
                                !localStorage.getItem('token') ?
                                    <Link role='button' to="/login" className={`btn btn-outline-light btn-lg ${(location.pathname === '/login' || location.pathname === '/signup') ? 'active' : ''}`}>Login</Link> :
                                    <button className='btn btn-outline-light btn-lg' onClick={handleLogout}>Logout</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
