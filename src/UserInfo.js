import React from 'react';
import { useParams } from "react-router-dom";

const UserInfo = (props) => {
  const { username } = useParams();
  return (
    <h3>User Name - {username}</h3>
  );
};
export default UserInfo;