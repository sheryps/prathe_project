import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "./redux/userSlice";
import { Link } from "react-router-dom";
function Users() {
  const dispatch=useDispatch()
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3000/delete/'+id).then(res=>{
      dispatch(deleteUser({id}))
    console.log(res)
    }).catch(err=>console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">Add +</Link>
        <table className="table">
          <thead className="">
            <tr className="">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.designation}</td>
                  <td>{user.address}</td>
                  <td>
                    
                    <Link to={`/edit/${user.id}`} className="btn btn-sm btn-warning mb-2 me-2">Update</Link>
                    <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger mb-2">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
