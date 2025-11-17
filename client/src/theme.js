import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF3008",  // DoorDash Red
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1D1D1F",
      secondary: "#6b6b6b",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
    h6: { fontWeight: 700, fontSize: "1.15rem" },
    body1: { fontSize: "0.95rem" },
    body2: { fontSize: "0.85rem" },
  },

  shape: {
    borderRadius: 12,
  },

  shadows: [
    "none",
    "0px 2px 6px rgba(0,0,0,0.04)",
    ...Array(23).fill("0px 4px 18px rgba(0,0,0,0.05)")
  ],

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
});

export default theme;
