import {BrowserRouter as Router , Route,  Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import axios from 'axios';
import Dashboard from './pages/dashboard';


function App() {
  return (
   <Router>
     <div className="App">
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
