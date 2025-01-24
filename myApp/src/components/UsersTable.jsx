import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function UsersTable({tableData}) {
    const navigate = useNavigate();
    const columns = [
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "username",
          selector: (row) => row.username,
          sortable: true,
        },
        {
          name: "Address",
          selector: (row) => row.address,
          sortable: true,
        },
        {
            name: "Contact",
            selector: (row) => row.contact,
            sortable: true,
          },
        {
          name: "Age",
          selector: (row) => row.age,
          sortable: true,
        },
      ];

    return (
        <div>
        {/* <h2>Users Data</h2> */}
        <DataTable
            title="User Data"
            columns={columns}
            data={tableData}
            pagination
            selectableRows
            highlightOnHover
        />
        <button onClick={()=>navigate('/usersForm')}>Add Users</button>
        </div>
    );
    };
