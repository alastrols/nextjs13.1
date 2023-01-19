import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Collapse, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { Layers, BarChart, Person } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookIcon from "@mui/icons-material/Book";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import Image from "next/image";
import { useSelector } from "react-redux";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type MenuProps = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProps) {
  const theme = useTheme();
  const router = useRouter();
  const userSelector = useSelector((store: any) => store.admin);
  const [userOpen, setUserOpen] = React.useState<boolean>(false);
  const [newsOpen, setNewsOpen] = React.useState<boolean>(false);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">
          <Image
            width={200}
            height={68}
            unoptimized={true}
            alt="logo"
            src={"/static/images/logo.png"}
          />
          <IconButton onClick={onDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />

      <List>
        <Link
          href="/admin/user"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setUserOpen(!userOpen)}
            className={
              router.pathname === "/admin/user"
                ? "Mui-selected"
                : router.pathname === "/admin/user/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/user/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="#"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            onClick={() => setNewsOpen(!newsOpen)}
            className={
              router.pathname === "/admin/news/jp"
                ? "Mui-selected"
                : router.pathname === "/admin/news/jp/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/news/jp/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>

          <Collapse
            key={0}
            in={
              router.pathname === "/admin/news/jp"
                ? true
                : router.pathname === "/admin/news/jp/edit"
                ? true
                : router.pathname === "/admin/news/jp/add"
                ? true
                : newsOpen
            }
            timeout="auto"
            unmountOnExit
          >
            <List
              component="li"
              disablePadding
              key={0}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/news/jp"
                style={{
                  textDecoration:
                    router.pathname == "/admin/news/jp"
                      ? ""
                      : router.pathname == "/admin/news/jp/add"
                      ? ""
                      : router.pathname == "/admin/news/jp/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={0}>
                  <ListItemIcon>
                    <NewspaperIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText key={0} primary="JP" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </Link>
      </List>
    </Drawer>
  );
}
