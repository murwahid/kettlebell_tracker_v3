import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'; 


const exerciseColumns = [ 
    // {field:"_id", headerName:"id", width:100},
    {field:'exercise', headerName:'Workout', width:200}, 
    {field:'reps', headerName:'Reps', type:'number', width:100, editable:true}, 
    {field:'startStop', headerName:'Start & Stopped', width:120}, 
    {field:'ease', headerName:'Easy?', width:100}, 
    {field:'notes', headerName:'Notes', width:150, editable:true},
    {field:'energyLvl', headerName:'Energy Level', type:'number', width:100}, 
    {field:'fatigueLvl', headerName:'Fatigue Level', type:'number', width:100}, 
]

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



export default function DataTable() {
    const [tableData, setTableData] = useState([]); 

    useEffect(()=> {
        axios.get('http://localhost:8000/api/workouts')
        .then(res => setTableData(res.data), console.log(tableData))
        .catch(err=> console.log(err))
    },[]);


const handleCommit = (e:GridCellEditCommitParams) => {
  const array = tableData.map(r=>{
    if(r.id ===e.id) {
      return {...r,[e.field]:e.value}
    }
  })
}

  return (
    
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        onCellEditCommit={handleCommit}
        rows={tableData}
        columns={exerciseColumns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
