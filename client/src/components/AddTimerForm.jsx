import React, { useState } from 'react'
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';


function AddTimerForm() {
    const [toggleTime, setToggleTime] = useState(true);

    // const onHandleClick = (e) => {
    //     { e.target ? setToggleTime(false) : setToggleTime(true) }
    // }

    return (
        <div>
            {
                toggleTime ?
                    <Tooltip title="Start Workout">
                        <Fab color="secondary" onClick={(e)=>setToggleTime(false)}>
                            <PlayArrowIcon />
                        </Fab>
                    </Tooltip> :
                    <Tooltip title="End Workout">
                        <Fab color="error" onClick={(e)=>setToggleTime(true)}>
                            <StopIcon />
                        </Fab>
                    </Tooltip>
            }
        </div>
    )
}

export default AddTimerForm