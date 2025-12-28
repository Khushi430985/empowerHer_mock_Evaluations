import { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =() =>{
    const [email,setEmail]=
    useState("");
    const [password,setPassword]=
    useState("");
    const emailRef=useRef(null);
    const navigate = useNavigate();
    useEffect(()=>{
        emailRef.current.focus();
    },[]);

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin") {
            alert("Login success");
            localStorage.setItem("isAuth", "true");
            navigate("/admin");
        }
        else{
            alert("Wrong email or password");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="off"
            onChange={(e) =>
                setEmail(e.target.trim())
            } />

             <input
    
            type="password"
            placeholder="Password"
            value={password}
            autoCapitalize="off"
            onChange={(e) =>
                setEmail(e.target.trim())
            } />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;