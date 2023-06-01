import PropTypes from 'prop-types';
// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
//
import Image from '../../components/image/Image';
import Label from '../../components/label/Label';
import Iconify from '../../components/iconify/Iconify';
import Cta from '../../components/CTA/CTA';

// ----------------------------------------------------------------------

export default function PlanCard({ plan, index }) {
  const { title, caption, price, services, ctas, image, popular } = plan;

  const basicLicense = index === 0;
  const starterLicense = index === 1;
  const premiumLicense = index === 2;

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: 'primary.main', mb: 2 }}
          >
            {title}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h3" component="span">{`$${price}`}</Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{ color: 'text.disabled' }}
            >
              /mo
            </Typography>
          </Stack>
        </div>

        <Image
          alt="icon"
          src={image.asset.url}
          sx={{ width: 64, height: 64 }}
        />
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {services.map((option) => (
          <Stack
            key={option}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            <Iconify
              icon="carbon:checkmark"
              sx={{ mr: 2, color: 'primary.main' }}
            />{' '}
            {option}
          </Stack>
        ))}
      </Stack>

      {ctas.map((cta) => (
        <Cta {...cta} key={cta._key} />
      ))}

      {/* <Button
        fullWidth
        size="large"
        color={(premiumLicense && 'primary') || 'inherit'}
        variant={(basicLicense && 'outlined') || 'contained'}
      >
        Choose Package
      </Button> */}
    </Card>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.node,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
