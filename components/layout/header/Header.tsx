// next
import { AppBar, Box, Button, Container, Divider, Stack } from '@mui/material'
// @mui
import { useTheme } from '@mui/material/styles'
import SettingMode from 'components/settings/SettingMode'
import { useSettingsState } from 'context/settings'
import NextLink from 'next/link'
import { forwardRef } from 'react'

// components
import { Logo } from '../../../components'
// routes
// config
import { HEADER_DESKTOP_HEIGHT } from '../../../config'
// hooks
import { useOffSetTop, useResponsive } from '../../../hooks'
import { NavDesktop, NavMobile } from '../nav'
//
import Searchbar from '../Searchbar'
import { ToolbarShadowStyle, ToolbarStyle } from './HeaderToolbarStyle'
// ----------------------------------------------------------------------

type Props = {
  transparent?: boolean
  settings?: any
}

export default function Header({ transparent, settings }: Props) {
  const theme = useTheme()

  const isDesktop = useResponsive('up', 'md')

  const isLight = theme.palette.mode === 'light'

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT)
  const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />
  })

  let navConfig = []
  const mainMenu = settings.mainMenu
  if (!mainMenu) {
    return
  } else {
    for (let i = 0; i < mainMenu.length; i++) {
      function getPath() {
        let menuPath = mainMenu[i].link.slug
        if (!menuPath) {
          return '#'
        } else {
          return menuPath.current
        }
      }
      function getChildren() {
        let navItems = mainMenu[i].link

        if (navItems.menuImage) {
          let menu = []
          let kids = []
          let items = navItems.links
          let obj = {
            order: '1',
            subheader: navItems.name,
            cover: navItems.menuImage.asset.url,
            items: [],
          }

          for (let i = 0; i < items.length; i++) {
            let object = {
              title: items[i].name,
              path: items[i].link.slug.current,
            }
            kids.push(object)
          }
          obj.items = kids
          menu.push(obj)
          return menu
        } else if (mainMenu[i].link.links) {
          let grandkids = mainMenu[i].link.links
          let menus = []
          for (let i = 0; i < grandkids.length; i++) {
            let grandKidLinks = grandkids[i].link.links

            let array = []

            let grandMenu = {
              order: `${i + 1}`,
              subheader: grandkids[i].name,
              cover: grandkids[i].link.menuImage.asset.url,
              items: [],
            }
            for (let j = 0; j < grandKidLinks.length; j++) {
              //console.log(grandKidLinks[i])
              let grandKid = {
                title: grandKidLinks[j].name,
                path: grandKidLinks[j].link.slug.current,
              }
              array.push(grandKid)
            }

            grandMenu.items = array
            menus.push(grandMenu)
          }
          return menus
        }
      }
      let path = getPath()

      let obj1 = {
        title: mainMenu[i].name,
        path: path,
      }

      let child = getChildren()

      if (child) {
        obj1.children = child
      }

      navConfig.push(obj1)
    }
  }
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        transparent={transparent}
        scrolling={isScrolling}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pl: '10px',
            pr: '10px',
          }}
        >
          {settings && <Logo settings={settings} />}

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            {isDesktop && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SettingMode />
                <Divider orientation="vertical" sx={{ height: 24 }} />
              </Box>
            )}

            <Stack direction="row" spacing={1}>
              <Button
                href="/"
                component={LinkBehaviour}
                color="inherit"
                variant="outlined"
                sx={{
                  ...(transparent && {
                    color: 'common.white',
                  }),
                  ...(isScrolling && isLight && { color: 'text.primary' }),
                }}
              >
                Join Us
              </Button>

              <Button
                variant="contained"
                href="/"
                target="_blank"
                rel="noopener"
              >
                Buy Now
              </Button>
            </Stack>
            {!isDesktop && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Divider orientation="vertical" sx={{ height: 24 }} />
                <SettingMode />
                <Divider orientation="vertical" sx={{ height: 24 }} />
              </Box>
            )}
          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />
          )}
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  )
}
