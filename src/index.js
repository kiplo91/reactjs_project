import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './component/user/Login';
import Home from './component/task/Home';
import Footer from './component/static/Footer';
import './index.css';


export default function App() {

  return (
  
  < BrowserRouter basename='/' >
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/about-me' element={<Footer/>} />
    <Route path='/my-tasks' element={<Home/>}></Route>
  </Routes>
</BrowserRouter>
)


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



