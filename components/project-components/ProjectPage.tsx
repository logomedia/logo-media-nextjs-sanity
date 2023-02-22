import { Box, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PostBody from 'components/blog-components/PostBody'
import {
  CaseStudyGallery,
  CaseStudySummary,
} from 'components/sections/projects-components'

import { Breadcrumbs, Image, Markdown, Page } from '../../components'
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../config'

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

export default function PostPage(props) {
  const { project, moreProjects } = props
  let images = []
  const projectImages = project.images
  console.log(projectImages)
  for (let i = 0; i < projectImages.length; i++) {
    let image = project.images[i].asset.url
    console.log(image)
    images.push(image)
  }

  return (
    <Page title={project.title}>
      <RootStyle>
        <Container>
          <Box
            sx={{
              pt: { xs: 5, md: 10 },
            }}
          >
            <Image
              alt="hero"
              src={project.coverImage.asset.url}
              ratio="16/9"
              sx={{ borderRadius: 2 }}
            />
          </Box>

          <Breadcrumbs
            sx={{ my: { xs: 5, md: 10 } }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: '/projects' },
              { name: project.name },
            ]}
          />
          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
            sx={{
              pb: { xs: 10, md: 15 },
            }}
          >
            <Grid item xs={12} md={4}>
              <CaseStudySummary frontmatter={project} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                {' '}
                Project Brief
              </Typography>
              <Typography>{project.brief}</Typography>
              <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
                {' '}
                Project Scope
              </Typography>
              <PostBody content={project.scope} />
              <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
                {' '}
                Results
              </Typography>
              <PostBody content={project.results} />
              <CaseStudyGallery images={images} />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  )
}
