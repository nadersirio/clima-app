import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button  from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import './App.css';

const ColorButton = styled(Button)(({ theme }) => ({
  boxShadow: 'white 0 2px 5px 0px',
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[600],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));

export const CustomizedButtons = () => {
  return (
    <Stack className="stackStyle" spacing={2}>
      <ColorButton variant="contained">Buscar</ColorButton>
    </Stack>
  );
}
