import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Avatar } from '@mui/material';
// component
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, ...other }) {
  const { name, position, image, testimonialDescription } = testimonial;

  return (
    <Stack
      spacing={{
        xs: 5,
        md: 10,
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      {...other}
    >
      <StyledPortableText
        value={testimonialDescription}
        variant=""
        sx={{
          fontSize: { md: 20 },
          lineHeight: 1.75,
          textAlign: { xs: 'center', md: 'left' },
        }}
      />

      <Stack sx={{ flexShrink: 0, textAlign: 'center' }}>
        <Avatar
          alt={name}
          src={image.asset.url}
          sx={{ width: 96, height: 96, mx: 'auto' }}
        />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {position}
        </Typography>
      </Stack>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  testimonial: PropTypes.object,
};
