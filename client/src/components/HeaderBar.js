import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoorDashLogo from "./DoorDashLogo";

export default function HeaderBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [teamAnchor, setTeamAnchor] = useState(null);

  const open = Boolean(anchorEl);
  const openTeam = Boolean(teamAnchor);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      sx={{
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE: Logo + HR Portal + Team Switcher */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexGrow: 1,       // << pushes search & avatar to the right
          }}
        >
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DoorDashLogo width={38} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              HR Portal
            </Typography>
          </Box>

          {/* Team Switcher */}
          <Box>
            <Box
              onClick={(e) => setTeamAnchor(e.currentTarget)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                p: "6px 10px",
                borderRadius: 1.5,
                cursor: "pointer",
                "&:hover": { background: "#f5f5f5" },
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>People Ops</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>

            <Menu
              anchorEl={teamAnchor}
              open={openTeam}
              onClose={() => setTeamAnchor(null)}
            >
              <MenuItem>People Ops</MenuItem>
              <MenuItem>Recruiting</MenuItem>
              <MenuItem>Compensation</MenuItem>
              <MenuItem>IT Support</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* RIGHT SIDE: Search + Avatar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Search Bar */}
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search employees, teams, policies…"
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          {/* Avatar Menu */}
          <Box>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  background: "#FF3008",
                  fontWeight: 600,
                }}
              >
                M
              </Avatar>
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
