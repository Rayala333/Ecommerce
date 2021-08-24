import React from 'react';
import { bannerData } from '../../constants/data';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/styles';

const useStyle=makeStyles({
    image:{
        width:'100%',
        height:'280px',
    },
    Carousel:{
        marginTop:'10px'
    }
})

const Banner = () => {
    const classes=useStyle();
    return (
        <Carousel
                    autoPlay={true}
                    animation='slide'
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={true}
                    // navButtonsWrapperProps={{
                    //    style:{
                    //        margin:0,
                    //        background:'black',
                          
                    //    }
                    // }}
                    navButtonsProps={{
                        style:{
                            background:'#FFFFFF',
                            color:'#494949',
                            // borderRadius:'-30px ',
                            borderRadius:'0px',
                            margin:'-30px 0px',
                            height:'100px',
                            fontSize:'20px'
                        

                            
                        }
                    }} className={classes.Carousel}>
            {
                bannerData.map((image) => (
                    <img src={image} className={classes.image}/>
                ))
            }
        </Carousel>
    )
}

export default Banner
