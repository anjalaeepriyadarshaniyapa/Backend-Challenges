import React from 'react'
import axios from 'axios';

var empData = null;


const getEmployeeData = () => {

  axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then(data => { 
    empData = data.data;})
  .catch(error => console.log(error));
  };

 getEmployeeData();


function Dashboard() {
  return (
    // striped bordered hover
    <div className="container mt-3">
    <table className='table table-bordered' >
      <thead>
        <tr>
          <th>#</th>
          <th> Total Employees</th>
          <th>Total Working Hours</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{empData.userId}</td>
          <td>{empData.title}</td>
          
        </tr>
     
      </tbody>
    </table>
    </div>
  );
}

export default Dashboard;