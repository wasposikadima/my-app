import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createSvgIcon } from "@mui/material/utils";
import MenuHeader from "./menu-header";
import menu from "@/constants/menu";

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);

const settings = ["О нас", "Контакты", "Домашние группы"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorHeaderUser, setAnchorHeaderUser] = React.useState(null);

  const [menuUI, setMenuUI] = React.useState([{id: 0, name: 'name0'}, {id: 1, name: 'name1'}]);

  useEffect(() => {
    // setMenuUI(menu);
  });

  const xxx = menu.map((x) =>
    <MenuHeader key={x.key} label={x.label} options={x.options} />
  )

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenHeaderMenu = (event) => {
    setAnchorHeaderUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseHeaderMenu = () => {
    setAnchorHeaderUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            href="/"
            sx={{
              color: "white",
            }}
          >
            <HomeIcon />
          </IconButton>

          {xxx}

          {/* {menuUI.map(m => {
              <MenuHeader key={m.key} label={m.label} options={m.options} />
            })} */}

          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton
              href="/"
              sx={{
                color: "white",
              }}
            >
              <HomeIcon />
            </IconButton>
            {menu.map(m => {
              <MenuHeader key={m.key} label={m.label} options={m.options} />
            })}
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
