import { styled } from '@mui/material/styles';
import Button  from '@mui/material/Button';
import { blue } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  boxShadow: 'white 0 2px 5px 0px',
  margin: '0 0 0 10px',
  color: theme.palette.getContrastText(blue[100]),
  backgroundColor: blue[600],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));