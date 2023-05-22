'use client';

import { getHomepage } from '../lib/sanity.client';
import RenderSections from '../app/components/RenderSections/RenderSections';
import { MotionLazyContainer } from './components/animate';

export default async function Page() {
  const home = await getHomepage();
  const content = home?.content;
  return (
    <>
      <MotionLazyContainer>
        {content && <RenderSections sections={content} />}
      </MotionLazyContainer>
    </>
  );
}
