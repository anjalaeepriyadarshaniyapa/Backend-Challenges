import React from 'react'



function Attendence() {
  return (
    // striped bordered hover
    <div className="container mt-3">
    <table className='table table-bordered' >
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Address</th>
          <th>Cheak in</th>
          <th>cheak out</th>
          <th>Position</th>
          <th>total working hours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>05</td>
        </tr>
     
      </tbody>
    </table>
    </div>
  );
}

export default Attendence;