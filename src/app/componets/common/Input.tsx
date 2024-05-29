"use client";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type Props = {
  className?: string;
  title?: string;
  backgroundColor?: string;
  borderRadius?: string;
  classLabel?: string;
  style?: React.CSSProperties | undefined;
};

const Input = ({
  className,
  title,
  backgroundColor = "#f8f5f3",
  borderRadius = "15px",
  classLabel,
  style,
}: Props) => {
  // Define a custom theme with the desired border color
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              width: "100%",
              "& fieldset": {
                width: "100%",
                backgroundColor,
                borderRadius,
                borderColor: "#F1D7EA !important", // Change this to the desired color
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <input
        type="text"
        id="xusername"
        style={{ display: "none" }}
        autoComplete="username"
      />
      <input
        type="password"
        id="xpassword"
        style={{ display: "none" }}
        autoComplete="current-password"
      />
      <TextField
        style={{ marginTop: "17px", width: "100%", ...style }}
        id="outlined-basic"
        label={
          <span
            className={`text-zinc-800 whitespace-nowrap text-[18px] font-medium ${classLabel}`}
          >
            {title}
          </span>
        }
        variant="outlined"
      />
    </ThemeProvider>
  );
};

export default Input;
