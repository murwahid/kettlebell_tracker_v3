import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BoltIcon from '@mui/icons-material/Bolt';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import CardHeader from '@mui/material/CardHeader';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddTimerForm from '../components/AddTimerForm';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//axios
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//alert
import Alert from '@mui/material/Alert';


// import BoltIcon from '@mui/icons-material/Bolt';
// const [submitted, setSubmitted] = useState(false);

let submitted = true;

function AddForm() {
    const [form, setForm] = useState({
        exercise: "",
        reps: null,
        startStop: null,
        ease: null,
        notes: null,
        energyLvl: null,
        fatigueLvl: null
    });
    const [value, setValue] = useState(null);
    // CHANGE THIS FATIGUE
    const [fatigue, setFatigue] = useState(null);
    const [hover, setHover] = React.useState(-1);
    const history = useHistory();

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    /*
    (event, newValue) => {
                                setValue(newValue);
                            }
    */


    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(form)
        console.log(`Energy levels for ${value}`)
        console.log(`Fatigue level: ${fatigue}`)

        axios.post('http://localhost:8000/api/new', form)
            .then(
                res => {
                    history.push("/")
                })
            .catch(err => console.log(err))
    }

    const onHandleEnergyLvlChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        // setValue(newValue)
        // const copyForm = {...form};
        // // state value declared above
        // copyForm.energyLvl = value;
        // setForm(copyForm);
    }

    const onHandleFatigueLvlChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onTestAlert = (e) => {
        //alert("Testing complete."); 
        console.log("pre" + submitted);
        submitted = true;
        console.log("post" + submitted);


    }


    return (
        <div>
            <Card sx={{ padding: 3 }}>
                {/* FORM HEADER */}
                <Box
                    sx={{ display: 'flex' }}
                >
                  
                    <FitnessCenterIcon />
                    <CardHeader
                        title="Add A New Workout"
                    />
                </Box>
                <Divider mb={1} variant="middle" />
                {/* ADD NEW WORKOUT FORM */}
                <form onSubmit={onSubmitHandler}>
                    <div>
                        {/* FIELD: EXERCISE */}
                        <InputLabel>Exercise</InputLabel>
                        <Select
                            required
                            placeholder="Exercise"
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            // value={age}
                            // onChange={handleChange}
                            label="Exercise"
                            name="exercise"
                            onChange={onChangeHandler}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"twoHandedSwing"}>Two Handed Swing</MenuItem>
                            <MenuItem value={"oneHandedSwing"}>One Handed Swing</MenuItem>
                            <MenuItem value={"rackedFrontSquat"}>Racked Front Squat</MenuItem>
                            <MenuItem value={"gobletSquat"}>Goblet Squat</MenuItem>
                            <MenuItem value={"shoulderPress"}>Shoulder Press</MenuItem>
                            <MenuItem value={"sumoDeadLift"}>Sumo Deadlift</MenuItem>
                            <MenuItem value={"row"}>Row</MenuItem>
                        </Select>
                        {/* <label>Set</label>
                        <input type="text" /> */}
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Reps"
                            name="reps"
                            onChange={onChangeHandler}
                            sx={{ margin: 0.5 }}
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <FormGroup>
                            <FormControlLabel sx={{ margin: 0.25 }} control={<Checkbox />} name="startStop" onChange={onChangeHandler} label="Start & Stopped?" />
                            <FormControlLabel sx={{ margin: 0.25 }} control={<Checkbox />} name="ease" onChange={onChangeHandler} label="Easy?" />
                        </FormGroup>
                    </div>
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="Notes"
                            name="notes"
                            onChange={onChangeHandler}
                            placeholder="Post Workout Thoughts."
                            multiline
                            sx={{ margin: 0.5 }}
                        />
                    </div>
                    <div sx={{ padding: 2 }}>
                        <label>Energy Level:</label>
                        <Rating
                            required
                            sx={{ margin: 1 }}
                            name="energyLvl"
                            value={form.energyLvl}
                            onChange={onHandleEnergyLvlChange}
                            icon={<BoltIcon fontSize="inherit" />}
                            emptyIcon={<BoltIcon fontSize="inherit" />}
                            getLabelText={getLabelText}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                    </div>
                    <div>
                        <label>Fatigue:</label>
                        <Rating
                            required
                            sx={{ margin: 1 }}
                            name="fatigueLvl"
                            value={form.fatigueLvl}
                            icon={<BatteryCharging20Icon fontSize="inherit" />}
                            emptyIcon={<BatteryCharging20Icon fontSize="inherit" />}
                            onChange={onHandleFatigueLvlChange}
                        />
                    </div>
                    <Grid
                        container
                        justifyContent="space-between"
                        mt={2}>
                        <Button sx={2} type="submit" variant="contained">Submit</Button>
                        {/* ADD TIMER */}
                        {/* <AddTimerForm /> */}
                    </Grid>
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                </form>
                {/* <button class="btn-success btn-lg"
                    onClick={onTestAlert}
                >
                    Test Alert</button> */}
                    {/* {
                        submitted == true ? <div class="mt-2"><Alert severity="success">Workout Added Successfully!</Alert></div> : null
                    } */}
            </Card>
        </div>
    )
}

export default AddForm;