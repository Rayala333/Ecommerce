import React from 'react'
import { Box, Button, makeStyles, Typography,Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: '600',
        padding: '5px 40px',
        boxShadow:'none',
    },
    wrapper: {
        margin: '0 8% 0 auto',
        display: 'flex',
        '&>*': {
            marginRight: '50px',
            alignItems:'center'

        },
    },
    container:{
        display:'flex',
    }
})
const HeaderButtons = () => {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            <Button variant="contained" className={classes.login}>Login</Button>
            <Typography style={{marginTop:"5px"}}>More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft:"10px"}}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default HeaderButtons
