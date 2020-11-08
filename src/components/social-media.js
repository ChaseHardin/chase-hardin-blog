import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

export const SocialMedia = () => {
    const handleFacebook = () => window.location.href = 'https://www.facebook.com/dchasehardin';
    const handleTwitter = () => window.location.href = 'https://www.twitter.com/chasehardin';
    const handleLinkedIn = () => window.location.href = 'https://www.linkedin.com/in/chase-hardin-41082854';
    const handleGithub = () => window.location.href = 'https://www.github.com/chasehardin';

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <IconButton aria-label="add to facebook icon" className={'social-media'}>
                <FacebookIcon onClick={handleFacebook} fontSize={'large'} />
            </IconButton>
            <IconButton aria-label="add to facebook icon" className={'social-media'}>
                <TwitterIcon onClick={handleTwitter} fontSize={'large'} />
            </IconButton>
            <IconButton aria-label="add to facebook icon" className={'social-media'}>
                <LinkedInIcon onClick={handleLinkedIn} fontSize={'large'} />
            </IconButton>
            <IconButton aria-label="add to facebook icon" className={'social-media'}>
                <GithubIcon onClick={handleGithub} fontSize={'large'} />
            </IconButton>
        </Grid>
    )
}