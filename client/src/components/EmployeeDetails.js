import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Stack,
  Divider,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";

export default function EmployeeDetails({ employee, setToast }) {
  const [tab, setTab] = useState(0);

  if (!employee) {
    return (
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Select an employee</Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Search or click an employee on the left to view profile, payroll, and HR actions.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary">Start a quick search</Button>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <CardContent sx={{ borderBottom: "1px solid #f1f1f1", display: "flex", gap: 3, alignItems: "center" }}>
        <Avatar sx={{ bgcolor: "#FF3008", width: 72, height: 72, fontSize: 24 }}>
          {employee.name.split(" ").map(n=>n[0]).slice(0,2).join("")}
        </Avatar>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{employee.name}</Typography>
          <Typography color="text.secondary">{employee.title} • {employee.department}</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Chip label="Full-time" size="small" />
            <Chip label="Active" color="success" size="small" />
          </Stack>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">Message</Button>
          <Button variant="contained"
            onClick={() => setToast({ open: true, msg: "HR ticket created!", severity: "success" })} >
            Create Ticket
            </Button>

        </Stack>
      </CardContent>

      {/* Tabs + content */}
      <Tabs value={tab} onChange={(e, v)=>setTab(v)} sx={{ px: 2 }}>
        <Tab label="Profile" />
        <Tab label="Payroll" />
        <Tab label="Notes" />
      </Tabs>
      <Divider />

      <Box sx={{ p: 3, overflowY: "auto", flexGrow: 1 }}>
        {tab === 0 && (
          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>Contact</Typography>
            <Typography><strong>Email:</strong> {employee.email}</Typography>
            <Typography sx={{ mt: 1 }}><strong>Department:</strong> {employee.department}</Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>Employment</Typography>
              <Typography>Start date: 2022-05-03</Typography>
              <Typography>Manager: Jane Doe</Typography>
            </Box>
          </Box>
        )}

        {tab === 1 && (
          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>Payroll</Typography>
            <Typography>Salary: $XXX,XXX</Typography>
            <Typography>Pay frequency: Bi-weekly</Typography>
          </Box>
        )}

        {tab === 2 && (
          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>Notes & Activity</Typography>
            <Typography>- PTO request approved on 2025-10-01</Typography>
            <Typography>- Benefits enrollment completed</Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
}
