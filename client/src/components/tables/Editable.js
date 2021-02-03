import React, { useState, useEffect } from 'react'
import  MaterialTable, { MTableToolbar}  from "material-table";
import { tableIcons } from './tableIcons'; 
import Modal from '@material-ui/core/Modal';
import { makeStyles, createMuiTheme, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import { Grid, TextField, InputAdornment, Typography, Button} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AddDialog from '../users/AddDialog';
import { purple } from '@material-ui/core/colors';

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
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  // ////////////////////////////////////////////////////////////////////////////////////////
function Editable({rows, cols, tableName}) {
    // modal form
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let user = {name, email, pwd};
    //     // console.log(user)
    //         axios.post('http://localhost:4000/api/users', user)
    //         .then(res => {
    //             console.log(res.data);
    //             // setUnique(res.data.unique);
    //             // if(unique)
    //                 history.push('/users');
    //             // else
    //             //     setMsg('Email already exists');
                
    //         })
    //         .catch(err=>console.log(err,'error'));
    // }


    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    
    const [columns, setColumns] = useState([]);
    
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
  

    // const theme = createMuiTheme({
    //     palette: {
    //       primary: {
    //         main: '#00acc1',
    //       },
    //       secondary: {
    //         main: '#37474f',
    //       },
    //     },
    
    // });

    return (
        <>
        {/* <Grid container spacing={1} justify='center'>
          <Grid item sm={10}> */}
          {/* <MuiThemeProvider theme={theme}> */}

            <MaterialTable
                icons={tableIcons}
                title={`All ${tableName} Information`}
                columns={ tableName=='Posts' ? [...columns, { 
                  title: 'Image', 
                  field: 'image', 
                  render: rowData => <img src={rowData.image} style={{width: 300}} /> 
                }] : columns}
                data={data}
                actions={[
                    {
                      icon: tableIcons.Add,
                      tooltip: 'Add User',
                      isFreeAction: true,
                      onClick: handleClickOpen,
                    },           
                  ]}
                options={
                  {
                    headerStyle: {
                      backgroundColor: '#5ddef4',
                      color: '#00',
                      fontSize: '18px'
                    },
                    actionsColumnIndex: -1,
                    
                    
                  }
                    
                }         
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...data];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setData([...dataUpdate]);
          
                        resolve();
                      }, 1000)
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
          
                        resolve();
                      }, 1000)
                    }),
                }}
            />
          {/* </MuiThemeProvider> */}

      
          {/* </Grid>
        </Grid> */}

      <AddDialog mainOpen={open} mainSetOpen={setOpen} mainHandleClose={handleClose} />

    </>

    )
  }
  
  export default Editable;