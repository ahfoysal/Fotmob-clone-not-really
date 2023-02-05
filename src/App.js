// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leftbar from './Components/Left-bar';
import RightBar from './Components/Right-bar';


function App() {
  return (
    <div className='body'>
        <Header />
        <Leftbar />
        <RightBar />
        <Home />
    </div>
  );
}

export default App;
