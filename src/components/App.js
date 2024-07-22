import '../styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

/* Import components */ 
import Quiz from './Quiz';
import Navbar from './Navbar';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import Home from './Home';
import QuestionState from '../contexts/Question/QuestionState';
import AnswerState from '../contexts/Answer/AnswerState';
import Answer from './Answer';
import About from './About';
import FeedbackState from '../contexts/Feedback/FeedbackState';

function App() {
  return (
    <FeedbackState>
    <AnswerState>
    <QuestionState>
    <div className="App" style={{backgroundColor: '#061161'}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/quiz' element={<Quiz/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/answer' element={<Answer/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </QuestionState>
    </AnswerState>
    </FeedbackState>
  );
}

export default App;
