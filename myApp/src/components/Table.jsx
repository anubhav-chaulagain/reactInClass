import DataTable from "react-data-table-component";
 
const data = [
  { id: 1, name: "User 1", email: "user1@example.com", age: 33 },
  { id: 2, name: "User 2", email: "user2@example.com", age: 26 },
  { id: 3, name: "User 3", email: "user3@example.com", age: 61 },
  { id: 4, name: "User 4", email: "user4@example.com", age: 34 },
  { id: 5, name: "User 5", email: "user5@example.com", age: 53 },
  { id: 6, name: "User 6", email: "user6@example.com", age: 58 },
  { id: 7, name: "User 7", email: "user7@example.com", age: 32 },
  { id: 8, name: "User 8", email: "user8@example.com", age: 31 },
  { id: 9, name: "User 9", email: "user9@example.com", age: 23 },
  { id: 10, name: "User 10", email: "user10@example.com", age: 65 },
  { id: 11, name: "User 11", email: "user11@example.com", age: 28 },
  { id: 12, name: "User 12", email: "user12@example.com", age: 38 },
  { id: 13, name: "User 13", email: "user13@example.com", age: 30 },
  { id: 14, name: "User 14", email: "user14@example.com", age: 19 },
  { id: 15, name: "User 15", email: "user15@example.com", age: 34 },
  { id: 16, name: "User 16", email: "user16@example.com", age: 38 },
  { id: 17, name: "User 17", email: "user17@example.com", age: 24 },
  { id: 18, name: "User 18", email: "user18@example.com", age: 18 },
  { id: 19, name: "User 19", email: "user19@example.com", age: 25 },
  { id: 20, name: "User 20", email: "user20@example.com", age: 49 },
  { id: 21, name: "User 21", email: "user21@example.com", age: 26 },
  { id: 22, name: "User 22", email: "user22@example.com", age: 64 },
  { id: 23, name: "User 23", email: "user23@example.com", age: 19 },
  { id: 24, name: "User 24", email: "user24@example.com", age: 57 },
  { id: 25, name: "User 25", email: "user25@example.com", age: 49 },
  { id: 26, name: "User 26", email: "user26@example.com", age: 60 },
  { id: 27, name: "User 27", email: "user27@example.com", age: 49 },
  { id: 28, name: "User 28", email: "user28@example.com", age: 55 },
  { id: 29, name: "User 29", email: "user29@example.com", age: 43 },
  { id: 30, name: "User 30", email: "user30@example.com", age: 35 },
  { id: 31, name: "User 31", email: "user31@example.com", age: 55 },
  { id: 32, name: "User 32", email: "user32@example.com", age: 41 },
  { id: 33, name: "User 33", email: "user33@example.com", age: 22 },
  { id: 34, name: "User 34", email: "user34@example.com", age: 23 },
  { id: 35, name: "User 35", email: "user35@example.com", age: 61 },
  { id: 36, name: "User 36", email: "user36@example.com", age: 55 },
  { id: 37, name: "User 37", email: "user37@example.com", age: 23 },
  { id: 38, name: "User 38", email: "user38@example.com", age: 29 },
  { id: 39, name: "User 39", email: "user39@example.com", age: 44 },
  { id: 40, name: "User 40", email: "user40@example.com", age: 58 },
  { id: 41, name: "User 41", email: "user41@example.com", age: 52 },
  { id: 42, name: "User 42", email: "user42@example.com", age: 30 },
  { id: 43, name: "User 43", email: "user43@example.com", age: 63 },
  { id: 44, name: "User 44", email: "user44@example.com", age: 22 },
  { id: 45, name: "User 45", email: "user45@example.com", age: 47 },
  { id: 46, name: "User 46", email: "user46@example.com", age: 23 },
  { id: 47, name: "User 47", email: "user47@example.com", age: 64 },
  { id: 48, name: "User 48", email: "user48@example.com", age: 45 },
  { id: 49, name: "User 49", email: "user49@example.com", age: 24 },
  { id: 50, name: "User 50", email: "user50@example.com", age: 19 },
  { id: 51, name: "User 51", email: "user51@example.com", age: 41 },
  { id: 52, name: "User 52", email: "user52@example.com", age: 49 },
  { id: 53, name: "User 53", email: "user53@example.com", age: 38 },
];
 
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
];
 
const Table = () => {
  return (
    <div>
      <h2>React DataTable Component</h2>
      <DataTable
        title="User List"
        columns={columns}
        data={data}
        pagination
        selectableRows
        highlightOnHover
      />
    </div>
  );
};
 
export default Table;