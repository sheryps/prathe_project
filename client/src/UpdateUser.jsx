import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateUser } from "./redux/userSlice";
function UpdateUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);
  console.log(user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [address, setAddress] = useState(user.address);
  const [designation, setDesignation] = useState(user.designation);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/update/"+id, {
        name,
        email,
        age,
        address,
        designation,
      })
      .then((res) => {
        console.log(res);
        dispatch(updateUser({id,name,email,age,address,designation}))
        navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form action="" onSubmit={handleEdit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Designation</label>
            <input
              type="text"
              placeholder="Enter Designation"
              className="form-control"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
