'use client';

import { Stack, Typography } from '@mui/material';

const LoadingPreview = () => {
  return (
    <Stack
      sx={{
        height: '20rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      }}
    >
      <Typography variant="h3">Loading Preview...</Typography>
    </Stack>
  );
};

export default LoadingPreview;
