import React from 'react';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  var userDetails =[
    {id:1, name: "WebRecto"},
    {id:2, name: "Shailendra"},
    {id:3, name: "Akhilesh"},
  ]
  const userInfo=(name)=>{
    navigate(`/userinfo/${name}`);
  }
  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={()=>userInfo("My web")} className="btn">User Info</button>
      <ul className="user">
        {
          userDetails.map((user) => {
            return(
              <li onClick={()=> userInfo(user.name)}>{user.name}</li>
            )
          })
        }
      </ul>
    </>
  );
};
export default Dashboard;