import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import Create from "./Create";
import UpdateUser from "./UpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "./redux/userSlice";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        dispatch(getUser(response.data.employees));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path='create' element={<Create/>}/>
        <Route path='/edit/:id' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
