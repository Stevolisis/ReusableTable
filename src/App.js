import {React,lazy,Suspense} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loader from './containers/Loader';
//import Tablecon from './containers/Tablecon'
import './styles/table.scss';
const Tablecon=lazy(()=>import('./containers/Tablecon'));
const Lazyloadimages=lazy(()=>import('./containers/Lazyloadimages'));

function App() {

  return (
 

<>


    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Routes>  
      <Route path='/' element={<Tablecon />} />
      <Route path='/images' element={<Lazyloadimages />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      </Suspense>
    </BrowserRouter>


    
    </>

  );
}

export default App;
