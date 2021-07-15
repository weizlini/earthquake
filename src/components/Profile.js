import React, { useEffect, useState } from "react";
import { useSiteData } from "../contexts/DataContext";
import "./Profile.css";
const Profile = () => {
  const { data } = useSiteData();
  const [profile, setProfile] = useState();
  useEffect(() => {
    if (data) {
      setProfile(data.profile);
    }
  }, [data]);
  return (
    <>
      {profile && (
        <div className="profile-view">
          <img src={profile.avatarImage} className="avatar" />
          <table>
            <tr>
              <th>First Name</th>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <th>Bio</th>
              <td>{profile.bio}</td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
};
export default Profile;
