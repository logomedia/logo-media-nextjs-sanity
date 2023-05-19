'use client';

import { useState } from 'react';
// @mui
import {
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Image from '../../components/image/Image';
import Iconify from '../../components/iconify/Iconify';
import { PortableText } from '@portabletext/react';

// ----------------------------------------------------------------------

export default function Faqs(props) {
  const { heading, eyebrow, image, imageAltText, faqsList } = props;

  const isMdUp = useResponsive('up', 'md');

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography variant="overline" color="text.disabled">
              {eyebrow}
            </Typography>

            <Typography variant="h2">{heading}</Typography>
          </Stack>

          {faqsList.map((faq) => (
            <Accordion
              key={faq._key}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>
                <Iconify
                  width={24}
                  icon={
                    expanded === faq.question ? 'carbon:subtract' : 'carbon:add'
                  }
                />
              </AccordionSummary>

              <PortableText value={faq.answer} />
            </Accordion>
          ))}
        </Grid>

        {isMdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt={imageAltText} src={image.asset.url} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
