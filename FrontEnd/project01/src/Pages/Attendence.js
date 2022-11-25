import React from 'react';
import axios from 'axios';

var attendanceData = [];
const url="http://127.0.0.1:8000/api/getAttendance";

const getAttendenceData = () => {

  axios
  .get(url)
  .then(response => { 
    attendanceData = response.data;})
  .catch(error => console.log(error));
  };

  getAttendenceData();

function tbody(attendanceData){

  const tableRows = attendanceData.map((data) => {

  <tr>
    <td>data.name</td>
    <td>data.address</td>
    <td>data.cheakin</td>
    <td>data.cheakout</td>
    <td>data.position</td>
    <td>data.total_working_hours</td>
  </tr>
  }
 
);

  return (<tbody>
       {tableRows}
      </tbody>)
   ;
}

function Attendence() {
  return (
    <div className="container mt-3">
    <table className='table table-bordered' >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Cheak in</th>
          <th>cheak out</th>
          <th>Position</th>
          <th>total working hours</th>
        </tr>
      </thead>
      {tbody(attendanceData)}
    </table>
    </div>
  );
}

export default Attendence;