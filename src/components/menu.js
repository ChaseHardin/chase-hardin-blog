import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

export const Menu = () => {
    return (
        <>
        <AppBar position="fixed" style={{ backgroundColor: '#242526' }}>
            <Toolbar>
                <div className='profile-menu-picture-container'>
                    <img src={require("../images/profile_pic.png")} className='profile-menu-picture' alt={""} />
                </div>
                <Link to={'/'} style={{ marginRight: '20px' }}>
                    <Typography variant="h6" noWrap style={{ color: 'white' }}>
                        Chase Hardin
                    </Typography>
                </Link>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Link to={'/about/'} style={{ color: 'white' }}>
                        <Typography variant="h6">
                            About
                        </Typography>
                        </Link>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}