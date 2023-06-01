// @mui
import PropTypes from 'prop-types';
import { Typography, Container, Box } from '@mui/material';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

export default function TeamElearningAbout(props) {
  const { heading, cards } = props;

  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        {heading}
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {cards.map((member) => (
          <TeamMember key={member._key} member={member} />
        ))}
      </Box>
    </Container>
  );
}

TeamElearningAbout.propTypes = {
  members: PropTypes.array,
};
