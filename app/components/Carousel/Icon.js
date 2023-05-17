import PropTypes from 'prop-types';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

export function LeftIcon({ icon = 'carbon:chevron-right', isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

LeftIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};

export function RightIcon({ icon = 'carbon:chevron-right', isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}

RightIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};
