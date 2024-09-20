import React, { useState, useEffect } from 'react';




const Profile = () => {
  // Stocke l'utilisateur
  const [user, setUser] = useState([]);

  // Fonction pour récupérer les données de l'utilisateur via l'API GitHub
  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json); 
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="my-4">GitHub User Profile</h1>
      <article className="card mx-auto my-4" style={{ width: '20rem' }}>
        <img src={user.avatar_url} alt={user.login}/>
        <div className="card-body">
          <h2 className="card-title">{user.name || user.login}</h2>
          <p className="card-text">Username:{user.login}</p>
          <p className="card-text">ID:{user.id}</p>
          <p className="card-text">Bio:{user.bio || 'No bio available'}</p>
          <p className="card-text">Location:{user.location || 'No location'}</p>
          <p className="card-text">Public Repos:{user.public_repos}</p>
          <p className="card-text">Followers:{user.followers}</p>
          <p className="card-text">Following:{user.following}</p>
          <p className="card-text">GitHub URL:<a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
          <p className="card-text">Account Created:{new Date(user.created_at).toLocaleDateString()}</p>
          <p className="card-text">Last Updated:{new Date(user.updated_at).toLocaleDateString()}</p>
        </div>
      </article>
    </div>
  );
};


export default Profile;
