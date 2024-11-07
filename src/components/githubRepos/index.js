// src/components/GithubRepos.js
import React, { useState, useEffect } from "react";
import { RiH2 } from '../../../node_modules/react-icons/ri/index.esm';
import "./style.css";

export const GithubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch data from GitHub API
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/sasasamaes/repos?sort=created&direction=desc");        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="github-repos-container mt-5">
    <h2>Github repositories</h2>
  
    <div className="github-repos mt-3">
      
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description available"}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View Repository
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};