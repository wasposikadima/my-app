import * as React from "react";
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

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);

// const pages = ["Главная", "Вы гость?", "Слово", "События", "Жизнь церкви"];

// Переместить меню в отдельный файл и импортировать.
const menu = [
  {
    key: 0,
    label: "Главная1",
    menu: [
      {
        key: 0,
        label: "1",
      },
    ],
  },
  {
    key: 1,
    label: "Вы гость?",
    menu: [
      {
        key: 0,
        label: "1",
      },
      {
        key: 1,
        label: "2",
      },
    ],
  },
  {
    key: 2,
    label: "Слово",
    menu: [
      {
        key: 0,
        label: "1",
      },
    ],
  },
  {
    key: 3,
    label: "События",
    menu: [
      {
        key: 0,
        label: "1",
      },
    ],
  },
  {
    key: 4,
    label: "Жизнь церкви",
    menu: [
      {
        key: 0,
        label: "1",
      },
    ],
  },
];
const settings = ["О нас", "Контакты", "Домашние группы"];
const guest = ["С чего начать?", "Контакты", "О церкви"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorHeaderUser, setAnchorHeaderUser] = React.useState(null);

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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="lange"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>

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
              {menu.map((page) => (
                <Button
                  key={page.key}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
              {guest.map((guests) => (
                <MenuItem key={guests} onClick={handleOpenUserMenu}>
                  <Typography textAlign="center">{guests}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menu.map((page) => (
              <div key={page.key}>
                <MenuItem onClick={handleOpenHeaderMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorHeaderUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorHeaderUser)}
                  onClose={handleCloseHeaderMenu}
                >
                  {page.menu.map((setting) => (
                    <MenuItem key={setting.key} onClick={handleCloseHeaderMenu}>
                      <Typography textAlign="center">{setting.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </Box>

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
