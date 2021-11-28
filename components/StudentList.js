import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const StudentList = () => {
  const { students, removeStudent } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {students.length > 0 ? (
        <>
          {students.map(student => (
            <ListGroupItem className="d-flex" key={student.id}>
              <div style={{ marginRight:"10px" }}> 
              <strong>{student.rollNo}</strong>
              </div>
              <div style={{ marginRight:"10px" }}>  
              <strong>{student.name}</strong>
              </div> 
              <div style={{ marginRight:"10px" }}>
              <strong>{student.address}</strong>
              </div>
              <div style={{ marginRight:"10px" }}>
              <strong>{student.contactNumber}</strong>
              </div>
              <div style={{ marginRight:"10px" }}>
              <strong>{student.email}</strong>
              </div>
              <div className="ml-auto">
                <Link to={`/edit/${student.id}`} color="warning" className="btn btn-warning mr-1">Update</Link>
                <Button onClick={() => removeStudent(student.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Student</h4>
        )}
    </ListGroup>
  )
}
