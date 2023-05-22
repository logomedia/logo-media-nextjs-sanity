import { m } from 'framer-motion';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import { MotionContainer, varBounce } from '../../components/animate';
import Image from '../../components/image';
import StyledPortableText from '../../components/StyledPortableText';
import Cta from '../../components/CTA';

// ----------------------------------------------------------------------

export default function Error404View(props) {
  const { heading, description, ctas, image, imageAltText } = props;

  return (
    <Container component="main">
      <Stack
        sx={{
          py: 12,
          m: 'auto',
          maxWidth: 480,
          minHeight: '100vh',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <MotionContainer>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              {heading}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <StyledPortableText
              value={description}
              variant=""
              sx={{ color: 'text.secondary' }}
            />
          </m.div>

          <m.div variants={varBounce().in}>
            <Image
              alt={imageAltText}
              src={image.asset.url}
              sx={{
                mx: 'auto',
                maxWidth: 320,
                my: { xs: 5, sm: 8 },
              }}
            />
          </m.div>

          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
          {/* <Button
        component={NextLink}
        href="/"
        size="large"
        color="inherit"
        variant="contained"
      >
        Go to Home
      </Button> */}
        </MotionContainer>
      </Stack>
    </Container>
  );
}
