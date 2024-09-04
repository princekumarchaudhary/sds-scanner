import React from 'react';
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/login");
  }
  return (
    <>
      <h3>Customer Info</h3>
      <button onClick={() => gotToNewPage()} className="btn">Go to Login Page</button>
    </>
  );
};
export default Customer;