import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UserComponent from './components/UserComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import DeleteUserComponent from './components/DeleteUserComponent';

function App() {
  return (
    
    <div className="App">
      <Router>
      
          <HeaderComponent/>
          <div className="container">
            <switch>
              <Route path="/" exact component={UserComponent}></Route>
              <Route path="/users" exact component={UserComponent}></Route>
              <Route path="/addUser" exact  component={CreateUserComponent}></Route>
              <Route path="/updateUser/:id" exact  component={UpdateUserComponent}></Route>
              <Route path="/deleteUser/:id" exact component={DeleteUserComponent}></Route>
              
            </switch>
            
          </div>
          
          <FooterComponent/>
        
      </Router>
      
    </div>
  );
}

export default App;
