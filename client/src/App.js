import { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import ChatWidget from "./components/ChatWidget";
import HeaderBar from "./components/HeaderBar";
import { Snackbar, Alert } from "@mui/material";


function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [toast, setToast] = useState({ open: false, msg: "", severity: "success" });

  return (
    <>
      <HeaderBar/>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>

            <Grid item xs={12} md={2}>
            <Box sx={{ height: "75vh" }}>
                <EmployeeList onSelect={setSelectedEmployee} />
            </Box>
            </Grid>

            <Grid item xs={12} md={10}>
            <Box sx={{ height: "75vh" }}>
                <EmployeeDetails
                    employee={selectedEmployee}
                    setToast={setToast}
                    />
            </Box>
            </Grid>

        </Grid>
        </Container>

      <ChatWidget />
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
        <Alert
            severity={toast.severity}
            variant="filled"
            onClose={() => setToast({ ...toast, open: false })}
            sx={{ fontSize: 16 }}
        >
            {toast.msg}
        </Alert>
        </Snackbar>

    </>
  );
}

export default App;
