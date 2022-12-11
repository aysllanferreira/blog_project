import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchUserById } from '../../api';

function MyProfile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserById()
      .then((res) => {
        setUser([res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const history = useHistory();

  const handleEditProfile = () => {
    history.push('/editprofile');
  };

  return (
    <div>
      <h1>My Profile</h1>
      <button
        type="button"
        onClick={handleEditProfile}
      >
        Edit Profile

      </button>
      {user.map((users) => (
        <div key={users.username}>
          {users.image && (
            <img
              src={users.image}
              alt={users.username}
            />
          )}
          <h2>{users.username}</h2>
          <p>{users.email}</p>
          {users.bio && <p>{users.bio}</p>}
          {users.age && <p>{users.age}</p>}
          {users.city && <p>{users.city}</p>}
          {users.state && <p>{users.state}</p>}
          {users.country && <p>{users.country}</p>}
          {users.linkedin && (
            <a href={users.linkedin}>LinkedIn</a>
          )}
          {users.github && (
            <a href={users.github}>GitHub</a>
          )}
          {users.instagram && (
            <a href={users.instagram}>Instagram</a>
          )}
          {users.website && (
            <a href={users.website}>Website</a>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyProfile;
