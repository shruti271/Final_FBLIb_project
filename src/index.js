import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import * as React from 'react';
// import { styled, } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { makeStyles } from "@material-ui/core/styles";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import titleIcon from "../assets/Rectangle.svg";
// import libraryicon from "../assets/Vector.svg"
// import staricon from "../assets/Vectora.svg"
// import contact from "../assets/contact.svg"
// import logout from "../assets/Logout.svg"
// import Notefictionicon from "../assets/Notefictionicon.svg"
// // import Profileicon from "../assets/Profile.svg"
// import Polygonicon from "../assets/Polygon.svg"
// import { Avatar, Grid } from '@mui/material';
// import ShowAdd from './ShowAdd';
// const drawerWidth = 276;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });
// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 10px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );

// export default function Sidebar() {
//     const classes = useStyles();
//     // const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         if (open === false) {
//             setOpen(true);
//         } else {
//             setOpen(false)
//         }
//     };

//     return (
//         <>
//             <Box sx={{ display: 'flex' }}>
//                 <Box>
//                     <Drawer variant="permanent" open={open} style={{ display: "flex", justifyContent: "space-between" }}>
//                         <DrawerHeader style={{ borderColor: "red" }}>
//                             {open === false ?
//                                 (
//                                     <Closesidebaricon>
//                                         <img alt="Remy Sharp" src={titleIcon} />
//                                     </Closesidebaricon>
//                                 ) :
//                                 (
//                                     <Box sx={{ display: "flex", justifyContent: "center", marginTop: "43px", marginRight: "24px" }}>
//                                         <img alt="Remy Sharp" src={titleIcon} className={classes.titleimage} />
//                                         <Typography edge="start" className={classes.title} variant="h5" component="div" sx={{ fontWeight: 900 }}>
//                                             Eye of Ecom
//                                         </Typography>
//                                     </Box>
//                                 )
//                             }
//                         </DrawerHeader>
//                         <Box sx={{ height: "64px", marginTop: "117px", background: "linear-gradient(270deg, rgba(0, 203, 255, 0.5) 0%, rgba(0, 203, 255, 0.03) 100%)", borderRadius: "30px", display: "flex" }}>
//                             <img alt="libraryicon" src={libraryicon} className={classes.libraryimg} />
//                             <Addlib>
//                                 <Typography >Adilbrary Database</Typography>
//                             </Addlib>
//                         </Box>

//                         <Box sx={{ height: "64px", marginTop: "6px", backgroundColor: "#FFFFFF", display: "flex" }}>
//                             <img alt="staricon" src={staricon} className={classes.libraryimg} />
//                             <Addlib>
//                                 <Typography >Saved Ads</Typography>
//                             </Addlib>
//                         </Box>

//                         <Box sx={{ height: "64px", marginTop: "345px", display: "flex" }}>
//                             <img alt="contact support" src={contact} className={classes.libraryimg} />
//                             <Addlib>
//                                 <Typography >Contact Support</Typography>
//                             </Addlib>
//                         </Box>

//                         <Box sx={{ height: "64px", marginTop: "3px", display: "flex" }}>
//                             <img alt="Logout" src={logout} className={classes.libraryimg} />
//                             <Addlib>
//                                 <Typography >Log Out</Typography>
//                             </Addlib>
//                         </Box>
//                     </Drawer>
//                 </Box>
//                 <Grid container position="sticky">
//                     <Grid item xs={10}>
//                         <Toolbar>
//                             <IconButton
//                                 color="inherit"
//                                 aria-label="open drawer"
//                                 onClick={handleDrawerOpen}
//                                 open={open}
//                                 edge="start"
//                                 sx={{
//                                     marginRight: 5,
//                                     marginBottom: 4
//                                 }}
//                             >
//                                 <MenuIcon sx={{ color: "#00CBFF" }} />
//                             </IconButton>
//                         </Toolbar>
//                     </Grid>
//                     <Grid item xs={0.4}>
//                         <Avatar sx={{ backgroundColor: "#00CBFF" }}>
//                             <img alt='notefictionicon' src={Notefictionicon} />
//                         </Avatar>
//                     </Grid>
//                     <Grid item xs={0.4}>
//                         <Avatar sx={{ backgroundColor: "#00CBFF" }}></Avatar>
//                     </Grid>
//                     <Grid item xs={0.5} sx={{ marginTop: "10px" }}>
//                         <Typography> JeansBeans</Typography>
//                     </Grid>
//                     <Grid item xs={0.5}>
//                         <Avatar sx={{ backgroundColor: "#00CBFF", height: "20px", width: "20px", marginTop: "10px", marginLeft: "40px" }} >
//                             <img alt="ployginicon" src={Polygonicon} />
//                         </Avatar>
//                     </Grid>
//                 </Grid>
//             </Box>
//             <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                 <DrawerHeader />
//                 <Typography variant='h6'>This is add component</Typography>

//             </Box>

//         </>

//     );
// }

// const useStyles = makeStyles(() => ({
//     title: {
//         background: "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         // margin:
//     },
//     titleimage: {
//         height: "37px !important",
//         width: "41px !important",
//         marginRight: "10px"
//     },
//     staricon: {
//         marginLeft: "20px"
//     },
//     libraryimg: {
//         marginLeft: "20px"
//     }
// }));

// const Addlib = styled('div')(({ theme }) => ({
//     margin: "20px 30px",
//     fontWeight: 500
// }))
// const Closesidebaricon = styled('div')(({ theme }) => ({
//     marginTop: "50px"
// }))
