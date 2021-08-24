import React from 'react';
import{AppBar,Toolbar,makeStyles,Typography,Box,} from '@material-ui/core';
import SearchBar from "./SearchBar"
import { withStyles } from '@material-ui/styles';
import HeaderButtons from './HeaderButtons';


const useStyle=makeStyles({
    header:{
        background:'#2874f0',
        height:'55px'
    },
    logo:{
        width:'80px'
    },
    suburl:{
        width:'13px'
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        // padding:'10px'
       
    },
    subhead:{
        fontSize:'13px',
        fontStyle:'italic',
    }
})

const ToolBar =withStyles({
    root:{
        minHeight:'55px',
    }
})(Toolbar);


const Header = () => {

    const classes=useStyle();

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <AppBar className={classes.header}>
                <ToolBar>
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo}/>
                    {/* <Typography>rayala</Typography> */}
                    <Box className={classes.container}>
                        <Typography className={classes.subhead}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL}  className={classes.suburl}/>
                    </Box>
                 </Box> 
                    <SearchBar/>
                    <HeaderButtons/>
                </ToolBar>
               
            </AppBar>
           
        </div>
    )
}

export default Header;
