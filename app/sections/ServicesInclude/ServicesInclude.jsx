// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from '../../components/svg-color/SvgColor';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function ServicesInclude(props) {
  const { heading, description, cards } = props;

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">{heading}</Typography>

      <StyledPortableText
        value={description}
        variant=""
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      />

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {cards.map((service) => (
          <div key={service.title}>
            <SvgColor
              src={service.image.asset.url}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {service.title}
            </Typography>

            <StyledPortableText
              value={service.description}
              variant=""
              sx={{ color: 'text.secondary' }}
            />
          </div>
        ))}
      </Box>
    </Container>
  );
}
