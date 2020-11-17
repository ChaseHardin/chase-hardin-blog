import Typography from "@material-ui/core/Typography"
import React from "react"
import Layout from "../components/layout";
import profilePicture from '../images/profile_pic.png';
import Grid from '@material-ui/core/Grid';

const headerFont = {
    marginBottom: '1rem',
    marginTop: '1rem'
};

export const AboutMe = () => {
    return (
        <Layout>
            <Grid container justify={'center'}>
                <Grid className='profile-menu-picture-container-lg'>
                    <img src={profilePicture} className='profile-menu-picture-lg' alt={"Profile Picture"} />
                </Grid>
            </Grid>
            <Typography className='profile-highlight' style={headerFont} align={'center'}>
                Christian | Husband | Developer
            </Typography>

            <Typography align={'justify'}>
                I am a Software Engineer and I work fully remote from my home south of Des Moines, IA.
                I went to Simpson College where I graduated with a degree in Computer Information Systems,
                minor in Computer Science, and emphasis in Graphic Design. I’ve worked in a variety of different
                technologies including C#, Angular, Python, Node, and my personal favorite, React.
            </Typography><br />

            <Typography align={'justify'}>
                Being a remote engineer, I am continually trying to find new ways to stay connected in the community and
                stay progressive with tech. I do this by staying active on my <a href="https://github.com/ChaseHardin">GitHub</a>, contributing to this blog, and most
                recently, I’ve started connecting with the open source world. My most recent contribution to NPM is <a href="https://www.npmjs.com/package/react-responsive-cards">react-responsive-cards</a>.
            </Typography>

            <Typography variant={'h4'} style={headerFont} align={'center'}>
                More About Me
            </Typography>

            <Typography align={'justify'}>
                I grew up on a cattle farm which cultivated my love for the outdoors. My life consisted of hunting
                whitetail deer, horse riding, and working cattle. I also had the opportunity to develop a passion
                for music, which created a lot of unique opportunities for me. As a college student, I spent a year
                touring the country with Lorie Line and the Fab Five. It was an amazing opportunity and I learned
                so much. That same year, I learned about programming and decided to pursue Software Engineering as a career.
            </Typography><br />

            <Typography align={'justify'}>
                In 2018, I married my gorgeous wife, Makenna. We live on an 8.5-acre acreage with chickens, two cats, and our
                golden retrievers – Ranger and Bambi. With the extra space, I’ve become a weekend woodworker and enjoy building
                things. This past year, I've built tables, cutting boards, and a butcher block work bench. As a woodworker
                and guitarist, I'd like to build my own guitar one day! 🎸
            </Typography><br />

            <Typography variant={'h4'} style={headerFont} align={'center'}>
                The Purpose of This Blog
            </Typography>

            <Typography align={'justify'}>
                I’ve always enjoyed helping others learn new technologies and this blog is just one way for me to contribute back to
                the developer community. On this blog, I’ll be sharing my ideas, how I write code, and how I overcame technical problems.
                How I develop is just one of many ways to write code so please don’t take these as absolutes. These posts are meant to make us
                question our way of thinking and writing code.
            </Typography>
        </Layout>
    )
}
