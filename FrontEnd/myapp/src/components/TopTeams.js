import React, { useState } from 'react';
import axios from 'axios';

const TopTeams = () => {
  const [wins, setWins] = useState('');
  const [teams, setTeams] = useState([]);

  const fetchTopTeams = () => {
    axios.get(`http://localhost:5000/topteams/${wins}`) // Use backticks for template literals
      .then(response => setTeams(response.data))
      .catch(error => alert(error.response?.data?.error || 'Failed to fetch teams'));
  };

  return (
    <div className="form-container">
      <h1>Top 10 Teams</h1>
      <input
        type="number"
        name="Wins"
        placeholder="Enter Minimum Wins"
        value={wins}
        onChange={(e) => setWins(e.target.value)}
      />
      <button onClick={fetchTopTeams}>Get Top 10</button>

      {teams.length > 0 && (
        <div className="top-teams">
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Games Played</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Points</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td>{team.Team}</td>
                  <td>{team['Games Played']}</td>
                  <td>{team.Win}</td>
                  <td>{team.Draw}</td>
                  <td>{team.Loss}</td>
                  <td>{team['Goals For']}</td>
                  <td>{team['Goals Against']}</td>
                  <td>{team.Points}</td>
                  <td>{team.Year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TopTeams;
