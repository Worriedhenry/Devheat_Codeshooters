import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Communities from '../Community/Cummunity';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';;
export default function Content() {
        return (
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
              <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
              >
                <Toolbar>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <SearchIcon color="inherit" sx={{ display: 'block' }} />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        placeholder="Search Community"
                        InputProps={{
                          disableUnderline: true,
                          sx: { fontSize: 'default' },
                        }}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" sx={{ mr: 1 }}>
                        Join Community
                      </Button>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
              <Communities name="IIIT SURAT"></Communities>
                <Communities name="SVNIT"></Communities>
                <Communities name="IIT"></Communities>
            </Paper>)
      }
