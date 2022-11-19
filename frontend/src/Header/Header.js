import  React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Content from '../Home/Content_Tab1';
import Content2 from '../Home/Content_Tab2';

function Header(props) {
  const { onDrawerToggle } = props;
const handleevent=()=>{
    console.log("hui")
}


const [tabState, setTabState] = useState(1);

  const handleTabs = (value) => {
    
    setTabState(value);
    <Content val={value}/>
    return;
   }
   if(tabState===1){
  return (
    <><React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
      <Tabs
        value={tabState}
        onChange={(event, value) => { handleTabs(value) }} 
        indicatorColor="inherit"
        textColor="inherit"
        centered
      >
        <Tab value={1} label='Communities'>
        </Tab>
        <Tab value={2} label='Users'></Tab>
      </Tabs>
      </AppBar>
    </React.Fragment>
    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content val={1} />
          </Box>
        </>
  );}
    else{
        return (
        <><React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
      <Tabs
        value={tabState}
        onChange={(event, value) => { handleTabs(value) }} 
        indicatorColor="inherit"
        textColor="inherit"
        centered
      >
        <Tab value={1} label='Communities'>
        </Tab>
        <Tab value={2} label='Users'></Tab>
      </Tabs>
      </AppBar>
    </React.Fragment>
    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content2 />
          </Box>
        </>
  );
    }
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;