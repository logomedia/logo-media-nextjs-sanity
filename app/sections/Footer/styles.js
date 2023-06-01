// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledLink = styled((props) => <Link component={NextLink} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.caption,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })
);
