import './App.css';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Homepage from './components/Homepage';
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IdleTimer from './components/IdleTimer';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/Profile';

function App() {
  return (
    <div>
    <IdleTimer />
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
    {/* </IdleTimer> */}
    </div>
  );
}

export default App;
