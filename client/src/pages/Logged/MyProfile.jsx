import React, { useState, useEffect } from 'react';
import { fetchUserById } from '../../api';

function MyProfile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserById()
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>My Profile</h1>
      <p>{`Username: ${user.username}`}</p>
      <p>{`Email: ${user.email}`}</p>
    </div>
  );
}

export default MyProfile;
