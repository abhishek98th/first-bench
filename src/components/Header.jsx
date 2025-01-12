import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsightsIcon from "@mui/icons-material/Insights";
import DescriptionIcon from "@mui/icons-material/Description";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuItems = [
    { icon: <HomeIcon />, label: "Dashboard" },
    { icon: <AutoAwesomeIcon />, label: "First Guru" },
    { icon: <GroupsIcon />, label: "Town Hall" },
    { icon: <BoltIcon />, label: "AI Evaluation" },
    { icon: <AssessmentIcon />, label: "Performance" },
    {
      icon: <DescriptionIcon />,
      label: "Mock Test",
      style: { color: "#4fd1c5" },
    },
  ];

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <Typography
        key={index}
        variant="body1"
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: isMobile ? "0" : "24px",
          marginBottom: isMobile ? "16px" : "0",
          ...item.style,
        }}
      >
        <IconButton color="inherit" sx={{ marginRight: "8px" }}>
          {item.icon}
        </IconButton>
        {item.label}
      </Typography>
    ));

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2d3748" }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQF6Sd-L_tBhkw/company-logo_200_200/company-logo_200_200/0/1728379830824/firstbench_ai_logo?e=1744848000&v=beta&t=XABuoggtqcVQV8OqoIfvJ9Zo8B5eSDp5we7hf5yVeZM"
            alt="Logo"
            style={{ marginRight: "8px" }}
            width={40}
          />
          <span style={{ fontWeight: "bold" }}>Firstbench</span>
        </Typography>

        {isMobile ? (
          <>
            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List sx={{ width: "250px", padding: "16px" }}>
                {menuItems.map((item, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
                <ListItem button>
                  <ListItemIcon>
                    <NotificationsNoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {/* Desktop Menu */}
            {renderMenuItems()}
            <IconButton color="inherit" sx={{ marginLeft: "24px" }}>
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={handleProfileMenuOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e2e8f0",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
              }}
            >
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#f56565",
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                P
              </Avatar>
            </IconButton>
          </>
        )}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
