import { memo } from 'react';
// next
import Link from 'next/link';
// @mui
import { Box, BoxProps } from '@mui/material';
import SVG from 'react-inlinesvg'
import { useSettingsState } from 'context/settings';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean;
  isSimple?: boolean;
}

function Logo() {
  const { logo } = useSettingsState().settings


  

  return (
    <Link href="/" >
      <SVG style={{ height: '40px' }} src={logo.asset.url}/>
    </Link>
  );
}

export default Logo;
