import React, { useState } from 'react';
import axios from 'axios';
import '../css/get.css';

function Volget() {
  const [userdata, setUserData] = useState([]);
//   const [error, setError] = useState('');

 
    axios
      .get('http://localhost:27000/user/get')
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  

  return (
    <>
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      {/* {error && <div>{error}</div>} */}
      <table className="user-table">
        <thead>
          <tr className="heading">
            <th>Volunteer id</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Location</th>
            <th>Activity</th>
            <th>Available slots</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((data) => (
            <tr key={data.vol_id}>
              <td>{data.vol_id}</td>
              <td>{data.date}</td>
              <td>{data.hours}</td>
              <td>{data.location}</td>
              <td>{data.activity}</td>
              <td>{data.slot_available}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Volget;
