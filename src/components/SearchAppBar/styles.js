
import { styled, alpha } from '@mui/material/styles';
import BoxBase from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: 'white 0 2px 5px 0px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    opacity: 1,
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      opacity: 0.7,
      width: '20ch',
      '&:focus': {
        opacity: 1,
        width: '35ch',
      },
    },
  },
}));

export const Box = styled(BoxBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({isFocused}) => isFocused ? '1' : '0.7'};

  .search-app-bar__app-bar {
    border-radius: 15px 15px 0 0;
    background-color: royalblue;
  }
  .toolbarStyle {
    gap: 10px;
  }
`