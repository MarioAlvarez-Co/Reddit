import'../css/App.css'
import { Home} from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../containers/Header';
import { Details } from '../pages/Details';
import { useInitialState } from '../hooks/useInitialState';
import { AppContext } from '../context/AppContext';
function App() {  
  const initilState=useInitialState();
  return (
    <div className="App"> 
    <AppContext.Provider value={initilState}>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>          
          </Routes>    
        </BrowserRouter>   
    </AppContext.Provider>  
    </div>
  );
}
export default App;
