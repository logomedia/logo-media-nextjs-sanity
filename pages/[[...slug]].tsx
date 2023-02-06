import { getPageBySlug } from "lib/sanity.client"
import { slugParamToPath } from "utils/urls"
import RenderSections from "components/layout/RenderSections"

import { ReactElement, ReactNode } from 'react';
// next
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// contexts
import { SettingsProvider } from '../contexts/SettingsContext';
// theme
import ThemeProvider from '../theme';
// utils
import axios from '../utils/axios';
// components
import Settings from '../components/settings';
import RtlLayout from '../components/RtlLayout';
import ProgressBar from '../components/ProgressBar';
import ThemeColorPresets from '../components/ThemeColorPresets';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import Layout from "components/layout/Layout";

export default function Page(props) {
  const { content } = props
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <ThemeProvider>
          <ThemeColorPresets>
            <MotionLazyContainer>
              <RtlLayout>
                <Settings />
                  <ProgressBar />
                  <Layout>
                    {content && <RenderSections sections={content}  />}
                  </Layout>
              </RtlLayout>
            </MotionLazyContainer>
          </ThemeColorPresets>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug)

  let data;

  data = await getPageBySlug(slug)


  if (JSON.stringify(data) === '{}') {
    return {
      notFound: true,
    }
  }

  return {
    props: data || {},
  }
}