import React, { useEffect } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';


function SignOut() {
    
    const history = useHistory();

    useEffect(() => {
        axios.post('http://localhost:4000/api/users/logout')
        .then(res=>{
                console.log('logout successful');
                history.push('/signin');
            }
        )
    }, [])



    return (
        <div>
            
        </div>
    )
}

export default SignOut;