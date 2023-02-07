import { memo } from 'react';
// next
import NextLink from 'next/link';
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
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',

        }}
      >
       <SVG src={logo.asset.url}/>
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
