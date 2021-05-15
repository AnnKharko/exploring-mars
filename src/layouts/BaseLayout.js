import React, { useState} from 'react';
import styles from './BaseLayout.module.css';
import { Link as LinkRD } from "react-router-dom";
import {
    AppBar,
    Button,
    Container,
    Grid,
    IconButton,
    MenuList,
    Paper,
    Toolbar,
    Typography,
    MenuItem,
    Box
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';

import Checkbox from '@material-ui/core/Checkbox';



export const BaseLayout = ({children}) => {
    const rovers = ['Curiosity', 'Opportunity', 'Spirit']

    function handleBrClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const handleMenu = () => {
        console.log('this is menu');
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '150px',
            maxWidth: '200px',
            backgroundColor: '#e6e6e6',
            color: '#4d4d4d',
            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        mainFeaturesPost: {
            position: "relative",
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        },
        mainFeaturesPostContent: {
            position: "relative",
            // padding: theme.spacing(6),
            // marginTop: theme.spacing(8)
        },
        overlay: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundOverlay: "rgba(0,0,0,.3)"
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(true);


    const handleClick = () => {
        setOpen(!open);
    };



    const handleChange = (event) => {
             setChecked(event.target.checked);
    };


    return (
            <div className={styles.mainWrapper}>
                <header>
                    <AppBar style={{backgroundColor: '#0ab384'}} position={"relative"}>
                        <Container fixed>
                            <Toolbar>
                                <IconButton edge={"start"} color={"inherit"} aria-label={"menu"} onClick={handleMenu}>
                                    <ListIcon/>
                                </IconButton>
                                <Typography> Exploring Mars</Typography>

                            </Toolbar>

                        </Container>
                    </AppBar>
                     {/*todo*/}

                     {/*++++++++++++++++++++++++++++++*/}
                    {/*    <div>*/}
                    {/*        <Link to={'/'}>Home</Link>*/}
                    {/*    </div>*/}
                </header>


                <main>
                    <div className={styles.main}>
                    <div className={styles.subMain}>
                        <MenuList  className={classes.root}>
                            <MenuItem  button onClick={handleClick}>Rovers {open ? <ExpandLess /> : <ExpandMore />}</MenuItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <MenuList >
                                    { rovers.map((rover, index) =>  {
                                        return <MenuItem key={index} className={classes.nested} component={LinkRD} to={`/${rover}`}>{rover}</MenuItem>
                                    })}
                                </MenuList>
                            </Collapse>
                        </MenuList>
                        <Box>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}

                            />
                        </Box>

                    </div>

                    <div className={styles.subMain2}>

                    <Breadcrumbs style={{backgroundColor: '#e6e6e6'}} aria-label="breadcrumb">
                        <Link color="inherit" href="/" onClick={handleBrClick}>
                            Mars rovers
                        </Link>
                        <Link color="inherit" href="/opportunity" onClick={handleBrClick}>
                            Curiosity
                        </Link>
                        <Link
                            color="textPrimary"
                            href="/curiosity/photos/"
                            onClick={handleClick}
                            aria-current="page"
                        >
                            photos
                        </Link>
                    </Breadcrumbs>
                    <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                        <Container fixed>
                            <div className={classes.overlay}/>
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturesPostContent}>
                                        <Typography component={"h1"} variant={"h3"} color={"inherit"} gutterBottom>
                                            Exploring Mars
                                        </Typography>
                                        <Typography component={"h5"} color={"inherit"} paragraph>
                                            lorem ipsum dolores  lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores
                                        </Typography>
                                        {/*<Button variant={"contained"} color={"secondary"}>*/}
                                        {/*    Learn more*/}
                                        {/*</Button>*/}
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                    {children}
                    </div>
                    </div>
                </main>
                <footer>Footer Data</footer>
            </div>
        )
};
