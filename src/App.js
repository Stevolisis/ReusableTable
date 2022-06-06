import {React} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tablecon from './containers/Tablecon'
import './styles/table.scss';
function App() {

  return (
 

<>


    <BrowserRouter>
      <Routes>  
      <Route path='/' element={<Tablecon />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>


    
    </>

  );
}

export default App;
