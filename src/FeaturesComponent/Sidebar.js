import * as React from 'react';
import { styled, } from '@mui/material/styles';
import { Button, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import titleIcon from "../assets/Rectangle.svg";
import libraryicon from "../assets/Vector.svg"
import staricon from "../assets/Vectora.svg"
import contact from "../assets/contact.svg"
import logout from "../assets/Logout.svg"
import Notefictionicon from "../assets/Notefictionicon.svg"
// import Profileicon from "../assets/Profile.svg"
import Firstcard from "../assets/Firstcard.svg"
import Polygonicon from "../assets/Polygon.svg"
import Arrowdown from '../assets/Arrowdown.svg';
import Firstcardimg from "../assets/FirstCardImg.svg"
import Secondaddimg from "../assets/Secondaddimg.svg"
import Thirdaddimg from "../assets/Thirdaddimg.svg"
import Shareicon from "../assets/Shareicon.svg"
// import Shareicon2 from "../assets/Shareicon2.svg"
import Saveicon from "../assets/Saveicon.svg"
// import Addscount from "../assets/Addscount.svg";
import Addgraph from "../assets/Addgraph.svg"
import { Avatar, Grid } from '@mui/material';
const drawerWidth = 276;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 10px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme)
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false)
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                
                    <Drawer variant="permanent" open={open} style={{ display: "flex", justifyContent: "space-between" }}>
                        <DrawerHeader style={{ borderColor: "red" }}>
                            {open === false ?
                                (
                                    <Closesidebaricon>
                                        <img alt="Remy Sharp" src={titleIcon} />
                                    </Closesidebaricon>
                                ) :
                                (
                                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "43px", marginRight: "24px" }}>
                                        <img alt="Remy Sharp" src={titleIcon} className={classes.titleimage} />
                                        <Typography edge="start" className={classes.title} variant="h5" component="div" sx={{ fontWeight: 900 }}>
                                            Eye of Ecom
                                        </Typography>
                                    </Box>
                                )
                            }
                        </DrawerHeader>
                        <Box sx={{ height: "64px", marginTop: "117px", background: "linear-gradient(270deg, rgba(0, 203, 255, 0.5) 0%, rgba(0, 203, 255, 0.03) 100%)", borderRadius: "30px", display: "flex" }}>
                            <img alt="libraryicon" src={libraryicon} className={classes.libraryimg} />
                            <Addlib>
                                <Typography >Adilbrary Database</Typography>
                            </Addlib>
                        </Box>

                        <Box sx={{ height: "64px", marginTop: "6px", backgroundColor: "#FFFFFF", display: "flex" }}>
                            <img alt="staricon" src={staricon} className={classes.libraryimg} />
                            <Addlib>
                                <Typography >Saved Ads</Typography>
                            </Addlib>
                        </Box>

                        <Box sx={{ height: "64px", marginTop: "405px", display: "flex" }}>
                            <img alt="contact support" src={contact} className={classes.libraryimg} />
                            <Addlib>
                                <Typography >Contact Support</Typography>
                            </Addlib>
                        </Box>

                        <Box sx={{ height: "64px", marginTop: "3px", display: "flex" }}>
                            <img alt="Logout" src={logout} className={classes.libraryimg} />
                            <Addlib>
                                <Typography >Log Out</Typography>
                            </Addlib>
                        </Box>
                    </Drawer>
                

                <Box sx={{ width: '100%' }}>
                    <Grid container position="sticky" sx={{ height: "40px" }} >
                        <Grid item xs={10}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    open={open}
                                    edge="start"
                                    sx={{
                                        marginRight: 5,
                                        marginBottom: 4
                                    }}
                                >
                                    <MenuIcon sx={{ color: "#00CBFF" }} />
                                </IconButton>
                            </Toolbar>
                        </Grid>
                        <Grid item xs={0.4}>
                            <Avatar sx={{ backgroundColor: "#00CBFF" }}>
                                <img alt='notefictionicon' src={Notefictionicon} />
                            </Avatar>
                        </Grid>
                        <Grid item xs={0.4}>
                            <Avatar sx={{ backgroundColor: "#00CBFF" }}></Avatar>
                        </Grid>
                        <Grid item xs={0.5} sx={{ marginTop: "10px" }}>
                            <Typography> JeansBeans</Typography>
                        </Grid>
                        <Grid item xs={0.5}>
                            <Avatar sx={{ backgroundColor: "#00CBFF", height: "20px", width: "20px", marginTop: "10px", marginLeft: "40px" }} >
                                <img alt="ployginicon" src={Polygonicon} />
                            </Avatar>
                        </Grid>
                    </Grid>


                    <Box sx={{ width: "100%", padding: "1px" }}>

                        <Box component="main" sx={{ marginLeft: "50px" }} >
                            <Typography variant='h6'>Welcome to the All-Seeing Eye!</Typography>
                            <Typography>Spy on 100% of the ads ran by over 30,000 active dropshippingn stores</Typography>
                        </Box>

                        <Box sx={{ marginLeft: "83px", display: "flex", marginTop: "18px", height: "43px" }}>
                            <Paper
                                variant="outlined"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1500, borderRadius: "10px" }}
                            >
                                <IconButton sx={{ width: 242, display: "flex", justifyContent: "space-between" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }} >Ad Text</Button>
                                    <img alt='arrowdown' src={Arrowdown} />
                                </IconButton>
                                <Divider orientation="vertical" flexItem />
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search..."
                                />
                            </Paper>
                        </Box>

                        <Box sx={{ marginLeft: "83px", display: "flex", justifyContent: "flexStart", marginTop: "22px", height: "43px" }}>
                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 230, borderRadius: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Started Running Date</Button>
                                    <img alt='arrowdown' src={Arrowdown} />
                                </IconButton>
                            </Paper>

                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 160, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Ad count</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>


                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 160, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Ad Status</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>

                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 250, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Facebook Page Likes</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>

                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 260, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Facebook Page Likes</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>
                            <ColorButton>
                                Clear
                            </ColorButton>
                        </Box>

                        <Box sx={{ marginLeft: "80px", display: "flex", justifyContent: "flexStart", marginTop: "22px", height: "43px" }}>
                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 165, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>Media Type</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>

                            <Paper
                                variant="outlined"
                                sx={{ display: 'flex', justifyContent: "space-between", width: 150, borderRadius: "10px", marginLeft: "10px" }}
                            >
                                <IconButton sx={{ color: "#2B2F42" }} aria-label="menu">
                                    <Button id="outlined-basic" label="Outlined" sx={{ color: "black" }}>buttion</Button>
                                    <img alt='arrowdown' src={Arrowdown} style={{ marginLeft: "30px" }} />
                                </IconButton>
                            </Paper>

                            <SubmitButton>
                                Submit
                            </SubmitButton>
                        </Box>

                        <Box sx={{ marginLeft: "20px", marginTop: "30px", padding: "5px", height: "580px" }}>
                            <Grid item container  columns={{ xs: 5 }}>
                                <Grid item  lg={3} md={4} >
                                    <Box sx={{ height: "570px", width: "400px" }}>
                                        <Addheader>
                                            <Avatar src={Firstcard} aria-label="Add" />
                                            <Typography variant='h6' component="div" >Best Sollar Lighting </Typography>
                                            <Typography mt={0.7} mr={1}>(21,604 likes)</Typography>
                                        </Addheader>
                                        <img src={Firstcardimg} alt="img1" style={{ height: "361px", width: "398px" }} />
                                        <Box sx={{ display: "flex", width: "380px" }}>
                                            <Imgfooter>
                                                <Typography sx={{ flexBasis: "100px" }}>Active</Typography>
                                                <img src={Shareicon} alt="icon" />
                                                <img src={Saveicon} alt="icon" style={{ marginLeft: "20px" }} />
                                                <Typography color="#c0c0c0">Started Running : May 15,2022</Typography>
                                                <Typography color="black">Sollar Powered Butterfly Lights</Typography>
                                            </Imgfooter>

                                            <Avatar variant="string" alt="count" sx={{ bgcolor: "#00CBFF", display: "flex", flexDirection: "column", padding: "5px" }}> 7
                                                <Typography variant="caption" display="block" gutterBottom >Ads</Typography>
                                            </Avatar>
                                        </Box>
                                        <Graph>
                                            <img src={Addgraph} alt="addgraph" />
                                        </Graph>
                                        <Button variant='contained' size="small" className={classes.sedetails} sx={{ marginLeft: "270px", marginTop: "10px", borderRadius: "17px" }}>see Details</Button>
                                    </Box>
                                </Grid>
                                <Grid item lg={3} md={4}>
                                    <Box sx={{ height: "570px", width: "400px" }}>
                                        <Addheader>
                                            <Avatar src={Firstcard} aria-label="Add" />
                                            <Typography variant='h6' component="div">Best Sollar Lighting </Typography>
                                            <Typography mt={0.7} mr={1}>(21,604 likes)</Typography>
                                        </Addheader>
                                        <img src={Secondaddimg} alt="img1" style={{ height: "361px", width: "398px" }} />
                                        <Box sx={{ display: "flex", width: "380px" }}>
                                            <Imgfooter>
                                                <Typography sx={{ flexBasis: "100px" }}>Active</Typography>
                                                <img src={Shareicon} alt="icon" />
                                                <img src={Saveicon} alt="icon" style={{ marginLeft: "20px" }} />
                                                <Typography color="#c0c0c0">Started Running : May 15,2022</Typography>
                                                <Typography color="black">Sollar Powered Butterfly Lights</Typography>
                                            </Imgfooter>

                                            <Avatar variant="string" alt="count" sx={{ bgcolor: "#00CBFF", display: "flex", flexDirection: "column", padding: "5px" }}> 7
                                                <Typography variant="caption" display="block" gutterBottom >Ads</Typography>
                                            </Avatar>
                                        </Box>
                                        <Graph>
                                            <img src={Addgraph} alt="addgraph" />
                                        </Graph>
                                        <Button variant='contained' size="small" className={classes.sedetails} sx={{ marginLeft: "270px", marginTop: "10px", borderRadius: "17px" }}>see Details</Button>
                                    </Box>
                                </Grid>
                                <Grid item lg={3} md={4}>
                                    <Box sx={{ height: "570px", width: "400px" }}>
                                        <Addheader>
                                            <Avatar src={Firstcard} aria-label="Add" />
                                            <Typography variant='h6' component="div">Best Sollar Lighting </Typography>
                                            <Typography mt={0.7} mr={1}>(21,604 likes)</Typography>
                                        </Addheader>
                                        <img src={Thirdaddimg} alt="img1" style={{ height: "361px", width: "398px" }} />
                                        <Box sx={{ display: "flex", width: "380px" }}>
                                            <Imgfooter>
                                                <Typography sx={{ flexBasis: "100px" }}>Active</Typography>
                                                <img src={Shareicon} alt="icon" />
                                                <img src={Saveicon} alt="icon" style={{ marginLeft: "20px" }} />
                                                <Typography color="#c0c0c0">Started Running : May 15,2022</Typography>
                                                <Typography color="black">Sollar Powered Butterfly Lights</Typography>
                                            </Imgfooter>

                                            <Avatar variant="string" alt="count" sx={{ bgcolor: "#00CBFF", display: "flex", flexDirection: "column", padding: "5px" }}> 7
                                                <Typography variant="caption" display="block" gutterBottom >Ads</Typography>
                                            </Avatar>
                                        </Box>
                                        <Graph>
                                            <img src={Addgraph} alt="addgraph" />
                                        </Graph>
                                        <Button variant='contained' size="small" className={classes.sedetails} sx={{ marginLeft: "270px", marginTop: "10px", borderRadius: "17px" }}>see Details</Button>
                                    </Box>
                                </Grid>

                                <Grid item lg={3} md={4}>
                                    <Box sx={{ height: "570px", width: "400px" }}>
                                        <Addheader >
                                            <Avatar src={Firstcard} aria-label="Add" />
                                            <Typography variant='h6' component="div">Best Sollar Lighting </Typography>
                                            <Typography mt={0.7} mr={1}>(21,604 likes)</Typography>
                                        </Addheader>
                                        <img src={Secondaddimg} alt="img1" style={{ height: "361px", width: "398px" }} />

                                        <Box sx={{ display: "flex", width: "380px" }}>
                                            <Imgfooter>
                                                <Typography sx={{ flexBasis: "100px" }}>Active</Typography>
                                                <img src={Shareicon} alt="icon" />
                                                <img src={Saveicon} alt="icon" style={{ marginLeft: "20px" }} />
                                                <Typography color="#c0c0c0">Started Running : May 15,2022</Typography>
                                                <Typography color="black">Sollar Powered Butterfly Lights</Typography>
                                            </Imgfooter>

                                            <Avatar variant="string" alt="count" sx={{ bgcolor: "#00CBFF", display: "flex", flexDirection: "column", padding: "5px" }}> 7
                                                <Typography variant="caption" display="block" gutterBottom >Ads</Typography>
                                            </Avatar>
                                        </Box>
                                        <Graph>
                                            <img src={Addgraph} alt="addgraph" />
                                        </Graph>
                                        <Button variant='contained' size="small" className={classes.sedetails} sx={{ marginLeft: "270px", marginTop: "10px", borderRadius: "17px" }}>see Details</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const useStyles = makeStyles(() => ({
    title: {
        background: "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // margin:
    },
    titleimage: {
        height: "37px !important",
        width: "41px !important",
        marginRight: "10px"
    },
    staricon: {
        marginLeft: "20px"
    },
    libraryimg: {
        marginLeft: "20px"
    },
    sedetails: {
        background: "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",

    }
}));

const Addlib = styled('div')(({ theme }) => ({
    margin: "20px 30px",
    fontWeight: 500,
}))

const Closesidebaricon = styled('div')(({ theme }) => ({
    marginTop: "50px"
}))

const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    '&:hover': {
        backgroundColor: "#00CBFF",
    },
    marginLeft: "30px"
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    color: "black",
    '&:hover': {
        backgroundColor: "#00CBFF",
    },
    marginLeft: "810px"
}));

const Addheader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: "center",
    width: "350px",
    padding: "6px"
}));

const Imgfooter = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: "wrap",
    padding: "2px",
    marginLeft: "30px"
}));
const Graph = styled('div')(({ theme }) => ({
    margin:theme.spacing(2,0,0,4)
}));
