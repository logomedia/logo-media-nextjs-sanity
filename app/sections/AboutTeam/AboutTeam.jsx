// @mui
import PropTypes from 'prop-types';
import { Typography, Box, Container } from '@mui/material';
//
import StyledPortableText from '../../components/StyledPortableText';
import TeamMember from '../Team/TeamMember';

// ----------------------------------------------------------------------

export default function AboutTeam(props) {
  const { heading, description, cards } = props;

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {heading}
      </Typography>

      <StyledPortableText
        value={description}
        variant=""
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      />

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

AboutTeam.propTypes = {
  members: PropTypes.array,
};
