import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { Badge, Box, Menu, MenuItem } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout } from "@/features/admin/login";

// import { logout } from "@/store/slices/adminSlice";
import { appDispatch, appSelector } from "@/store/hooks";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type HeaderProps = {
  open: boolean;
  onDrawerOpen: () => void;
};

export default function Header({ open, onDrawerOpen }: HeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const handleClose = () => {
    setShowProfileMenu(false);
  };
  const dispatch = appDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const divRef = React.useRef(null);
  React.useEffect(() => {
    setAnchorEl(divRef.current);
  }, [divRef]);
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        {/* <Typography variant="h6" noWrap component="div" fontWeight="400">
          CMStock Workshop with ReactJS - Typescript (TS) V.
          {process.env.NEXT_PUBLIC_APP_VERSION}
        </Typography> */}

        <Box sx={{ flexGrow: 1 }} />

        {/* <Typography variant="h6" noWrap component="div" fontWeight="300">
          Updated 2022
        </Typography> */}

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            ref={divRef}
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <AccountCircle />
          </IconButton>

          <Menu
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
            open={showProfileMenu}
            onClose={handleClose}
          >
            <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
            {/* <MenuItem onClick={() => handleClose()}>My account</MenuItem> */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
