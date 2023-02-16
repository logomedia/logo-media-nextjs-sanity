// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image, BgOverlay } from '../..';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(20, 0),
}));

// ----------------------------------------------------------------------

type Props = {
  post: BlogPostProps;
};

export default function BlogPostHero({ post }: Props) {
  const { title, length, date, coverImage } = post;

  return (
    <RootStyle>
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {length + ' minutes read'}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(date, 'MM/dd/yyyy p')}
              </Typography>

            </Stack>
          </Grid>
        </Grid>
      </Container>

      <BgOverlay />

      <Image
        alt="hero"
        src={coverImage.asset.url}
        sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1 }}
      />
    </RootStyle>
  );
}
