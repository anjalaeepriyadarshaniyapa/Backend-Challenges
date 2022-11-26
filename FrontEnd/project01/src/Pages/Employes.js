import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

export default function MyForm() {
  const url = "http://127.0.0.1:8000/api/saveEmployee";
  const [data, setData] = useState({
    name: "",
    position: "",
    address: "",
    telephone: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submitEmployee(e) {
    e.preventDefault();

    axios
      .post(url, {
        name: data.name,
        position: data.position,
        address: data.address,
        telephone: data.telephone,
      })
      .then(
        (res) => {
          const reset = {
            name: "",
            position: "",
            address: "",
            telephone: "",
          };

          setData(reset);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="container mt-3">
      <h1>Add new Employes</h1> <br/>
      <fieldset className="hFybtn form">
        <form
          onSubmit={(e) => {
            submitEmployee(e);
          }}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="name">Enter your Name:</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                value={data.name}
                className="form-control"
                id="name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="position">Enter your Position:</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                value={data.position}
                className="form-control"
                id="position"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="address">Enter your Address:</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                value={data.address}
                className="form-control"
                id="address"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="telephone">Enter your Telephone:</label>
            <input
              type="text"
              length="10"
              onChange={(e) => handle(e)}
              value={data.telephone}
              className="form-control"
              id="telephone"
              placeholder="+9477563000"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
