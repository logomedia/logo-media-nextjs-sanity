import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
// components
import SvgColor from '../../components/svg-color/SvgColor';
import StyledPortableText from '../../components/StyledPortableText/StyledPortableText';

// ----------------------------------------------------------------------

export default function NewsletterSignup(props) {
  const { heading, description, image } = props;

  return (
    <Box sx={{ py: 8, bgcolor: 'background.neutral' }}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SvgColor
              src={image.asset.url}
              sx={{ width: 80, height: 80, color: 'primary.main' }}
            />

            <div>
              <Typography variant="h4" gutterBottom>
                {heading}
              </Typography>

              <StyledPortableText
                value={description}
                variant="body2"
                sx={{ color: 'text.secondary' }}
              />
            </div>
          </Stack>

          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="large"
                    color="inherit"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: 0 },
            }}
            sx={{ maxWidth: 466 }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

NewsletterSignup.propTypes = {
  sx: PropTypes.object,
};
