import React, { useState } from 'react'
import './Registration.css'
// import Home from '../home/Home';
import swal from 'sweetalert';
import {Link, Redirect} from 'react-router-dom';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    
    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('password').replace(/"/g, "");
        let mail = localStorage.getItem('email').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            return swal("Error", "Missing data entry, try again!", "error")
            
            // console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
            return swal("Error", "Wrong email or password, try again!", "error")
        } else {
            setHome(!home);
            swal("Succes!", "Succes!", "success")
            setFlag(false);
        }
    }

   

    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
            <div className="body">

            <div className="form-container">
            <h4 className="form-heading">Log In</h4>
            <div className="login-form">
                <div className="form-group">
                    <label>Email</label>
                    <br/>
                <input type="email" className="form-control" placeholder="Enter E-mail" name="email" onChange={(event) => setEmaillog(event.target.value)} />
                <label>Password</label>
                <br/>
                <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={(event) => setPasswordlog(event.target.value)}/>

                </div>
                <button type="submit" class="signup-btn">
                Login <i class="fas fa-arrow-right"></i>
                </button>  
                </div>
                </div>
                </div>

                {flag }
            </form>
                : <div><Redirect to="/home"></Redirect></div>
            }
        </div>     
    )
}

export default Login
