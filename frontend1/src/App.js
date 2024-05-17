import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import AddEvents from './components/AddEvents';
import Events from './components/Events';
import UpdateEvents from './components/UpdateEvents';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NoMatch from './components/NoMatch';
import AuthProvider from './components/AuthProvider';
import RequiredAuth from './components/RequiredAuth';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/events' element={<Events />} />
          <Route path='/addevents' element={<RequiredAuth> <AddEvents /></RequiredAuth>} />
          <Route path='*' element={<NoMatch />} />
          <Route path='/updateevents' element={<RequiredAuth><UpdateEvents /></RequiredAuth>} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/profile' element={<RequiredAuth> <Profile /></RequiredAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;