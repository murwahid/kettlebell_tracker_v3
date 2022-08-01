import React from 'react'
import AddForm from '../components/AddForm'
import DataCard from '../components/DataCard'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SMSForm from '../components/SMSForm';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chart from '../components/Chart';
import TinyBarChart from '../components/TinyBarChart';
import TestDrawer from '../components/TestDrawer';
import DataTable from '../components/DataTable';

//test imports 
import { styled } from '@mui/material/styles';

//icon button
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';




//IMPORT: TWILIO
// const twilio = require('twilio');
// const client = require('twilio')(accountSid, authToken);
// const sendToNumber = '+19175579771';
// const messageBody = `Checking to see if a formatted string works. Here is the Twilio number ${phoneNumber}`;


function DashboardView() {
    // let today = new Date()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        // <div>
        //     <div style={{ marginBottom: 10 }}>
        //         <TestDrawer />
        //     </div>

        //     <div style={{ display: "flex", justifyContent: "space-between" }}>
        //         <DataTable />
        //         <AddForm />
        //     </div>
        //     </div>

            <div class="container">
                <div class="container">
                </div>
                <div class="row">
                    <div class="mt-5 col-xl-8 col-lg-8 col-md-8">
                        <div className="card shadow-sm">
                            <div class="row">
                                <div class="col-lg-11 col-md-10 col-sm-10">
                                    <h1 class="p-3">Workouts</h1>
                                </div>
                                <div class="col-lg-1 p-1 col-md-2 col-sm-2">
                                    <Tooltip title="All of your workout data">
                                        <IconButton>
                                            <InfoOutlinedIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <DataTable/>
                        </div>
                    </div>
                    <div class="mt-5 col-lg-4 col-md-4">
                        <AddForm/>
                    </div>
                </div>
            </div>


        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={8}>
        //             <Item><DataTable/></Item>
        //         </Grid>
        //         <Grid item xs={4}>
        //             <Item><AddForm/></Item>
        //         </Grid>
        //     </Grid>
        // </Box>

    )
}

export default DashboardView