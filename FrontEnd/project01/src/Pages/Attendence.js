import React, { Component } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/getAttendance";

export default class Attendence1 extends Component {
  state = {
    attendanceData: [],
    isload : true
  };

  tbody = (attendanceData) => {
    const tableRows = attendanceData.map((data) => {
      let checkin = data.checkin ? data.checkin : "N/A";
      let checkout = data.checkout ? data.checkout : "N/A";
      let total_working_hours = data.total_working_hours
        ? data.total_working_hours
        : "N/A";

      return (
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.address}</td>

          <td>{checkin}</td>
          <td>{checkout}</td>
          <td>{data.position}</td>
          <td>{total_working_hours}</td>
        </tr>
      );
    });

    return <tbody>{tableRows}</tbody>;
  };

  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        this.setState({ attendanceData: response.data });
        this.setState({ isload:false});
      })
      .catch((error) => console.log(error));
  }

  render() {

    if(this.state.isload)
    return  <div class="loader"></div>
    else
    return (
      <div className="container mt-3">
        <h1>Attendance Details</h1> <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Position</th>
              <th>total working hours</th>
            </tr>
          </thead>
          {this.tbody(this.state.attendanceData)}
        </table>
      </div>
    );
  }
}
