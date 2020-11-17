import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 400,
    },
});

export const SummaryCard = props => {
    const classes = useStyles();
    const label = props.isPublished ? 'Read' : 'Coming Soon';

    const renderButton = () => {
        if (props.isPublished) {
            return (
                <Button
                    size={'large'}
                    variant="outlined"
                    color="secondary"
                    onClick={() => window.location.href = props.slug}>
                    {label}
                </Button>
            )
        }

        return (
            <Button
                disabled
                size={'large'}
                variant="outlined"
                color="secondary">
                {label}
            </Button>
        )
    };

    const handleOnClick = () => {
        if (props.isPublished) {
            window.location.href = props.slug
        }
    }

    return (
        <Card className={classes.root} style={{ margin: '10px' }} onClick={handleOnClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.summaryImage}
                    title={props.title}
                />
                <CardContent style={{ height: '250px' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <EventIcon style={{ alignItems: 'flex-start' }} />
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{ alignItems: 'flex-end', paddingTop: '2px', marginLeft: '8px' }}>
                            {props.date}
                        </Typography>
                    </div>
                    <Chip
                        label={props.category}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.excerpt}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {renderButton()}
            </CardActions>
        </Card>
    )
}