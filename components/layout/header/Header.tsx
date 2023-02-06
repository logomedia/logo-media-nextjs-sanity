// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Divider, Container, Link } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from '../../../hooks';
// routes
import Routes from 'routes';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../../config';
// components
import { Logo, Label } from '../../../components';
//
import Searchbar from '../Searchbar';

import { NavMobile, NavDesktop,  } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { useSettingsState } from 'context/settings';

// ----------------------------------------------------------------------

type Props = {
  transparent?: boolean;
};

export default function Header({ transparent }: Props) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  let navConfig = [];
  const mainMenu = useSettingsState().settings.mainMenu
  if (!mainMenu) {
    return
  } else { 

    for (let i = 0; i < mainMenu.length; i++) {
      function getPath(){
        let menuPath = mainMenu[i].link.slug;
        if (!menuPath) {
          return '#'
        }
        else {
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
            items:[]
          }

          for (let i = 0; i < items.length; i++){
            let object = {
              title: items[i].name,
              path:items[i].link.slug.current,
            }
            kids.push(object)
          }
          obj.items = kids
          menu.push(obj)
          return menu
        }
        else if (mainMenu[i].link.links) {

          let grandkids = mainMenu[i].link.links;
          let menus = []
          for (let i = 0; i < grandkids.length; i++){
            let grandKidLinks = grandkids[i].link.links
    

            let array =[]

            let grandMenu = {
              order: `${i + 1}`,
              subheader: grandkids[i].name,
              cover: grandkids[i].link.menuImage.asset.url,
              items:[]
            }
            for (let j = 0; j < grandKidLinks.length; j++){
              //console.log(grandKidLinks[i])
              let grandKid = {
                title: grandKidLinks[j].name,
                path: grandKidLinks[j].link.slug.current
              }
              array.push(grandKid)
              
            }
            
            grandMenu.items = array
            menus.push(grandMenu)
            
          }
          return menus
        }
        
      
      }
      let path = getPath();
      
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
//console.log(mainMenu)
}
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo onDark={transparent && !isScrolling} />

            <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
              <Label
                color="info"
                sx={{
                  ml: 0.5,
                  px: 0.5,
                  top: -14,
                  left: 64,
                  height: 20,
                  fontSize: 11,
                  cursor: 'pointer',
                  position: 'absolute',
                }}
              >
                v1.4
              </Label>
            </Link>
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

          

            <Divider orientation="vertical" sx={{ height: 24 }} />

            {isDesktop && (
              <Stack direction="row" spacing={1}>
                <NextLink href={Routes.registerIllustration} prefetch={false} passHref>
                  <Button
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
                </NextLink>

                <Button variant="contained" href={Routes.buyNow} target="_blank" rel="noopener">
                  Buy Now
                </Button>
              </Stack>
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
  );
}
