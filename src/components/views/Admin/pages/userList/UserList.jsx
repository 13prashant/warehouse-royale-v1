import { useState } from 'react';
import { Link } from 'react-router-dom';
// Material components
import { DataGrid } from '@mui/x-data-grid';
// React Icons
import { MdDelete, MdOutlineFileUpload } from 'react-icons/md';
// Helpers
import { users } from './helpers';
// Css
import './userList.css';

export default function UserList() {
  const [data, setData] = useState(users);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);

  const fileTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
    'text/csv',
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleOnFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setFileError(null);
    } else {
      setFile(null);
      setFileError('Please select a valid excel file');
    }
  };

  const handleFileUpload = () => {
    console.log(file);
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
          <label>
            <input type="file" onChange={handleOnFileChange} />
            <MdOutlineFileUpload className="uploadIcon" />
          </label>
          <div className="sub2">
            {file && <p>{file.name}</p>}
            {fileError && <p style={{ color: 'red' }}>{fileError}</p>}
            <h3 className="uploadMessage">
              Click on the icon to select the Excel file
            </h3>
          </div>
        </div>
        <div className="buttonDiv">
          <button
            className="excelButton"
            disabled={!file}
            onClick={handleFileUpload}
          >
            Upload a File
          </button>
        </div>
      </div>
    </div>
  );
}
