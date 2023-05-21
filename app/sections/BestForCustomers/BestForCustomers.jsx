import { PortableText } from '@portabletext/react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Container,
  Typography,
  Stack,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Image from '../../components/image/Image';
import CountUp from '../../components/count-up/CountUp';
import StyledPortableText from '../../components/StyledPortableText';

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function BestForCustomers(props) {
  const {
    heading,
    description1,
    description2,
    eyebrow,
    sectionHeading,
    sectionDescription,
    stats,
    image,
    imageAltText,
  } = props;

  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography
        paragraph
        variant="overline"
        sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
      >
        {eyebrow}
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Typography variant="h2">{heading}</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
          <Stack
            spacing={{ xs: 3, md: 10 }}
            direction={{ xs: 'column', md: 'row' }}
          >
            <PortableText value={description1} />
            <PortableText value={description2} />
          </Stack>
        </Grid>
      </Grid>

      <Section
        sectionHeading={sectionHeading}
        sectionDescription={sectionDescription}
        stats={stats}
        image={image}
        imageAltText={imageAltText}
      />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section({
  sectionHeading,
  sectionDescription,
  stats,
  image,
  imageAltText,
}) {
  return (
    <StyledSection>
      <Stack
        sx={{
          py: 10,
          zIndex: 9,
          ml: 'auto',
          position: 'relative',
          px: { xs: 2.5, md: 10 },
          width: { md: 0.75, lg: 0.5 },
        }}
      >
        <Stack
          sx={{
            mb: 5,
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" paragraph>
            {sectionHeading}
          </Typography>
          <StyledPortableText
            value={sectionDescription}
            variant=""
            sx={{ opacity: 0.72 }}
          />
        </Stack>

        <Box
          sx={{
            gap: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {stats.map((value) => (
            <div key={value._key}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ color: 'primary.main' }}
              >
                <CountUp
                  start={value.stat / 5}
                  end={value.stat}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />

                <Typography
                  variant="h3"
                  component="span"
                  sx={{ verticalAlign: 'top', ml: 0.5 }}
                >
                  +
                </Typography>
              </Typography>

              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {value.title}
              </Typography>
            </div>
          ))}
        </Box>
      </Stack>

      <StyledOverlay />

      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          alt={imageAltText}
          src={image.asset.url}
          sx={{ width: 1, height: 1 }}
        />
      </Box>
    </StyledSection>
  );
}
