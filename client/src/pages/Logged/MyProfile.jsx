import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function MyProfile({ getUser }) {
  const [user, setUser] = useState([]);
  const UserContext = useContext(getUser);

  useEffect(() => {
    setUser([UserContext]);
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

MyProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default MyProfile;
