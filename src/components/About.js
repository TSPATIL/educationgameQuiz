import React from 'react'
import '../styles/About.css'
import img1 from '../media/1.png'
import img2 from '../media/2.png'
import img3 from '../media/3.jpg'

export default function About() {

  return (
      <div className="container" style={{height: "2500px"}}>
        <h1 className="text-center text-warning">About Us</h1>

        <div className="custom-card" style={{backgroundColor:" #f8f8f8", border: "1px solid #ddd", borderRadius: "5px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
            <h2 className="text-center" style={{color: "#063970"}}>Quiz Game</h2>
            <p className='text-center'>
                Our quiz game is designed with the primary purpose of making learning fun and interactive. We aim to provide a platform that allows users to test and enhance their knowledge and skills in an engaging and enjoyable manner. Whether you're a student, professional, or lifelong learner, our game is here to offer you an opportunity to expand your horizons. Join us on this educational journey, and let's make learning a thrilling adventure.
            </p>
        </div>

        <div className="custom-card" style={{backgroundColor:" #f8f8f8", border: "1px solid #ddd", borderRadius: "5px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
            <h2 className="text-center" style={{color: "#063970"}}>Meet The Team</h2>
            <p>
                Get to know the creators and developers behind our quiz game. We're passionate about education and technology, and we're here to provide you with the best learning experience.
            </p>
        
            <div className="row mt-4">
                <div className="col-md-3 text-center">
                    <img src={img2} alt="Team Member 1" className="rounded-circle" width="100"/>
                    <p>Sairaj Nanche</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={img2} alt="Team Member 2" className="rounded-circle" width="100"/>
                    <p>Tanmay Patil</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={img1} alt="Team Member 3" className="rounded-circle" width="100"/>
                    <p>Vidisha More</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={img2} alt="Team Member 4" className="rounded-circle" width="100"/>
                    <p>Atish Limje</p>
                </div>
            </div>
        </div>
            <div className="custom-card" style={{backgroundColor: "#f8f8f8", border: "1px solid #ddd", borderRadius: "5px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1"}}>
                <h2 className="text-center" style={{color: "#063970"}}>How to Play</h2>
                <p>
                    Playing our quiz game is easy and enjoyable. Follow these simple steps to get started:
                </p>
            
                <ol>
                    <li>Start your quiz adventure by creating an account or logging in.</li>
                    <li>Choose a quiz category that piques your curiosity.</li>
                    <li>Dive into the quiz and face a flurry of br/ain-teasing questions.</li>
                    <li>Put your thinking cap on and select the correct answer within a thrilling 30-second timer.</li>
                    <li>Click "Submit" and race to the next question – speed and knowledge go hand in hand!</li>
                    <li>Keep going until you conquer the quiz with your wits and wisdom.</li>
                    <li>As you finish, unveil your quiz score and discover your proficiency level.</li>
                    <li>Don't stop here – explore more quizzes and uncover new knowledge horizons.</li>
                </ol>
                
                <p>
                    That's it! Enjoy the learning experience and challenge yourself with our engaging quiz game.
                </p>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="custom-card" style={{height: "410px", overflowY: "auto"}}>
                            <h2 className="text-center" style={{color: "#063970", fontSize: "27px"}}>Educational Content</h2>
                            <p>Explore a wealth of educational articles, videos, and resources across various subjects:</p>
                            <ul>
                                <li><a href="https://web.archive.org/web/20201128203757id_/https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1206&context=pacis2013" target="_blank">Quick Quiz</a></li>
                                <li><a href="https://onemonth.com/courses/programming-for-non-programmers" target="_blank">
                                    Programming for Non-Programmers</a></li>
                                <li><a href="https://www.linkedin.com/learning/programming-foundations-fundamentals-3/the-fundamentals-of-programming" target="_blank">
                                    Foundations of Programming: Fundamentals</a></li>
                            </ul>
                            <p>We're dedicated to providing valuable learning materials to enhance your knowledge and skills.</p> 
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="custom-card" style={{height: "410px", overflowY: "auto"}}>
                            <h2 className="text-center" style={{color: "#063970", fontSize: "27px"}}>FAQ</h2>
                            <p>Common questions answered:</p>
                            <ul>
                                <li><strong>Q: How do I start playing?</strong><br/><em>A: Simply register or log in and select a quiz category to begin the fun learning experience!</em></li>
                                <li><strong>Q: Can I play without registering?</strong><br/><em>A: Absolutely! Some quizzes are available without registration, but creating an account enhances your experience.</em></li>
                                <li><strong>Q: What's the quiz time limit?</strong><br/><em>A: You have 30 seconds to answer each question – think fast!</em></li>
                                <li><strong>Q: How is my proficiency level calculated?</strong><br/><em>A: Proficiency is determined by your quiz scores – the higher, the better!</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className="custom-card" style={{height: "410px", overflowY: "auto"}}>
                            <h2 className="text-center" style={{color: "#063970", fontSize: "27px"}}>Terms and Conditions</h2>
                            <div className="custom-scroll">
                                <p>Our terms and conditions:</p>
                                <ul>
                                    <li><strong>1. Acceptance of Terms</strong><br/>By using our quiz game, you agree to abide by these terms and conditions. If you do not agree, please refrain from using our services.</li>
                                    <li><strong>2. User Conduct</strong><br/>We encourage respectful and fair participation. Users found engaging in harmful or disruptive behavior may be subject to account suspension.</li>
                                    <li><strong>3. Privacy Policy</strong><br/>Our privacy policy outlines how we handle user data. We are committed to protecting your privacy and data security.</li>
                                    <li><strong>4. Intellectual Property</strong><br/>All content, including quiz questions and educational materials, is protected by intellectual property rights and is for personal use only.</li>
                                    <li><strong>5. Proficiency Categorization</strong><br/>Proficiency levels are calculated based on your quiz scores and are intended for informative purposes.</li>
                                    <li><strong>6. Changes to Terms</strong><br/>We reserve the right to update these terms and conditions. Users will be notified of any changes.</li>
                                    <li><strong>7. Contact Us</strong><br/>If you have any questions or concerns regarding our terms and conditions, please contact us at [Your Contact Information].</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="custom-card" style={{height: "410px"}}>
                            <h2 className="text-center" style={{color: "#063970", fontSize: "27px"}}>Have Fun</h2>
                            <p>Enjoy the quiz game and explore the world of knowledge with us. Your journey to learning and fun has just begun. Keep coming back for exciting quizzes and new challenges!</p>
                            {/* <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <img src={img3} style={{maxWidth: "70%;", height: "auto"}}/>
                            </div> */}
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
    </div>
                    )
}
