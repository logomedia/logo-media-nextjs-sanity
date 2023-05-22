// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Container,
  Typography,
  Button,
  Fab,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Image from '../../components/image/Image';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';
import Cta from '../../components/CTA/CTA';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function HeroLanding(props) {
  const {
    ctas,
    description,
    eyebrow,
    heading,
    image,
    icons,
    heroImageAltText,
  } = props;

  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              {eyebrow}
            </Typography>

            <Typography variant="h1" sx={{ my: 3 }}>
              {heading}
            </Typography>

            {/* <Typography sx={{ color: 'text.secondary' }}>
              {description}
            </Typography> */}

            <StyledPortableText
              value={description}
              variant=""
              sx={{ color: 'text.secondary' }}
            />

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}

              {/* <Button variant="contained" color="inherit" size="large">
                Try For Free
              </Button> */}
              {/* <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: 'h6' }}
              >
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Our Work
              </Stack> */}
            </Stack>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt={heroImageAltText}
                src={image.asset.url}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
