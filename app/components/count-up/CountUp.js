import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ReactCountUp from 'react-countup';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function CountUp({ sx, ...other }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}

CountUp.propTypes = {
  sx: PropTypes.object,
};
