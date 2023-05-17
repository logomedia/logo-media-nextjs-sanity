import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
//
import { StyledLink } from './styles';

// ----------------------------------------------------------------------

export default function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{subheader}</Typography>

      {items?.map((link) => (
        <StyledLink key={link.title} href={link.path}>
          {link.title}
        </StyledLink>
      ))}
    </Stack>
  );
}

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};
