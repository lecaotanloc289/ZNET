import React from "react";
import "../Login/Login.css";
import iconBg1 from "../../img/icon-bg1.png"
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="container">
            <div className="img-container">
                <img className="icon-bg" src={iconBg1}></img>
            </div>
            <div className="container-form">
                <form>
                    <h1>Sign Up</h1>
                    <p>Please sign in to continue.</p>
                    <div className="inputBox">
                        <input type="fullName"
                            name="fullName"
                            id="fullName"
                            // onChange={handleChange}
                            placeholder="Full Name" />
                    </div>
                    <div className="inputBox">
                        <input type="email"
                            name="email"
                            id="email"
                            // onChange={handleChange}
                            placeholder="Email" />
                    </div>
                    <div className="inputBox">
                        <input type="password"
                            name="password"
                            id="password"
                            // onChange={handleChange}
                            placeholder="Password" />
                    </div>
                    <div className="inputBox">
                        <input type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            // onChange={handleChange}
                            placeholder="Confirm Password" />
                    </div>
                    <div className="divBtn">
                        {/* <small className="forgotPassword">Forgot Password?</small> */}
                        <button type="submit" className="loginBtn">SignUp</button>
                    </div>
                </form>
                <div className="dont">
                    <p>Already have an accout? <Link to='/'><span></span>Log In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;