import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    function handleSignup() {
        console.log("signup is being called");
    }


    const handleLogin = () => {
        navigate("/");
    }


    return (

        <div id="loginpcard" className="loginupcard">
            <h1>signup</h1>
            <div id="inputs" className="inputs">
                <input placeholder="enter name" className="nameinput" type="text" />
                <input placeholder="enter password" className="passwordinput" type="text" />

            </div>
            <div className="buttons">
                <button className="login" onClick={handleLogin}>Login</button>
                <button className="Signup" onClick={handleSignup}>Signup</button>
            </div>



        </div>


    )
}
export default Signup;