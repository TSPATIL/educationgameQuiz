import React from 'react'
import {
    Link
} from 'react-router-dom'
export default function Footer() {
    return (
        <div style={{ backgroundColor: '#040b42' }}>
            <div className="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-warning">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-warning">Contact</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-warning">Results</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-warning">Feedback</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-warning">About</a></li>
                    </ul>
                    <p class="text-center text-warning">© 2024 iQuiz</p>
                </footer>
            </div>
        </div>
    )
}
