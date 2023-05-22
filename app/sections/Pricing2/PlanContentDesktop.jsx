// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Button } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import Cta from '../../components/CTA';

// ----------------------------------------------------------------------

export default function PlanContentDesktop({ plan }) {
  const { title, enabledFeatures, ctas } = plan;

  const startLicense = title === 'START';
  const proLicense = title === 'PRO';
  const businessLicense = title === 'BUSINESS';

  return (
    <Box>
      {enabledFeatures.map((option, index) => {
        return (
          <Stack
            key={index}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: 72,
              color: 'text.secondary',
              borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
              ...(proLicense && {
                bgcolor: 'background.neutral',
              }),
            }}
          >
            {!option ? (
              '-'
            ) : (
              <Iconify
                icon="carbon:checkmark"
                sx={{ width: 24, height: 24, color: 'primary.main' }}
              />
            )}
          </Stack>
        );
      })}

      {/* CTA's */}
      <Stack
        sx={{
          py: 5,
          ...(proLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        {ctas.map((cta) => (
          <Cta {...cta} key={cta._key} />
        ))}

        {/* <Button
          size="large"
          variant={proLicense ? 'contained' : 'outlined'}
          color="inherit"
          sx={{ mx: 'auto' }}
        >
          {startLicense && 'Start Free Trial'}
          {proLicense && 'Choose Pro'}
          {businessLicense && 'Contact Sale'}
        </Button> */}
      </Stack>
    </Box>
  );
}

PlanContentDesktop.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
