import { Box, Button, Stack, Typography } from '@mui/material';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { m } from 'framer-motion';
// hooks
import useHoverParallax from '../../../hooks/useHoverParallax';
// components
import Image from '../../components/image/';
// routes
import Cta from '../../components/CTA';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 9,
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:before': {
    zIndex: 8,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
  },
}));

// ----------------------------------------------------------------------

export default function BackgroundMovement(props) {
  const {
    eyebrow,
    heading,
    cta,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image1alt,
    image2alt,
    image3alt,
    image4alt,
    image5alt,
    image6alt,
    image7alt,
  } = props;

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } =
    useHoverParallax();

  return (
    <RootStyle
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <ContentStyle>
        <Typography
          variant="h3"
          sx={{ opacity: 0.72, fontSize: { xs: '18px' } }}
        >
          {eyebrow}
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          sx={{ mt: 1, mb: 8, fontSize: { xs: '24px' } }}
        >
          {heading}
        </Typography>
        <Cta {...cta} key={cta._key} />
      </ContentStyle>

      <Background
        offsetX={offsetX}
        offsetY={offsetY}
        image1={image1.asset.url}
        image2={image2.asset.url}
        image3={image3.asset.url}
        image4={image4.asset.url}
        image5={image5.asset.url}
        image6={image6.asset.url}
        image7={image7.asset.url}
        image1alt={image1alt}
        image2alt={image2alt}
        image3alt={image3alt}
        image4alt={image4alt}
        image5alt={image5alt}
        image6alt={image6alt}
        image7alt={image7alt}
      />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function Background({
  offsetX,
  offsetY,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image1alt,
  image2alt,
  image3alt,
  image4alt,
  image5alt,
  image6alt,
  image7alt,
}) {
  const boxStyle = {
    position: 'absolute',
    top: 0,
    width: 1,
    height: 1,
  };

  return (
    <BackgroundStyle>
      <m.div style={{ x: offsetX(16), y: offsetY(16) }}>
        <Image
          alt={image1alt}
          src={image1}
          sx={{ minHeight: { xs: 0, md: 360 } }}
        />
      </m.div>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(24), y: offsetY(24) }}>
          <Image alt={image2alt} src={image2} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image alt={image3alt} src={image3} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-20), y: offsetY(-20) }}>
          <Image alt={image4alt} src={image4} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image alt={image5alt} src={image5} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-48), y: offsetY(8) }}>
          <Image alt={image6alt} src={image6} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(20), y: offsetY(20) }}>
          <Image alt={image7alt} src={image7} />
        </m.div>
      </Box>
    </BackgroundStyle>
  );
}
