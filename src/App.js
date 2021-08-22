import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Users from './users';
import Createuser from "./Creatuser";
import Edituser from "./Edituser";
import { UserProvider } from "./Usercontext";
import Dashboard from "./Dashboard";


function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar> </Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
            <UserProvider>
              <Switch>
                <Route path="/" key="0" component={Dashboard} exact={true} />
                <Route path="/user" key="1" component={Users} exact={true} />
                <Route path="/creat-user" key="3" component={Createuser} exact={true}/>
                <Route path="/edit/user/:id" key="5" component={Edituser} exact={true}/>
              </Switch>
              </UserProvider>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
