import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import qrcode from "../assets/img/qrcode.png";

export default function Contribua() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" sx={{ color: "#b1cdf1" }} onClick={handleClick}>
        Contribuir 

      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{horizontal:"center", vertical:"center"}}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        
        <div></div>
      </Menu>
    </div>
  );
}
