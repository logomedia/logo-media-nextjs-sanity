import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BgOverlay, Image } from 'components'
import { getAllProjects } from 'lib/sanity.client'
// next
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { useEffect, useState } from 'react'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}))
const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />
})
export default function FeaturedProject(props) {
  const { projects } = props

  if (projects) {
    console.log(projects)
    return (
      <RootStyle>
        <Container>
          <ProjectItemLarge project={projects[0]} />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              mt: 3,
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {projects.slice(1).map((project) => (
              <ProjectItem key={project.slug} project={project} />
            ))}
          </Box>
        </Container>
      </RootStyle>
    )
  } else {
    return <></>
  }
}

function ProjectItem({ project }) {
  const { brief, coverImage, logo, name, slug, tags } = project

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Image src={coverImage.asset.url} alt={name} ratio="1/1" />
      <Box
        sx={{
          typography: 'body2',
          pt: 1.5,
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {tags.slice(0, 3).map((tag) => (
          <Chip
            key={tag}
            size="small"
            label={tag}
            sx={{
              m: 0.5,
              color: '#fff',
              backgroundColor: 'rgb(248 141 27 / 30%)',
            }}
          />
        ))}
      </Box>

      <Stack
        spacing={1}
        sx={{
          p: 1,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Box>
          <Image src={logo.asset.url} alt={name + ' logo'} />
        </Box>
        <NextLink href={'/projects/' + slug}>
          <Typography
            sx={{ mt: 2, textAlign: 'right', cursor: 'pointer' }}
            color="inherit"
          >
            View Project
          </Typography>
        </NextLink>
      </Stack>

      <BgOverlay />
    </Box>
  )
}
function ProjectItemLarge({ project }) {
  const { brief, coverImage, logo, name, slug, tags } = project

  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}
      >
        <Image
          ratio="16/9"
          src={coverImage.asset.url}
          alt={name}
          sx={{ borderRadius: 2 }}
        />
        <Box
          sx={{
            typography: 'body2',
            pt: 1.5,
            position: 'absolute',
            bottom: '30px',
            left: '10px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {tags.slice(0, 3).map((tag) => (
            <Chip
              key={tag}
              size="small"
              label={tag}
              sx={{
                m: 0.5,
                color: '#fff',
                backgroundColor: 'rgb(248 141 27 / 30%)',
              }}
            />
          ))}
        </Box>
      </Box>

      <Stack
        align-items="start"
        spacing={1}
        sx={{
          mx: 'auto',
          pl: { md: 8 },
          py: { xs: 3, md: 5 },
          maxWidth: { md: 408 },
          width: '100%',
        }}
      >
        <Box>
          <Image src={logo.asset.url} alt={name + ' logo'} />
        </Box>

        <Box>
          <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
            {brief}
          </Typography>

          <NextLink href={'/projects/' + slug}>
            <Typography
              sx={{ mt: 2, textAlign: 'right', cursor: 'pointer' }}
              color="inherit"
            >
              View Project
            </Typography>
          </NextLink>
        </Box>
      </Stack>
    </Stack>
  )
}
