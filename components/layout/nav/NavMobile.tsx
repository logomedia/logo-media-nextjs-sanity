import chevronDown from '@iconify/icons-carbon/chevron-down'
import chevronRight from '@iconify/icons-carbon/chevron-right'
// icons
import menuIcon from '@iconify/icons-carbon/menu'
import {
  Box,
  Button,
  Collapse,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
  Stack,
} from '@mui/material'
// @mui
import { alpha, styled } from '@mui/material/styles'
// next
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// routes
import Routes from 'routes'

// components
import { Iconify, Logo, NavSection, Scrollbar } from '../../../components'
import { IconButtonAnimate } from '../../../components/animate'
// config
import { DRAWER_WIDTH } from '../../../config'
// @types
import { NavItemMobileProps, NavProps } from '../../@types/layout'

// ----------------------------------------------------------------------

interface RootLinkStyleProps extends ListItemButtonProps {
  active?: boolean
}

const RootLinkStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<RootLinkStyleProps>(({ active, theme }) => ({
  ...theme.typography.body2,
  height: 48,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  }),
}))

// ----------------------------------------------------------------------

export default function NavMobile({ navConfig, sx, settings }: NavProps) {
  const { pathname } = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose()
    }
    router.events.on('routeChangeStart', handleDrawerClose)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      <IconButtonAnimate color="inherit" onClick={handleDrawerOpen} sx={sx}>
        <Iconify icon={menuIcon} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: DRAWER_WIDTH },
        }}
      >
        <Scrollbar>
          <Box sx={{ px: 2.5, py: 3, lineHeight: 0 }}>
            <Logo settings={settings} />
          </Box>

          <List sx={{ px: 0 }}>
            {navConfig.map((link) => (
              <NavItemMobile key={link.title} item={link} />
            ))}
          </List>

          <Stack spacing={2} sx={{ p: 2.5, pb: 5 }}>
            <NextLink href={Routes.loginIllustration} passHref>
              <Button fullWidth variant="outlined" color="inherit">
                Login
              </Button>
            </NextLink>

            <NextLink href={Routes.registerIllustration} passHref>
              <Button fullWidth variant="contained" color="inherit">
                Join Us
              </Button>
            </NextLink>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  )
}

// ----------------------------------------------------------------------

function NavItemMobile({ item }: NavItemMobileProps) {
  const { pathname } = useRouter()

  const { title, path, children } = item
  const rootPath = pathname.split('/')[1]
  const isActiveRoot = pathname === path
  const isActiveRootWithChild = pathname.includes(`/${rootPath}/`)

  const [open, setOpen] = useState(isActiveRootWithChild)

  const handleOpen = () => {
    setOpen(!open)
  }

  if (children) {
    return (
      <>
        <RootLinkStyle onClick={handleOpen} active={isActiveRootWithChild}>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={open ? chevronDown : chevronRight}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </RootLinkStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <NavSection
              navConfig={children}
              sx={{
                // Root
                position: 'relative',
                '&:before': {
                  top: 0,
                  bottom: 0,
                  height: 0.96,
                  my: 'auto',
                  left: 20,
                  width: '1px',
                  content: "''",
                  bgcolor: 'divider',
                  position: 'absolute',
                },
                '& .MuiListSubheader-root': { mb: 1 },
                '& .MuiListItemButton-root': {
                  backgroundColor: 'transparent',
                  '&:before': { display: 'none' },
                },
                // Sub
                '& .MuiCollapse-root': {
                  '& .MuiList-root': {
                    '&:before': {
                      top: 0,
                      bottom: 0,
                      left: 40,
                      my: 'auto',
                      height: 0.82,
                      width: '1px',
                      content: "''",
                      bgcolor: 'divider',
                      position: 'absolute',
                    },
                  },
                  '& .MuiListItemButton-root': {
                    pl: 8,
                    '& .MuiListItemIcon-root, .MuiTouchRipple-root': {
                      display: 'none',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    )
  }

  if (title === 'Documentation') {
    return (
      <Link href={path} underline="none" target="_blank" rel="noopener">
        <RootLinkStyle>
          <ListItemText disableTypography primary={title} />
        </RootLinkStyle>
      </Link>
    )
  }

  return (
    <NextLink key={title} href={path} passHref>
      <RootLinkStyle active={isActiveRoot}>
        <ListItemText disableTypography primary={title} />
      </RootLinkStyle>
    </NextLink>
  )
}
