import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import UserInfo from "./UserInfo";
import UserOtherAc from "./UserOtherAc";
import userImage2 from '../../../images/user2.png';
import userImage3 from '../../../images/user3.png';
import userImage4 from '../../../images/user4.png';



const useStyles = makeStyles((theme) => ({
  headerMenu: {
    marginTop: theme.spacing(7),

  },
  menuBody: {
    width: 300,
    background: theme.palette.background.default,
    padding: theme.spacing(3.9),
  },
  list: {

  },

  iconButton: {
    border: "1px solid " + theme.palette.iconBorderColor.main,
    marginLeft: theme.spacing(2),
  },
}));

export default function UserProfileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="primary"
        className={classes.iconButton}
        size="medium"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        className={classes.headerMenu}
        classes={{ paper: classes.menuBody, list: classes.list }}
      >
        <UserInfo />
        <UserOtherAc userAvtarImage={userImage2} userName='Vijay kumar' email="vk.gwebs@gmail.com" />
        <UserOtherAc userAvtarImage={userImage3} userName='Amreek saini' email="amreeksaini67@gmail.com" />
        <UserOtherAc userAvtarImage={userImage4} userName='Hakam' email="hakam.gwebs@gmail.com" />

      </Menu>

    </>
  );
}
