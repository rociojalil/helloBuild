import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from './Login';
import './Registration.css'
import swal from 'sweetalert';


function Registration() {
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!user || !name || !lastname || !email || !password ) {
            setFlag(true);
            return swal("Error", "You must complete all the fields", "error")

        } else {
            setFlag(false);
            swal("Succes!", "Account Created successfully!   Now Log In to your account", "success")
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            localStorage.setItem("name", JSON.stringify(name));
            // console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }



    return (
        <div>
            
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
            <title>Login Form</title>
                <div className="body">

                <div className="form-container">
                <h4 className="form-heading">Create Account</h4>
                <p className="signIn-text">Already Have An Account? 
                <a href="#" onClick={handleClick}>   Sign In</a></p>


                <div className="login-form">
                <input type="text" className="form-control" placeholder="Username" name="name" onChange={(event) => setUser(event.target.value)}/>
                    
                    {/* <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} /> */}
                    <div class="name-inputs">
                <input type="text" className="form-control" placeholder="First Name" name="name" onChange={(event) => setName(event.target.value)}/>
                 <input type="text" className="form-control" placeholder="Last Name" name="lastname" onChange={(event) => setLastname(event.target.value)}/>
                </div>
                <input type="email" className="form-control" placeholder="E-mail" name="email" onChange={(event) => setEmail(event.target.value)}/>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={(event) => setPassword(event.target.value)}/>

                    
                <button type="submit" className="form-control" class="signup-btn">
                 sign up <i class="fas fa-arrow-right"></i>
                {/* {flag} */}
                </button>

                </div>
                </div>
                </div>
                

            </form> : <Login />} </div> : <h1>ingresaste</h1>}
            </div>
            
        
            
    )
}

export default Registration


