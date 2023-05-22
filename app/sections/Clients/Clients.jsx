// @mui
import PropTypes from 'prop-types';
import { Typography, Stack, Container, Box } from '@mui/material';
// components
import Image from '../../components/image/Image';

// ----------------------------------------------------------------------

export default function Clients(props) {
  const { heading, logos } = props;

  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2">{heading}</Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ maxWidth: 680, overflow: 'hidden' }}
        >
          {logos.slice(0, 8).map((logo) => (
            <Box key={logo._key}>
              <Image
                alt={logo.asset.originalFilename}
                src={logo.asset.url}
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

Clients.propTypes = {
  logos: PropTypes.array,
};
