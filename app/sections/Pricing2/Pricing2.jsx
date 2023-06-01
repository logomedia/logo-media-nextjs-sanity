// @mui
import {
  Stack,
  Tooltip,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../components/iconify';
//
import { PlanHeader, PlanContentMobile, PlanContentDesktop } from '../Pricing2';
import StyledPortableText from '../../components/StyledPortableText';

// ----------------------------------------------------------------------

export default function Pricing2(props) {
  const { heading, description, featuresTitle, features, plans } = props;

  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        {heading}
      </Typography>

      <StyledPortableText
        value={description}
        variant=""
        sx={{
          mb: { xs: 5, md: 8 },
          color: 'text.secondary',
          textAlign: 'center',
        }}
      />

      <Grid container alignItems="flex-end">
        {isMdUp && (
          <Grid xs={12} md={3} sx={{ pb: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {featuresTitle}
            </Typography>
          </Grid>
        )}

        {plans.map((plan) => (
          <Grid
            key={plan._key}
            xs={12}
            md={3}
            sx={{
              mb: { xs: 4, md: 0 },
              borderRadius: { xs: 2, md: 0 },
              boxShadow: (theme) => ({ xs: theme.customShadows.z16, md: 0 }),
            }}
          >
            <PlanHeader plan={plan} />
            {!isMdUp && <PlanContentMobile plan={plan} features={features} />}
          </Grid>
        ))}
      </Grid>

      {/* Features Column */}
      {isMdUp && (
        <Grid container>
          <Grid
            xs={12}
            md={3}
            sx={{
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            {features.map((option) => (
              <Stack
                key={option._key}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: 72,
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle2">{option.feature}</Typography>

                <Tooltip title={option.popover} placement="right" arrow>
                  <div>
                    <Iconify
                      icon="carbon:information"
                      sx={{ color: 'text.secondary' }}
                    />
                  </div>
                </Tooltip>
              </Stack>
            ))}
          </Grid>

          {plans.map((plan) => (
            <Grid
              key={plan._key}
              xs={12}
              md={3}
              sx={{
                borderTop: (theme) => ({
                  md: `solid 1px ${theme.palette.divider}`,
                }),
              }}
            >
              <PlanContentDesktop plan={plan} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
