// @mui
import {
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Image from '../../components/image/Image';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';
import Cta from '../../components/CTA/CTA';

// ----------------------------------------------------------------------

export default function WhoWeAre(props) {
  const { description, eyebrow, heading, image, imageAltText, cards, ctas } =
    props;

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt={imageAltText}
        src={image.asset.url}
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography
            component="div"
            variant="overline"
            sx={{ color: 'text.disabled' }}
          >
            {eyebrow}
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            {heading}
          </Typography>

          <StyledPortableText
            value={description}
            variant=""
            sx={{ color: 'text.secondary' }}
          />

          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button> */}
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {cards.map((card) => (
              <Stack
                key={card._key}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">
                      {fShortenNumber(card.stat)}
                    </Typography>
                    <Box
                      component="span"
                      sx={{ color: 'primary.main', typography: 'h4' }}
                    >
                      +
                    </Box>
                  </Stack>

                  <Typography
                    variant="overline"
                    sx={{ color: 'text.disabled' }}
                  >
                    {card.title}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
