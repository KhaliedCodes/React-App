import Home from './Pages/home/Home';
import Counter from './Pages/counter/Counter'
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Nav from './Components/nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Pages/shop/Shop';
import Details from './Pages/shop/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/shop/:id'  element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
