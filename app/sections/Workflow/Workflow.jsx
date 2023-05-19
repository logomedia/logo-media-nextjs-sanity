import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// components
import SvgColor from '../../components/svg-color/SvgColor';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function Workflow(props) {
  const { heading, description, eyebrow, cards } = props;

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {eyebrow}
        </Typography>

        <Typography variant="h2">{heading}</Typography>

        <StyledPortableText
          value={description}
          variant=""
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'flex-end',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {cards.map((service, index) => (
          <ServiceItem key={service._key} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { title, image, color } = service;

  return (
    <Card
      sx={{
        p: 2,
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].light,
        boxShadow: (theme) =>
          `-8px 12px 32px 0px ${alpha(theme.palette[color].main, 0.2)}`,
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      <SvgColor
        src={image.asset.url}
        sx={{ width: 64, height: 64, opacity: 0.48 }}
      />

      <Typography variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {title}
      </Typography>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
  }),
};
