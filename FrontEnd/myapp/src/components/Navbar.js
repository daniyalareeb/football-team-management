import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/addteam">Add Team</Link>
      <Link to="/updateteam">Update Team</Link>
      <Link to="/deleteteam">Delete Team</Link>
      <Link to="/teamstats">Team Stats</Link>
      <Link to="/topteams">Top Teams</Link>
      <Link to="/averagegoals">Average Goals</Link>
    </nav>
  );
};

export default Navbar;
