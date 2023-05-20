'use client';

import { useState } from 'react';
import { PortableText } from '@portabletext/react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Fab } from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// components
import Image from '../../components/image/Image';
import Iconify from '../../components/iconify/Iconify';
import { PlayerDialog } from '../../components/player';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function OurVision(props) {
  const { heading, description, image, videoUrl, icons } = props;

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ position: 'relative' }}
      >
        <StyledTypography
          variant="h2"
          sx={{
            mb: 5,
            top: { md: 80 },
          }}
        >
          {heading}
        </StyledTypography>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'relative',
            width: 1,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Fab
            onClick={handleOpenVideo}
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <StyledOverlay />

          <Image alt={heading} src={image.asset.url} ratio="16/9" />
        </Stack>

        <StyledTypography
          variant="h5"
          sx={{
            mt: 5,
            bottom: { md: 80 },
            opacity: { md: 0.72 },
          }}
        >
          <PortableText value={description} />
        </StyledTypography>
      </Stack>

      <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath={videoUrl}
      />
    </Container>
  );
}
