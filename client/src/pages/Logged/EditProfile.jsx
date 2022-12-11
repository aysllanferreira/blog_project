import React, { useState, useEffect } from 'react';
import { updateUser, fetchUserById } from '../../api';

function EditProfile() {
  const [user, setUser] = useState({});
  const [isDone, setIsDone] = useState(true);

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

  const [users, setUsers] = useState({
    username: '',
    email: '',
    image: '',
    bio: '',
    age: '',
    city: '',
    state: '',
    country: '',
    linkedin: '',
    github: '',
    instagram: '',
    website: '',
  });

  if (Object.keys(user).length > 0 && isDone) {
    setUsers({
      username: user.username && user.username,
      email: user.email && user.email,
      image: user.image && user.image,
      bio: user.bio && user.bio,
      age: user.age && user.age,
      city: user.city && user.city,
      state: user.state && user.state,
      country: user.country && user.country,
      linkedin: user.linkedin && user.linkedin,
      github: user.github && user.github,
      instagram: user.instagram && user.instagram,
      website: user.website && user.website,
    });
    setIsDone(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(users)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    username, email, age, image, bio, city, state,
    country, linkedin, github, instagram, website,
  } = users;
  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bio">
          Bio
          <input
            type="text"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="state">
          State
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="country">
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="linkedin">
          LinkedIn
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="github">
          GitHub
          <input
            type="text"
            name="github"
            value={github}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="instagram">
          Instagram
          <input
            type="text"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="website">
          Website
          <input
            type="text"
            name="website"
            value={website}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default EditProfile;
