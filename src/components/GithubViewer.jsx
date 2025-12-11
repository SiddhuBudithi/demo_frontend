import React, { useState } from "react";
import { getGithubUser } from "../services/api";

export default function GithubViewer() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = () => {
    getGithubUser(username).then((res) => setProfile(res.data));
  };

  return (
    <div>
      <h1>GitHub User Viewer</h1>

      <input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchProfile}>Search</button>

      {profile && (
        <div className="card">
          <img src={profile.avatar_url} alt="avatar" width="100" />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p>Repos: {profile.public_repos}</p>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}