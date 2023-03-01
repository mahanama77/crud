import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";

const CRUDS = () => {
  const empdata = [
    {
      id: 1,
      name: "Hasindu",
      age: 24,
      isActive: 1,
    },
    {
      id: 2,
      name: "Nimal",
      age: 24,
      isActive: 1,
    },
    {
      id: 3,
      name: "Kamal",
      age: 34,
      isActive: 0,
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(empdata);
  }, []);
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>name</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index+ 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default CRUDS;
