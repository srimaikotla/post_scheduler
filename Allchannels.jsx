import React from 'react';
import './channel.css'; // Ensure the CSS file is in the same directory or a correct path
import { Link } from 'react-router-dom';

function Allchannels() {
  return (
    <div className="channel">
      <img src="https://varelahighschool.net/wp-content/uploads/2020/08/18-185839_plan-your-schedule-schedule-clipart-768x803.jpg" alt="Schedule" />
      <h2>No posts Scheduled</h2>
      <Link to="/content"><button>Schedule Post</button></Link>
    </div>
  );
}

export default Allchannels;