import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, IconButton } from '@mui/material';
//
import Iconify from '../../../iconify';
//
import BadgeDot from './BadgeDot';

// ----------------------------------------------------------------------

export default function ToggleButton({ open, notDefault, onToggle }) {
  return (
    <Box sx={{ position: 'relative' }}>
      {notDefault && <BadgeDot />}
      <m.div
        animate={{
          rotate: [0, open ? 0 : 360],
        }}
        transition={{
          duration: 4,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <IconButton color="inherit" aria-label="settings" onClick={onToggle}>
          <Iconify icon="carbon:settings" />
        </IconButton>
      </m.div>
    </Box>
  );
}

ToggleButton.propTypes = {
  notDefault: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};
