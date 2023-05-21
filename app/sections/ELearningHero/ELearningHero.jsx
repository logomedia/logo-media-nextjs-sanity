'use client';

import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Fab,
  Typography,
  Stack,
  Container,
  Box,
  Divider,
  Button,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
import { fShortenNumber } from '../../../utils/formatNumber';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import ElearningHeroIllustration from './ElearningHeroIllustration';
import Cta from '../../components/CTA';
import StyledPortableText from '../../components/StyledPortableText';
// import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function ELearningHero(props) {
  const {
    headingStart,
    headingHighlight,
    headingMainHighlight,
    headingEnd,
    description,
    ctas,
    imagesArray,
    image,
    imageAltText,
    stats,
  } = props;

  const isMdUp = useResponsive('up', 'md');

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <StyledRoot>
        <Container
          sx={{
            py: 15,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                }}
              >
                <Typography variant="h1">
                  {headingStart}
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    {' '}
                    {headingHighlight}{' '}
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: 'primary.main', textDecoration: 'underline' }}
                  >
                    {' '}
                    {headingMainHighlight}{' '}
                  </Box>
                  {headingEnd}
                </Typography>

                <StyledPortableText
                  value={description}
                  variant=""
                  sx={{ color: 'text.secondary', mt: 3, mb: 5 }}
                />

                <Stack
                  spacing={3}
                  alignItems="center"
                  direction={{ xs: 'column', md: 'row' }}
                >
                  {ctas.map((cta) => (
                    <Cta {...cta} key={cta._key} />
                  ))}
                  {/* <Button color="inherit" size="large" variant="contained">
                    Ready Start
                  </Button>

                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ typography: 'h6' }}
                  >
                    <Fab
                      size="medium"
                      color="info"
                      onClick={handleOpenVideo}
                      sx={{ mr: 1 }}
                    >
                      <Iconify width={24} icon="carbon:play" />
                    </Fab>
                    Watch Video
                  </Stack> */}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                {/* Stats */}
                <Stack
                  direction="row"
                  spacing={{ xs: 3, sm: 10 }}
                  justifyContent={{ xs: 'center', md: 'unset' }}
                >
                  {stats.map((stat) => (
                    <Stack
                      key={stat._key}
                      spacing={0.5}
                      sx={{ position: 'relative' }}
                    >
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: stat.color,
                        }}
                      />
                      <Typography variant="h3">
                        {fShortenNumber(stat.number)}+
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                      >
                        {stat.heading}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {isMdUp && (
              <Grid xs={12} md={6} lg={7}>
                <ElearningHeroIllustration
                  imagesArray={imagesArray}
                  image={image}
                  imageAltText={imageAltText}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </StyledRoot>

      {/* <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath={_mock.video(0)}
      /> */}
    </>
  );
}
