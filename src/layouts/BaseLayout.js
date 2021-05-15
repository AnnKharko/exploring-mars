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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



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
        },
        bottomNav: {
            width: '100%',
            backgroundColor: '#0ab384',


        }
    }));

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState('recents');
    const [state, setState] = useState({
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
    });

    const handleChangeFormGroup = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleClick = () => {
        setOpen(!open);
    };



    const handleChange = (event) => {
             setChecked(event.target.checked);
    };

    const handleChangeBottomNav = (event, newValue) => {
        setValue(newValue);
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
                        <Container>
                            <FormGroup> Camera
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChangeFormGroup} name="checkedA" />}
                                    label="FHAZ"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedB} onChange={handleChangeFormGroup} name="checkedB" />}
                                    label="RHAZ"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedC} onChange={handleChangeFormGroup} name="checkedC" />}
                                    label="MAST"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedD} onChange={handleChangeFormGroup} name="checkedD" />}
                                    label="MAHLI"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedE} onChange={handleChangeFormGroup} name="checkedE" />}
                                    label="MARDI"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedF} onChange={handleChangeFormGroup} name="checkedF" />}
                                    label="NAVCAM"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedG} onChange={handleChangeFormGroup} name="checkedG" />}
                                    label="PANCAM"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedH} onChange={handleChangeFormGroup} name="checkedH" />}
                                    label="MINITES"
                                />
                            </FormGroup>
                        </Container>

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
                                            This site helps people to explore NASA`s expeditions to Mars
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
                <footer>
                    <BottomNavigation value={value} onChange={handleChangeBottomNav} className={classes.bottomNav}>
                        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                    </BottomNavigation>
                </footer>
            </div>
        )
};
