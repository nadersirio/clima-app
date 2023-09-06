import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import DescriptionIcon from '@mui/icons-material/Description';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import * as S from './styles';

export const LiRender = ({ climaData }) => {
  return (
    <>
      <h1>Informações da cidade</h1>
      <S.UlChildrenTextCard>
        <li>
          <h2>
            <LocationCityIcon />
            {climaData.city}
          </h2>
        </li>
        <li>
          <S.PChildrenTextCard>
            <DeviceThermostatIcon />
            Temperatura: {parseFloat(climaData.weather).toFixed()}°C
          </S.PChildrenTextCard>
        </li>
        <li>
          <S.PChildrenTextCard>
            <AcUnitIcon />
            Sensação Térmica: {parseFloat(climaData.temperature).toFixed()}°C
          </S.PChildrenTextCard>
        </li>
        <li>
          <S.PChildrenTextCard>
            <AirIcon />
            Ventos: {climaData.wind} Km/h
          </S.PChildrenTextCard>
        </li>
        <li>
          <S.PChildrenTextCard>
            <DescriptionIcon />
            Descrição: {climaData.description}.
          </S.PChildrenTextCard>
        </li>
      </S.UlChildrenTextCard>
    </>
  )
}