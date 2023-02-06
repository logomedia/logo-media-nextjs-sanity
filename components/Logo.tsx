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


  const renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url}  />
    }

    return <Image src={logo.asset.url}   />
  }

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
       {renderLogo(logo)}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
