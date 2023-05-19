import { Typography } from '@mui/material';
import { PortableText, PortableTextComponents } from '@portabletext/react';

const StyledPortableText = ({ value, variant, sx }) => {
  const myPortableTextComponents: PortableTextComponents = {
    block: ({ children }) => {
      return (
        <Typography
          variant={variant ? variant : 'inherit'}
          sx={{ ...sx, minHeight: '1em' }}
        >
          {children}
        </Typography>
      );
    },
  };

  return <PortableText value={value} components={myPortableTextComponents} />;
};

export default StyledPortableText;
