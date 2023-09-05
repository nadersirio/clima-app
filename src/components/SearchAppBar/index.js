import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { CustomizedButtons } from "../Button";
import '../../index.css';

import * as S from './styles';

function SearchAppBar({
  inputFocused,
  setInputFocused,
  valueInput,
  setInput,
  msg,
  setMsg,
  disabled,
  setDisabled,
  setError,
}) {
  return (
    <S.Box isFocused={!inputFocused}>
      <AppBar className='search-app-bar__app-bar' position='static'>
        <Toolbar>
          <S.Search>
            <S.SearchIconWrapper>
              <SearchIcon />
            </S.SearchIconWrapper>
            <S.StyledInputBase
              placeholder="Insira sua cidade"
              value={valueInput}
              onChange={event => setInput(event.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              disabled={disabled}
            />
          </S.Search>
          <CustomizedButtons
            valueInput={valueInput}
            msg={msg}
            setMsg={setMsg}
            setHideModal={setDisabled}
            setError={setError}
          />
        </Toolbar>
      </AppBar>
    </S.Box>
  );
}

export default SearchAppBar