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
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { LoginModal } from "./LoginModal";

const pages = [
  { name: "Characters", link: "/characters" },
  { name: "Weapons", link: "/weapons" },
];
const settings = ["Profile", "Logout"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [authOpen, setAuthOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  const logoutUser = async () => {
    await signOut(auth);
  };

  const handleOpenAuthModal = () => setAuthOpen(true);

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
      // handleOpenAuthModal();
      navigate("profile", { replace: true });
    } else if (actionKey === "logout") {
      logoutUser();
    }
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;

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
              display: { xs: "none", md: "flex" },
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
              display: { xs: "flex", md: "none" },
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
              <MenuIcon />
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
                display: { xs: "block", md: "none" },
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
              display: { xs: "flex", md: "none" },
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
              display: { xs: "none", md: "flex" },
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

          {/* если не авторизован то будет это кнопка */}

          <Box sx={{}}>
            <Button
              onClick={() => handleOpenAuthModal()}
              sx={{
                my: 2,
                color: "rgb(133,146,172)",
                display: "block",
              }}
            >
              Log In
            </Button>
          </Box>

          {/* если авторизован то иконка */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Paimon" src={Icon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuAction(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <LoginModal open={authOpen} onClose={handleCloseAuthModal} />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
