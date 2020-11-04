import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Grid from '@material-ui/core/Grid';

export const SocialMedia = () => {
    const handleFacebook = () => window.location.href = 'https://www.facebook.com/dchasehardin';
    const handleTwitter = () => window.location.href = 'https://www.twitter.com/chasehardin';
    const handleLinkedIn = () => window.location.href = 'https://www.linkedin.com/in/chase-hardin-41082854';

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <FacebookIcon onClick={handleFacebook} className={'social-media'} />
            <TwitterIcon onClick={handleTwitter} className={'social-media'} />
            <LinkedInIcon onClick={handleLinkedIn} className={'social-media'} />
        </Grid>
    )
}