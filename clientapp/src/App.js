import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {CustomerMaster} from './CustomerMaster/CustomerMaster';
import {PlantMaster} from './PlantMaster/PlantMaster';
import {DispatchMaster} from './DispatchMaster/DispatchMaster';
import {CustomerPartMaster} from './CustomerPartMaster/CustomerPartMaster'; 
import {ManualCreatedRSO} from './ManualRSO/ManualCreatedRSO';  
import {Navigation} from './Navigation'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  
  return (
    
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
     <b>Huf Customer Service</b>
     
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/CustomerMaster' component={CustomerMaster}/>
       <Route path='/PlantMaster' component={PlantMaster}/>
       <Route path='/DispatchMaster' component={DispatchMaster}/>
       <Route path='/CustomerPartMaster' component={CustomerPartMaster}/> 
       <Route path='/ManualCreatedRSO' component={ManualCreatedRSO}/>
       <Route path="/login">
</Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
