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

const options2 = {
  label: "Вы гость?",
  menu: [
    {
      key: 0,
      label: "1",
      href: "",
    },
    {
      key: 1,
      label: "2",
      href: "",
    },
  ],
};

// options.menu.map

function MenuHeader(props) {
  const { options } = props;

  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorHeaderUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <MenuItem onClick={handleOpen}>
        <Typography textAlign="center">{options.label}</Typography>
      </MenuItem>
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
        {options.menu.map((x) => (
          <MenuItem key={x.key} onClick={handleClose}>
            <Typography textAlign="center">{x.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuHeader;
