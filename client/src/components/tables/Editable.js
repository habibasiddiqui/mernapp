import React, { useState, useEffect } from 'react'
import  MaterialTable  from "material-table";
import { tableIcons } from './tableIcons'; 
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputAdornment, Typography, Button} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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


  
  
function Editable({rows, cols}) {
    // modal form
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {name, email, pwd};
        // console.log(user)
            axios.post('http://localhost:4000/api/users', user)
            .then(res => {
                console.log(res.data);
                // setUnique(res.data.unique);
                // if(unique)
                    history.push('/users');
                // else
                //     setMsg('Email already exists');
                
            })
            .catch(err=>console.log(err,'error'));
    }


    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [columns, setColumns] = useState([]);
    
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(rows);
        setColumns(cols);        
    }, [rows]);

    // console.log(data);
    // console.log(columns);

    // for modal

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    //   alert('heeeeey')
    };
    const handleClose = () => {
      setOpen(false);
    };
  

    return (
        <>
      <MaterialTable
        icons={tableIcons}
        title="Disable Field Editable Preview"
        columns={columns}
        data={data}
        actions={[
            {
              icon: tableIcons.AddIcon,
              tooltip: 'Add User',
              isFreeAction: true,
              onClick: handleOpen,
            },
          ]}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
  
                resolve();
              }, 1000)
            }),
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
      <Modal open={open} onClose={handleClose} 
        aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        <div style={modalStyle}  className={classes.paper}>
            <form onSubmit={handleSubmit}>
                {/* <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid className='' item sm={1} md={1}>
                            <PersonIcon className='icon'/>
                        </Grid>
                        <Grid  className='input-container' item sm={10} md={6}>
                            <TextField label="Username" className='input-textfield'
                            onChange={(e)=>setName(e.target.value)} />
                        </Grid>
                </Grid> */}

                <TextField label="Username" className='input-textfield'
                            onChange={(e)=>setName(e.target.value)} />

                <TextField className='input-textfield' label="Email"  type='email' 
                            onChange={(e)=>setEmail(e.target.value)} />

                <TextField className='input-textfield' label="Password"  type='password'
                            onChange={(e)=>setPwd(e.target.value)} />
                
                <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                           <Button type='submit' variant='contained' className='submit'>Add</Button>
                        </Grid>
                </Grid>

            </form>
        </div>
      </Modal>

</>

    )
  }
  
  export default Editable;