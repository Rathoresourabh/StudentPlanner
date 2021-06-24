import React ,{useContext} from 'react'
import {UserContext} from '../App'
import {useHistory} from 'react-router-dom'
import {Typography ,Button} from "@material-ui/core"

function Charts() {
    let {user} = useContext(UserContext);
    let history = useHistory();
    return (
        
        <Typography variant="h4" color="primary" align="center">
        Please go back to Home Page and fill in your details {user.displayName} To show your Chart

        <div>
        <Button variant="outlined" color="primary" align="center" onClick = {function() {
            history.push('/')
        }}>
            Go Back To Home Page
            </Button>
        </div>
        
        </Typography>

        
    )
}


export default Charts
