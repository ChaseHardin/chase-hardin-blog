import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar
}));

export const DrawerContent = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key={'home'} onClick={() => window.location.href = '/'}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button key={'about'} onClick={() => window.location.href = '/about'}>
                    <ListItemIcon>
                        <SentimentVerySatisfiedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'About'} />
                </ListItem>
            </List>
        </div>
    )
}