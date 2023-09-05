import { styled } from '@mui/material/styles';
import Button  from '@mui/material/Button';
import { green } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  boxShadow: 'white 0 2px 5px 0px',
  color: theme.palette.getContrastText(green[100]),
  backgroundColor: green[300],
  '&:hover': {
    backgroundColor: green[600],
  },
}));