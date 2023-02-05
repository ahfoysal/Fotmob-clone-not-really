// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leftbar from './Components/Left-bar';
import RightBar from './Components/Right-bar';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';


function App() {
  return (
    <div className='body'>
        <BrowserRouter>  
    
   
     <Pages  />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
