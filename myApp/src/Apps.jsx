import React, {Suspense} from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import axios from "axios";


// import Login from "./components/Login";
// import Register from "./components/Register";

const Signup = React.lazy(()=> import("./components/Register"));
const Login = React.lazy(()=> import("./components/Login"));
const ValidationYup = React.lazy(()=> import("./components/Validation"));
const Table = React.lazy(()=> import("./components/Table"));

const SimpleForm = React.lazy(()=>import("./components/SimpleForm"));
const UsersForm = React.lazy(()=>import("./components/UsersForm"));
const UsersTable = React.lazy(()=>import("./components/UsersTable"));

function App() {
  const [data, setData] = useState([]);
  
  function updateData(newData) {
    setData((prevData)=>{
      const upData = [...prevData, newData];
      return upData;
    })
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>

        {/* <Route path="/signup" element={<Register />}/> // WITHOUT SUSPENSE
        <Route path="/login" element={<Login />}/> */}
        

        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/count" element={<Counter />}/>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/Form" element={<SimpleForm />}/>
        <Route path="/formValidation" element={<ValidationYup />}/>
        <Route path="/table" element={<Table />}/>
        <Route path="/usersForm" element={<UsersForm updateNewData={updateData} />} />
        <Route path="/usersTable" element={<UsersTable tableData={data}/>}/>
      </Routes>
      </Suspense>
      
    </Router>
  )
}

export default App
