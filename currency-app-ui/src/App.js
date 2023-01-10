import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function App() {
  //const WS_URL = 'ws://127.0.0.1:3002/';
  const socket = io("http://localhost:3002");
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
  {field: 'Date & Time'},
  {field: 'Currency From', filter: true},
  {field: 'Amount 1'},
  {field: 'Currency To', filter: true},
  {field: 'Amount 2'}, 
  {field: 'Type', filter: true}
]);
 
// DefaultColDef sets props common to all Columns
const defaultColDef = useMemo( ()=> ({
  sortable: true
}));

 // Example load data from sever
 useEffect(() => {
  fetch('http://localhost:3001/exchange-data/lastdata')
  .then(result => result.json())
  .then(rowData => {
    console.log(rowData);
    setRowData(rowData);
    // if(gridRef.current && gridRef.current.columnApi){
    //   gridRef.current.columnApi.autoSizeAllColumns();
    // }
  })
}, []);

// client-side
socket.on("connect", () => {
  // console.log("connect");
  // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  // console.log("disconnect");
  // console.log(socket.id); // undefined
});
var data = []
socket.on("exchangeData",(...args) =>{
  console.log("exchangedata");
  console.log(args);
  if(gridRef.current && gridRef.current.api && args && args.length > 0){
    gridRef.current.api.setRowData(args[0]);
    // if(gridRef.current.columnApi){
    //   gridRef.current.columnApi.autoSizeAllColumns();
    // }
    
  }
  
  //setRowData(args) ;
});
  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log('WebSocket connection established.');
  //   },
  //   onmessage

  // });
  return (
    <div>
    {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
    <div className="ag-theme-alpine" style={{width: "100%", height: 500}}>

      <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          //onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          />
    </div>
  </div>
  );
}

export default App;
