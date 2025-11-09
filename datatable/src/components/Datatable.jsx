import React, { useEffect, useState } from "react";
import { data } from "../data";

const Datatable = () => {
  const [userdata, setUserdata] = useState(data);
  //   pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [perPageRecord, setperPageRecord] = useState(50);
  const [pgbtn, setPgbtn] = useState([]);

  //  button for pagination
  const paginationButton = () => {
    let result = [];
    for (let i = 1; i <= Math.ceil(data.length / perPageRecord); i++) {
      result.push(i);
    }
    setPgbtn(result);
  };
  //   record to display
  const getRecords = () => {
    let last = perPageRecord * currentPage;
    let first = last - perPageRecord;
    let results = data.slice(first, last);
    setUserdata(results);
  };
  // search function
  const handleSearch = (arg) => {
    if (arg.length == 0) {
      getRecords();
      return;
    }
    let results = userdata.filter((item) => {
      if (item.first_name.includes(arg)) {
        return true;
      }
      return false;
    });
    setUserdata(results);
  };
  //   useeffect
  useEffect(() => {
    paginationButton();
    getRecords();
  }, [currentPage, perPageRecord]);

  return (
    <div>
      <h2 align="center">Datatable</h2>
      <p align="center">
        Search :{" "}
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </p>
      <div>
        {pgbtn.map((item, index) => {
          return (
            <button key={index} onClick={() => setcurrentPage(item)}>
              {item}
            </button>
          );
        })}
        <select onChange={(e) => setperPageRecord(e.target.value)}>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>150</option>
          <option value={200}>200</option>
        </select>
      </div>
      <table
        border="2"
        cellPadding={5}
        cellSpacing={5}
        rules="all"
        align="center"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip Address</th>
          </tr>
        </thead>
        <tbody>
          {userdata.length > 0 &&
            userdata.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.ip_address}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
