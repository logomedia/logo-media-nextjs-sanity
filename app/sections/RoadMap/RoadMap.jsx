// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Typography, Container } from '@mui/material';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import StyledPortableText from '../../components/StyledPortableText';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/background/overlay_2.jpg',
  }),
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWork(props) {
  const { heading, description, steps } = props;

  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {heading}
        </Typography>

        <StyledPortableText
          value={description}
          variant=""
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        />

        <Timeline position={isMdUp ? 'alternate' : 'right'}>
          {steps.map((value, index) => (
            <TimelineItem
              key={value._key}
              sx={{
                '&:before': {
                  ...(!isMdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={value.color} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography
                  variant="overline"
                  sx={{ color: `${value.color}.main` }}
                >
                  {value.eyebrow}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <StyledPortableText
                  value={value.description}
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </StyledRoot>
  );
}
