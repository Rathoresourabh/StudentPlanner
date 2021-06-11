import React, {useContext} from 'react'
import {UserContext} from '../App'
import {auth} from  '../utils/firebase'
function Home() {

  let {user} = useContext(UserContext)
  
 


    return (
        
      <div>
          
            
           <h1>This is a home Page for {user.displayName}</h1>
            
            
          
      </div>
      
        
    )
}

export default Home
