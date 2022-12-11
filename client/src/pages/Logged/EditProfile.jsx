import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { updateUser } from '../../api';

function EditProfile({ getUser }) {
  const [user, setUser] = useState({});
  const [isDone, setIsDone] = useState(true);
  const UserContext = useContext(getUser);

  useEffect(() => {
    setUser(UserContext);
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
    <div className="h-screen bg-gray-100/50">
      <h1>Edit Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="container max-w-2xl mx-auto shadow-md md:w-3/4"
      >

        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <a href="/myprofile" className="relative block">
                <img alt="profil" src={user.image} className="mx-auto object-cover rounded-full h-16 w-16 " />
              </a>
              <h1 className="text-gray-600">
                {user.username}
              </h1>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">
              Account
            </h2>

            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">
              Personal info
            </h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={handleChange}
                    placeholder="Image"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="age"
                    value={age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    placeholder="City"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="state"
                    value={state}
                    onChange={handleChange}
                    placeholder="State"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

            </div>
          </div>
          <hr />
        </div>

        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">
              Social Media
            </h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    onChange={handleChange}
                    placeholder="Linkedin"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="github"
                    value={github}
                    onChange={handleChange}
                    placeholder="Github"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="instagram"
                    value={instagram}
                    onChange={handleChange}
                    placeholder="Instagram"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={handleChange}
                    placeholder="Website"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

            </div>
          </div>
          <hr />
        </div>

        <button
          className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
          type="submit"
        >
          Submit

        </button>
      </form>

    </div>
  );
}

EditProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default EditProfile;
