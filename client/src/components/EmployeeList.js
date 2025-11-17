import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box
} from "@mui/material";
import { API_URL } from "../config";


export default function EmployeeList({ onSelect, selectedId }) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/employees`)
      .then(res => res.json())
      .then(data => setEmployees(data || []));
  }, []);

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 2 }}>
      <CardContent sx={{ flexShrink: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>Employees</Typography>

        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name or department"
          size="small"
          fullWidth
          sx={{ mt: 2 }}
        />
      </CardContent>

      <Box sx={{ flexGrow: 1, overflowY: "auto", px: 1 }}>
        <List disablePadding>
          {filtered.map(emp => {
            const active = selectedId === emp.id;
            return (
              <ListItemButton
                key={emp.id}
                onClick={() => onSelect(emp)}
                selected={active}
                sx={{
                  borderLeft: active ? "4px solid rgba(255,48,8,0.95)" : "4px solid transparent",
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#FF3008" }}>
                    {emp.name.split(" ").map(n=>n[0]).slice(0,2).join("")}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={<Typography sx={{ fontWeight: 600 }}>{emp.name}</Typography>}
                  secondary={<Typography sx={{ color: "#6b6b6b", fontSize: 13 }}>{emp.department}</Typography>}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Card>
  );
}
