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
import MenuList from "@mui/material/MenuList";
import Link from "next/link";

function MenuHeader(props) {
  const [anchorNav, setAnchorNav] = React.useState(null);

  function handleClick(href) {
    navigate(href);
    handleClose();
  }

  useEffect(() => {
    console.log(props);
  });

  const handleOpen = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNav(null);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          {props.label}
        </Typography>
      </Button>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorNav)}
        onClose={handleClose}
      >
        <MenuList>
          {props?.options?.map((x) => (
            <MenuItem>
              <Link href={x.href} style={{ textDecoration: 'none', color: 'black' }}>
                <Typography textAlign="center">{x.label}</Typography>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuHeader;
