import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Icon from "../assets/images/Icon_Paimon.webp";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import Modal from '@mui/material/Modal';
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase-config"

const pages = [
    {name: "Characters", link: "/characters"},
    {name: "Weapons", link: "/weapons"},
];
const settings = ["Profile", "Logout"];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [authOpen, setAuthOpen] = React.useState(false);
    const [user, setUser] = React.useState({})
    const {register, handleSubmit} = useForm();

    // Снизу функция че то ломает меню
    // onAuthStateChanged(auth,(currentUser)=>{
    //     setUser(currentUser)
    // })

    const onSubmit = (data, toDo) => {
        if (toDo.target.name === "register") {
            registerUser(data)
        } else if (toDo.target.name === "login") {
            loginUser(data)
        }
    }

    const registerUser = async (data) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    };
    const loginUser = async (data) => {
        const user = await signInWithEmailAndPassword(auth, data.email, data.password)
        console.log(user)
    };

    const logoutUser = async () => {
        await signOut(auth)
    };

    const handleAuthModal = () => setAuthOpen(true);

    const handleCloseAuthModal = () => setAuthOpen(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuAction = (actionKey) => {
        if (actionKey === "Profile") {
            handleAuthModal()
        } else if(actionKey === "logout") {
            logoutUser()
        }
    }

    const StyledLink = styled(Link)`
      text-decoration: none;
      color: inherit;
    `;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <AppBar
            position="static"
            sx={{
                position: "absolute",
                zIndex: "100",
            }}
            color="transparent"
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "#fff",
                            textDecoration: "none",
                        }}
                    >
                        Teyvat DB
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "flex", md: "none"},
                            color: "#fff",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{
                                padding: 0,
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <StyledLink to={page.link}>{page.name}</StyledLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "#fff",
                            textDecoration: "none",
                        }}
                    >
                        TeyvatDB
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "rgb(133,146,172)",
                                    display: "block",
                                }}
                            >
                                <StyledLink to={page.link}>{page.name}</StyledLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                <Avatar alt="Remy Sharp" src={Icon}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleMenuAction(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            <Modal
                                open={authOpen}
                                onClose={handleCloseAuthModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <form style={{display: "flex", flexDirection: "column"}}>
                                        <Typography
                                            variant="h5"
                                            noWrap
                                            sx={{
                                                fontFamily: "monospace",
                                                fontWeight: 700,
                                                letterSpacing: ".3rem",
                                                color: "black",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Authorization
                                        </Typography>
                                        <input placeholder="Email" type="email" {...register("email", {
                                            required: true,
                                            maxLength: 20
                                        })} />
                                        <input placeholder="Password"
                                               type="password" {...register("password", {required: true,})} />
                                        <Box>
                                            <button name="login" onClick={handleSubmit(onSubmit)}>Login</button>
                                            <button name="register" onClick={handleSubmit(onSubmit)}>Register</button>
                                        </Box>
                                    </form>
                                </Box>
                            </Modal>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
