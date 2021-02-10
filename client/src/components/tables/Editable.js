import React, { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { tableIcons } from "./tableIcons";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AddDialog from "../users/AddDialog";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// ////////////////////////////////////////////////////////////////////////////////////////
function Editable({ rows, cols, tableName }) {
  const classes = useStyles();

  // table column data
  const [columns, setColumns] = useState([]);
  // table row data
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rows);
    setColumns(cols);
  }, [rows]);

  // for dialog box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddDialog
        mainOpen={open}
        mainSetOpen={setOpen}
        mainHandleClose={handleClose}
      />

      <MaterialTable
        icons={tableIcons}
        title={`All ${tableName} Information`}
        columns={
          tableName == "Posts"
            ? [
                ...columns,
                {
                  title: "Image",
                  field: "image",
                  render: (rowData) => (
                    <img src={rowData.image} style={{ width: 300 }} />
                  ),
                },
              ]
            : columns
        }
        data={data}
        actions={[
          {
            icon: tableIcons.Add,
            tooltip: "Add User",
            isFreeAction: true,
            onClick: handleClickOpen,
          },
        ]}
        options={{
          headerStyle: {
            backgroundColor: "#5ddef4",
            // backgroundColor: '#37474f',
            color: "#00",
            fontSize: "18px",
            fontWeight: 'bold'
          },
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </>
  );
}

export default Editable;
