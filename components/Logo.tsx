// @mui
import { Box, BoxProps } from '@mui/material'
// next
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean
  isSimple?: boolean
}

function Logo({ settings }) {
  const { logo } = settings

  return (
    <Link href="/">
      <SVG style={{ height: '40px' }} src={logo.asset.url} />
    </Link>
  )
}

export default Logo
