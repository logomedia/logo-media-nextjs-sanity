// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Container,
  InputBase,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// components
import StyledPortableText from '../../components/StyledPortableText';

// ----------------------------------------------------------------------
let bgImg;

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 95%`,
    imgUrl: bgImg,
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ServicesHero(props) {
  const { heading, description, image, imageAltText } = props;

  bgImg = image.asset.url;

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 480,
                textAlign: 'center',
                color: 'common.white',
              }}
            >
              <Typography variant="h1">{heading}</Typography>

              <StyledPortableText
                value={description}
                variant=""
                sx={{ opacity: 0.72 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
