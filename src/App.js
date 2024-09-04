import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import "./Login.jsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Customer from "./Customer";
import UserInfo from "./UserInfo";

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <p className="title">Sensitive Data Scanner-LoginPage</p>
            
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} /> 
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#98FB98" }} />
                
            </form> 
          
        </>
        
    );
    
}


export default App;