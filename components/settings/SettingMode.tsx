// icons
import asleepIcon from '@iconify/icons-carbon/asleep';
import asleepFilled from '@iconify/icons-carbon/asleep-filled';
import { ToggleButton, Typography } from '@mui/material';
// @mui
import { styled } from '@mui/material/styles';

// hooks
import { useSettings } from '../../hooks';
//
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(ToggleButton)(({ theme }) => ({
  border: 0,
  padding:'5px',
  '& svg': {
    width: 28,
    height: 28,
    transition: theme.transitions.create('all'),
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
  },
}));

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onToggleMode } = useSettings();

  const isLight = themeMode === 'light';

  return (
    <RootStyle value="check" selected={!isLight} onChange={onToggleMode}>
      <Iconify icon={isLight ? asleepIcon : asleepFilled} />
    </RootStyle>
  );
}
