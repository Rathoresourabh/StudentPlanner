import React,{useEffect} from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {auth} from '../utils/Firebase'

function Home() {

  const {user} = useAuth();
  
 


    return (
        
      <div>
          
            
            if(user)
            <h1>This is a home page for {user.displayName }</h1>
            
          
      </div>
      
        
    )
}

export default Home
