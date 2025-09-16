import React, { useState } from 'react';
import axios from 'axios';

const AverageGoals = () => {
  const [year, setYear] = useState('');
  const [averageGoals, setAverageGoals] = useState([]);

  const fetchAverageGoals = () => {
    axios.get(`http://localhost:5000/averagegoals/${year}`) // Use backticks for template literals
      .then(response => setAverageGoals(response.data))
      .catch(error => alert(error.response?.data?.error || 'Failed to fetch average goals'));
  };

  return (
    <div className="form-container">
      <h1>Average Goals for Year</h1>
      <input
        type="number"
        name="Year"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={fetchAverageGoals}>Get Avg Goal</button>

      {averageGoals.length > 0 && (
        <div className="top-teams">
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Average Goals</th>
              </tr>
            </thead>
            <tbody>
              {averageGoals.map((team, index) => (
                <tr key={index}>
                  <td>{team._id}</td>
                  <td>{team.avgGoalsFor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AverageGoals;
