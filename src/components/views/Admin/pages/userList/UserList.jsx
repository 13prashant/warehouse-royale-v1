import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { MdDelete, MdOutlineFileUpload } from 'react-icons/md';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'teamId',
      headerName: 'Team ID',
      width: 140,
    },
    {
      field: 'employeeType',
      headerName: 'Employee Type',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <MdDelete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="parentContainer">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton" style={{ fontSize: '1.25rem' }}>
            Create
          </button>
        </Link>
      </div>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
      <div className="excelSheet">
        <h1 className="uploadTitle"> Upload an Excelsheet Instead ! </h1>
        <div className="iconDiv">
          <div className="sub1">
            <MdOutlineFileUpload className="uploadIcon" />
          </div>
          <div className="sub2">
            <h3 className="uploadMessage">
              Click on the icon to select the Excel file.
            </h3>
          </div>
        </div>
        <div className="buttonDiv">
          <button className="excelButton"> Upload a File </button>
        </div>
      </div>
    </div>
  );
}
