import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DataTable from "react-data-table-component";
 
const App = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  // Dummy API Base URL
  const API_URL = "https://jsonplaceholder.typicode.com";
 
  // Handle form submission for POST request
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/posts`, data);
      setTableData((prevData) => [...prevData, response.data]); // Add the response to the table
      reset(); // Reset the form
    } catch (error) {
      console.error("Error with POST request:", error);
    }
  };
 
  // Handle fetching data for GET request
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setTableData(response.data.slice(0, 10)); // Fetch only the first 10 posts
    } catch (error) {
      console.error("Error with GET request:", error);
    } finally {
      setLoading(false);
    }
  };
 
  // Table columns
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Title", selector: (row) => row.title, sortable: true },
    { name: "Body", selector: (row) => row.body, sortable: false },
  ];
 
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hook Form & React DataTable Example</h1>
 
      {/* Form for POST request */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title:</label>
          <input
            {...register("title", { required: true })}
            placeholder="Enter title"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Body:</label>
          <textarea
            {...register("body", { required: true })}
            placeholder="Enter body"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>User ID:</label>
          <input
            type="number"
            {...register("userId", { required: true })}
            placeholder="Enter user ID"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
 
      {/* Button to fetch data */}
      <button onClick={fetchData} style={{ marginBottom: "20px" }}>
        Fetch Data
      </button>
 
      {/* Data Table */}
      <DataTable
        title="Post Data"
        columns={columns}
        data={tableData}
        progressPending={loading}
        pagination
      />
    </div>
  );
};
 
export default App;