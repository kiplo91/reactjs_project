import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './component/user/Login';


export default function App() {

  return (
  
  < BrowserRouter basename='/' >
  <Routes>
    <Route path='/' element="ini home saya" />
    <Route path='/about-us' element="Perihal mengenaai saya" />
    <Route path='/mypage' Component={Login}></Route>
  </Routes>
</BrowserRouter>
)


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



