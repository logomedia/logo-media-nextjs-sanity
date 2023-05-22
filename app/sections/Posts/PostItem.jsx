import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Avatar, Typography, Paper, Divider, Link } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// components
import Image from '../../components/image/Image';
import TextMaxLine from '../../components/text-max-line/TextMaxLine';

// ----------------------------------------------------------------------

export default function PostItem({ post }) {
  const { title, duration, coverImg, description, author, createdAt } = post;

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Image src={coverImg} alt={title} ratio="1/1" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2">{fDate(createdAt, 'MMM')}</Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(createdAt, 'dd')}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Link
            component={NextLink}
            href={paths.eLearning.post}
            color="inherit"
          >
            <TextMaxLine variant="h6" persistent>
              {title}
            </TextMaxLine>
          </Link>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {description}
          </TextMaxLine>

          <Stack
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ pt: 1.5 }}
          >
            <Avatar src={author.picture} sx={{ width: 40, height: 40 }} />
            <Stack>
              <Typography variant="body2">{author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      picture: PropTypes.string,
    }),
    coverImg: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
