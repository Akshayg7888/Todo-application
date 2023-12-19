import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    function handleLogin() {


        console.log("login is being called");
    }

    const handleSignup = () => {
        navigate("/Signup");
    }




    return (

        <div id="logincard" className="logincard">
            <h1>Login</h1>
            <div id="inputs" className="inputs">
                <input placeholder="enter name" className="nameinput" type="text" />
                <input placeholder="enter password" className="passwordinput" type="text" />

            </div>
            <div className="buttons">
                <button className="login" onClick={handleLogin}>Login</button>
                <button className="signup" onClick={handleSignup}>Sign up</button>
            </div>



        </div>


    )
}
export default Login;