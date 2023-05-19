// next
import NextLink from 'next/link';
// @mui
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// import { paths } from 'src/routes/paths';
// components
import Image from '../../components/image/Image';
import Iconify from '../../components/iconify/Iconify';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';
import Cta from '../../components/CTA/CTA';

// ----------------------------------------------------------------------

export default function ServicesOfflineSeo(props) {
  const { heading, description, list, image, imageAltText, ctas } = props;

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={5}>
          <Image alt={imageAltText} src={image.asset.url} />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">{heading}</Typography>

            <StyledPortableText
              value={description}
              variant=""
              sx={{ color: 'text.secondary' }}
            />

            <Stack spacing={2}>
              {list.map((item) => (
                <Stack key={item} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {item}
                </Stack>
              ))}
            </Stack>
          </Stack>

          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
