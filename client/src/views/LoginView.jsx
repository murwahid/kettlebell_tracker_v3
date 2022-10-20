import React from 'react';

/* MATERIAL UI */
import Card from '@mui/material/Card';
import { CardContent, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';


function LoginView() {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card>
            <CardContent>
              <h2>KettleBell Tracker Login</h2>
              <Divider />
              <Stack mt={2} spacing={1}>
                <FormControl>
                  {/* Email */}
                  <TextField
                    id="filled-password-input"
                    label="Email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                {/* Password */}
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </Stack>

              <p>Having trouble signing in?</p>

              <Button
                mb={3}
                variant="contained"
                fullWidth={true}
              >Sign In</Button>
              <Divider />
              <Stack mt={2} mb={2} spacing={1}>
                <button>Google</button>
                <button>MyFitnessPal</button>
                <button>Facebook</button>
              </Stack>
              <Divider />
              <p>Don't have an account? <strong>Register Now</strong> </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginView