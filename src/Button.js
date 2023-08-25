import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button  from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import './App.css';

const ColorButton = styled(Button)(({ theme }) => ({
  boxShadow: 'white 0 2px 5px 0px',
  color: theme.palette.getContrastText(green[100]),
  backgroundColor: green[300],
  '&:hover': {
    backgroundColor: green[600],
  },
}));

export const CustomizedButtons = ({valueInput, msg, setMsg, setHideModal}) => {
  const checkValueInput = () => {
    return valueInput !== '' && !msg ? setMsg(true) : setMsg(false) & setHideModal(false);
  }

  return (
    <Stack className="stackStyle" spacing={2}>
      <ColorButton onClick={checkValueInput} variant="contained">Buscar</ColorButton>
    </Stack>
  );
}
