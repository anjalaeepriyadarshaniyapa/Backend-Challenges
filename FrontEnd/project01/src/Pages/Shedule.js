import React from "react";
import * as xlsx from "xlsx";
import axios from "axios";

let excelJson = null;
const url = "http://127.0.0.1:8000/api/saveAttendance";

function Shedule() {
  return (
    <div className="container mt-3">
      <form
        onSubmit={(e) => {
          submitFile(e);
        }}
      >
        <p>Custom file:</p>
        <div className="custom-file mb-3">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            name="filename"
            onChange={readUploadFile}
          />
          <label className="custom-file-label">Choose file</label>
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function submitFile(e) {
  e.preventDefault();

  axios.post(url, excelJson).then(
    (response) => {
      console.log(response);
      excelJson = null;
    },
    (error) => {
      console.log(error);
    }
  );
}

const readUploadFile = (e) => {
  e.preventDefault();
  if (e.target.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      excelJson = xlsx.utils.sheet_to_json(worksheet);
      console.log(excelJson);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  }
};

export default Shedule;
