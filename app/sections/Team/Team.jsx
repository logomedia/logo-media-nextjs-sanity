'use client';

import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Stack,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useBoundingClientRect from '../../../hooks/useBoundingClientRect';
// components
import Carousel, {
  CarouselArrows,
  CarouselDots,
} from '../../components/Carousel';

import TeamMember from './TeamMember';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(10, 0),
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: theme.spacing(20, 0),
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    marginBottom: 0,
    position: 'absolute',
    height: 'calc(100% - 320px)',
  },
}));

// ----------------------------------------------------------------------

export default function Team(props) {
  const { heading, description, eyebrow, cards } = props;

  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
        display: { md: 'none' },
      },
    }),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <StyledRoot>
      <StyledContainer>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack
              spacing={3}
              sx={{ textAlign: { xs: 'center', md: 'unset' } }}
            >
              <Typography variant="overline" sx={{ color: 'grey.600' }}>
                {eyebrow}
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                {heading}
              </Typography>

              <StyledPortableText
                value={description}
                variant=""
                sx={{ color: 'common.white' }}
              />
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>

        {isMdUp && (
          <CarouselArrows
            spacing={2}
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
            rightButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
            sx={{ position: 'absolute', bottom: 0 }}
          />
        )}
      </StyledContainer>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        {/* <Slider ref={carouselRef} {...carouselSettings}>
          {cards.map((member) => (
            <Box
              key={member._key}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <TeamMember member={member} />
            </Box>
          ))}
        </Slider> */}

        <Carousel ref={carouselRef} {...carouselSettings}>
          {cards.map((member) => (
            <Box
              key={member._key}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <TeamMember member={member} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </StyledRoot>
  );
}

Team.propTypes = {
  members: PropTypes.array,
};
