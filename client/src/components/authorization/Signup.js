import React from 'react';
import Password from './Password';
import { Grid, TextField, InputAdornment, Typography, Button} from '@material-ui/core';
import { AccountCircleIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));

function Signup() {

    // const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                
                <Grid item xs={1} md={2} lg={3}>
                </Grid>
                
                <Grid item xs={10} md={8} lg={6} className='form-container' >
                    <Typography variant='h4' className='title' >Sign Up</Typography>
                    <form className='signup-form' >

                    
                    

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid className='' item sm={1} md={1}>
                            <PersonIcon />
                        </Grid>
                        <Grid  className='input-container' item sm={10} md={6}>
                            <TextField label="Username" className='input-textfield'  />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item sm={1} md={1}>
                            <EmailIcon />
                        </Grid>
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield'  label="Email"/>
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item sm={1} md={1}>
                            <LockIcon />
                        </Grid>
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield' label="Password" />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                           <Button type='submit' variant='contained' className='submit'>Sign up</Button>
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            Already have an account? Sign in <a href=''>here</a>
                        </Grid>
                    </Grid>



                    {/* to unchange width and center effects of form */}
                    {/* <Grid className='signup-input' container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <TextField label="Password" />
                        </Grid>
                    </Grid> */}

                    </form>
                </Grid>
                
                <Grid item xs={1} md={2} lg={3}>
                {/* <Password /> */}
                </Grid>

            </Grid>


            

            


            
        </div>
    )
}

export default Signup
