import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import NavBar from './NavBar';
import Banner from './Banner';


const useStyle=makeStyles({
    component:{
        padding:'10px',
        background:'#F4F4F4'
    }
})


const Home = () => {
    const classes=useStyle();
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
            </Box>
        </div>
    )
}

export default Home;
