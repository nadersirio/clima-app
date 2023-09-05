import { useState } from 'react';
import Stack from '@mui/material/Stack';
import '../../index.css';
import * as S from './styles';

export const CustomizedButtons = ({valueInput, msg, setMsg, setHideModal, setError}) => {
  const [changeButton, setChange] = useState(false)
  const checkValueInput = () => {
    if(valueInput !== '' && !msg) return setMsg(true) & setChange(true);
    return setMsg(false) & setHideModal(false) & setChange(false) & setError(null);
  }

  return (
    <Stack className="stackStyle" spacing={2}>
      <S.ColorButton onClick={checkValueInput} variant="contained">{changeButton ? 'Resetar' : 'Buscar'}</S.ColorButton>
    </Stack>
  );
}
