import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import "./style.css";

const UpdateYearsMonth = () => {
  const [month, setMonth] = useState("6 september");
  const [year, setYear] = useState("2002");
  const [textInput, setTextInput] = useState("");
  const [textInputYear, setTextInputYear] = useState("");

  const updateMonth = (e) => {
    setMonth(textInput);
  };
  const updateYears = () => {
    setYear(textInputYear);
  };
  const updateBoth = () => {
    setYear(textInputYear);
    setMonth(textInput);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleTextInputChangeYear = (e) => {
    setTextInputYear(e.target.value);
  };
  return (
    <div className="Wrapper">
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      > 
        <TextField
          id="outlined-basic"
          label="Enter Month"
          variant="outlined"
          value={textInput}
          onChange={handleTextInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Enter Years"
          variant="outlined"
          required={true}
          value={textInputYear}
          onChange={handleTextInputChangeYear}
        />
        </Box>
      <Stack direction="row" spacing={2} alignItems={"center"}  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
      }}>
        <Button variant="contained" color="success" onClick={updateMonth}>
          Update Month
        </Button>

        <Button variant="contained" color="success" onClick={updateYears}>
          Update year
        </Button>

        <Button variant="contained" color="success" onClick={updateBoth}>
          Update both
        </Button>
      </Stack>

      <div>
        <h1>The month is : {month}</h1>
        <h1>The Year is : {year}</h1>
      </div>
    </div>
  );
};

export default UpdateYearsMonth;
