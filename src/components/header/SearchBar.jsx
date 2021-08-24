import React from 'react';
import { makeStyles,fade,InputBase,alpha, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const usestyle=makeStyles((theme)=>({
    search: {
        
        borderRadius: '5px',
        backgroundColor: '#fff',
        // marginRight: theme.spacing(2),
        marginLeft: '100px',
        width: '35%',
        display:'flex',
        color:'black',
        
        
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        padding:'5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width:'100%'
      },
      inputInput: {
        paddingLeft: '15px',
       
      },
}))

const SearchBar = () => {
    const classes=usestyle()
    return (
       
        <div className={classes.search}>

            <InputBase
              placeholder="Search for products brands....."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        
    )
}

export default SearchBar;
