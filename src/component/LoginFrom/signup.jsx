import React, { useState } from "react";
import "./singup.css";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUpForm = ({ setCheck }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // New field
    const [address, setAddress] = useState(""); // New field

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (user) {
                // You can store the extra fields in your database if needed
                console.log('User details:', {
                    name,
                    email,
                    phone,
                    address,
                });

                alert("Account Created successfully");

                
                setName("");
                setEmail("");
                setPassword("");
                setPhone("");
                setAddress("");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className="main-signup">
                <div className="headers">
                    <h2>SignUp</h2>
                </div>
                <div className="box">
                    <input type="text" value={name} placeholder="UserName" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="box">
                    <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="box">
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="box">
                    <input type="text" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="box">
                    <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <p onClick={setCheck}>Already Have an Account? Login</p>
                <button onClick={submit}>SignUp</button>
            </div>
        </>
    );
};

export default SignUpForm;
