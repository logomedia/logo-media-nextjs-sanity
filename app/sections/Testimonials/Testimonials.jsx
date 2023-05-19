import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  Container,
  Stack,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
import Carousel, {
  CarouselDots,
  CarouselArrows,
} from '../../components/Carousel';
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

Testimonials.propTypes = {
  testimonials: PropTypes.array,
};

export default function Testimonials(props) {
  const { heading, eyebrow, addTestimonial } = props;

  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {eyebrow}
          </Typography>

          <Typography variant="h2">{heading}</Typography>
        </Stack>

        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
          rightButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carouselRef} {...carouselSettings}>
                {addTestimonial.map((testimonial) => (
                  <TestimonialItem
                    key={testimonial._key}
                    testimonial={testimonial}
                  />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}
