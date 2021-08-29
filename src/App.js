import React from 'react';
import Login from './componentsLogin/Login';
import RegisterUser from './componentsLogin/RegisterUser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { useSelector } from 'react-redux';
import TetrisApp from './components/TetrisApp';
import { GlobalStyle } from './componentsLogin/styles/GlobalStyle';

const App = props => {
    const {uid}=useSelector(state=>state.userReduce);

    return (
        <Router>
            <div>
            <Switch>
                { !uid ?
                    <div>
                        <Route exact path="/api/usuarios/login"  component={Login}/>
                        <Route exact path="/api/usuarios/register"  component={RegisterUser}/> 
                        <Redirect to="/api/usuarios/login"/>
                    </div>
                    :<TetrisApp/>
                }
            </Switch>
            </div>
        </Router>
    );
};

export default App;