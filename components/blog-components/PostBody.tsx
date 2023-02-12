/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import Image from 'next/image';

import styles from './PostBody.module.css'

export default function PostBody({ content }) {

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        return (
          <Image key={value.key} alt={value.alt} src={value.asset.url} width={value.asset.metadata.dimensions.width} height={value.asset.metadata.dimensions.height} />
        );
      },
    },
  };
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
