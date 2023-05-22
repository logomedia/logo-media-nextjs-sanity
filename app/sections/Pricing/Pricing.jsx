// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Switch, Container, Typography } from '@mui/material';
// components
import PlanCard from './PlanCard';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function Pricing(props) {
  const { heading, description, eyebrow, plans } = props;

  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {eyebrow}
          </Typography>

          <Typography variant="h2">{heading}</Typography>

          <StyledPortableText
            value={description}
            variant=""
            sx={{ color: 'text.secondary' }}
          />
        </Stack>

        <Stack direction="row" alignItems="center">
          <Typography variant="overline">MONTHLY</Typography>

          <Switch defaultChecked />

          <Typography variant="overline">YEARLY (save 10%)</Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan, index) => (
          <PlanCard key={plan._key} plan={plan} index={index} />
        ))}
      </Box>
    </Container>
  );
}

Pricing.propTypes = {
  plans: PropTypes.array,
};
