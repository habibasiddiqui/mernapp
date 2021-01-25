import React from 'react';
import Password from './Password';
import { Grid, TextField} from '@material-ui/core';
import { AccountCircleIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

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
                
                <Grid item xs={10} md={8} lg={6}>
                    <form width='80%'>

                    {/* <Grid container spacing={1} alignItems="flex-end">
                        <Grid item sm={12} md={2}>
                            Name
                        </Grid>
                        <Grid item sm={10} md={10}>
                        </Grid>
                    </Grid> */}
                            <TextField id="input-with-icon-grid" label="Username" fullWidth/>

                    </form>
                </Grid>
                
                <Grid item xs={1} md={2} lg={3}>
                <Password />
                </Grid>

            </Grid>


            

            


            
        </div>
    )
}

export default Signup
