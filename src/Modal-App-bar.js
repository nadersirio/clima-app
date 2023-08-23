import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CustomizedButtons } from "./Button";
import './App.css';


const Search = styled('div')(({ theme }) => ({
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
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export function SearchAppBar({
  inputFocused,
  setInputFocused,
  msg,
  setMsg,
}) {

  return (
    <Box className={!inputFocused ? 'box-ofoscused' : 'box-focused'}>
      <AppBar sx={{backgroundColor: 'green'}} className='appBar-style' position='static'>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Insira sua cidade"
              inputProps={{ 'aria-label': 'search' }}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </Search>
          <CustomizedButtons msg={msg} setMsg={setMsg}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
