import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { CircularProgress, Dialog, IconButton } from '@mui/material';
//
import Iconify from '../iconify/Iconify';
//
import { StyledReactPlayer } from './styles';

// ----------------------------------------------------------------------

export default function PlayerDialog({ videoPath, open, onClose, ...other }) {
  const [loading, setLoading] = useState(true);

  const onReady = () => {
    setLoading(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      PaperProps={{
        sx: { bgcolor: 'unset' },
      }}
    >
      <IconButton
        size="large"
        onClick={onClose}
        sx={{
          top: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: (theme) => alpha(theme.palette.common.white, 0.72),
          bgcolor: (theme) => alpha(theme.palette.common.white, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.16),
          },
        }}
      >
        <Iconify icon="carbon:close" width={24} />
      </IconButton>

      {loading && (
        <CircularProgress
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            position: 'absolute',
          }}
        />
      )}

      <StyledReactPlayer
        url={videoPath}
        playing={!loading}
        onReady={onReady}
        {...other}
      />
    </Dialog>
  );
}

PlayerDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  videoPath: PropTypes.string,
};
