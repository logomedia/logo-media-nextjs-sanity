import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import {
  Stack,
  Container,
  Typography,
  Card,
  Box,
  IconButton,
} from '@mui/material';

// components
import Iconify from '../../components/iconify/Iconify';
import SvgColor from '../../components/svg-color/SvgColor';
import TextMaxLine from '../../components/text-max-line';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function OurServices(props) {
  const { eyebrow, heading, description, cards } = props;

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
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {cards.map((card, index) => (
          <ServiceItem key={card._key} service={card} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { heading, description, ctas, image, color, icons } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={image.asset.url}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[color].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{heading}</TextMaxLine>

        <StyledPortableText
          value={description}
          variant="body2"
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <IconButton component={NextLink} href={'catsPathToBeAdded'} color={color}>
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    content: PropTypes.string,
    icon: PropTypes.node,
    name: PropTypes.string,
    path: PropTypes.string,
  }),
};
