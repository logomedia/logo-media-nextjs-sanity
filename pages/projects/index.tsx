import { Container,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "components/layout/Layout";
import FeaturedProject from 'components/project-components/FeaturedProject';
import ProjectList from 'components/project-components/ProjectList';
import {
  getAllProjects,
} from 'lib/sanity.client'

import { Page } from '../../components';
import { HEADER_DESKTOP_HEIGHT,HEADER_MOBILE_HEIGHT } from '../../config';

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));

export default function Projects({projects}){
    return (
      <Layout>
        <FeaturedProject projects={projects} />
      </Layout>
    )
}

export async function getStaticProps() {
    const projects = await getAllProjects()
    console.log(projects)
  return {
    props: {
      projects: projects,
    },
  };
}