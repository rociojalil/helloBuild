import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import './Registration.css'
// import Home from '../home/Home';
import swal from 'sweetalert';

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
            return swal("Error", "There was an error in the password or email, try again!", "error")
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
                : <h1>HOLA INGRESASTE</h1>
            }
          
            

        </div>
        
         
    )
}

export default Login

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,700&display=swap" rel="stylesheet">

//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//     <title>Login Form</title>
//   </head>
//   <body>
//       <div class="form-container">
//           <h4 class="form-heading">Create Account</h4>
//           <p class="signIn-text">Already Have An Account? 
//             <a href="#">Sign In</a></p>
//     <form class="login-form">
//         <input type="text" placeholder="Username" />
//         <div class="name-inputs">
//         <input type="text" placeholder="First Name" />
//         <input type="text" placeholder="Last Name" />
//         </div>
//         <input type="email" placeholder="E-mail" />
//         <button class="signup-btn">
//             sign up <i class="fas fa-arrow-right"></i>
//         </button>
//     </form>
//       </div>
//   </body>
// </html>