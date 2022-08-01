import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import kbell from '../assets/noun-kettlebell-253683.png';

function preventDefault(event) {
    event.preventDefault();
}

export default function DataCard(props) {

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275 }}>
                <img src={kbell} style={{height:"50px", width:"50px", borderRadius:"50%"}}></img>
                <Typography component="p" variant="h4">{props.title}</Typography>
                <Typography component="p" variant="h5">
                    $3,024.00
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    on 15 March, 2019
                </Typography>
            </Card>
        </React.Fragment>
    );
}