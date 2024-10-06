import React, { useState, useContext  } from "react";
import "./singup.css";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { StoreContext } from "../contextstore/storedata";


const LoginForm = ({setIsLoggedIn,setCheck}) => {

    const {setAceestoken }=useContext(StoreContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const submit = async (e) => {
        e.preventDefault();

        try {
            const user = await  signInWithEmailAndPassword(auth, email, password);

            if (user) {
                console.log(user )
            //    setAceestoken(user.user.accessToken)
            localStorage.setItem("accessToken",user.user.accessToken)
            // localStorage.setItem("login",true)
            setIsLoggedIn(true)
            // const access_token = response.data.access_token;
            // localStorage.setItem('accesstoken', access_token);
            localStorage.setItem('isLoggedIn', 'true');
            // setIsLoggedIn(true);


                
                alert("Login successfully")
            }
        } catch (error) {
            alert(error)
        }
    };

    return (
        <>
            <div className="main-signup">
                <div className="headers">
                    <h2 >Login</h2>
                </div>
                
                <div className="box">
                    <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="box">
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p onClick={setCheck}>Don't Have an Account Create Account</p>
                <button onClick={submit}>Login</button>

            </div>

        </>

    );
};

export default LoginForm;


