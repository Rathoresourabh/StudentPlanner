import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../context/AuthContext"
import Home from "./Home"
import MainLayout from '../layouts/MainLayout'
import Login from "./Login"
import Profile from './Profile'
import Charts from './Charts'
// import AuthGuard from '../components/AuthGuard'
function App() {

  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
      
         <AuthProvider>   
         
         <MainLayout>
         <Switch>
            {/* <AuthGuard> */}
            <Route path="/Home" component={Home} exact /> 
            <Route path="/" component={Login} exact />
            <Route path="/myProfile" component={Profile} exact/> 
            <Route path="/myCharts" component={Charts} exact/> 
          
            {/* </AuthGuard> */}
          </Switch>
            
         </MainLayout>
          
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App