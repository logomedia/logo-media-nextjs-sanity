import { Backdrop, Box, BoxProps,Divider, Typography } from '@mui/material';
// @mui
import { styled } from '@mui/material/styles';
import { AnimatePresence,m, MotionProps, useCycle } from 'framer-motion';
import { useEffect } from 'react';

// config
import { defaultSettings, DRAWER_WIDTH } from '../../config';
// hooks
import { useSettings } from '../../hooks';
import { varFade } from '../animate';
//
import Scrollbar from '../Scrollbar';
//
import HeaderSetting from './HeaderSetting';
import SettingColorPresets from './SettingColorPresets';
import SettingDirection from './SettingDirection';
import SettingMode from './SettingMode';
import ToggleButtonSetting from './ToggleButtonSetting';

// ----------------------------------------------------------------------

const zIndex = 1999;

const clipX = 'calc(100% - 55px)';
const clipY = 'calc(100% - 64px)';

const varSidebar = {
  initial: {
    clipPath: `circle(28px at ${clipX} ${clipY})`,
    transition: { delay: 0.3, type: 'spring', stiffness: 400, damping: 40 },
  },
  animate: {
    clipPath: `circle(${1000 * 2 + 200}px at ${clipX} ${clipY})`,
    transition: { type: 'spring', stiffness: 20, restDelta: 2 },
  },
  exit: {
    clipPath: `circle(28px at ${clipX} ${clipY})`,
    transition: { delay: 0.3, type: 'spring', stiffness: 400, damping: 40 },
  },
};

const SidebarStyle = styled((props: BoxProps & MotionProps) => <Box {...props} />)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  position: 'fixed',
  zIndex: zIndex,
  width: DRAWER_WIDTH,
  boxShadow: theme.customShadows.z24,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Settings() {
  const { themeMode, themeDirection, themeColorPresets, onResetSetting } = useSettings();

  const [toggleOpen, setToggleOpen] = useCycle(false, true);

  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeDirection !== defaultSettings.themeDirection ||
    themeColorPresets !== defaultSettings.themeColorPresets;

  useEffect(() => {
    if (toggleOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggleOpen]);

  return (
    <>
      <ToggleButtonSetting
        notDefault={notDefault}
        isOpen={toggleOpen}
        onToggle={() => setToggleOpen()}
      />

      <AnimatePresence initial={false}>
        {toggleOpen && (
          <>
            <Backdrop
              sx={{ zIndex: zIndex - 1 }}
              open={toggleOpen}
              onClick={() => setToggleOpen()}
            />

            <SidebarStyle component={m.div} {...varSidebar}>
              <HeaderSetting
                notDefault={notDefault}
                onReset={onResetSetting}
                onToggle={() => setToggleOpen()}
              />

              <Divider />

              <Scrollbar>
                <Box sx={{ pb: 15 }}>
                  <m.div {...varFade().inUp}>
                    <SettingMode />
                  </m.div>

                  <m.div {...varFade().inUp}>
                    <SettingDirection />
                  </m.div>

                 
                </Box>
              </Scrollbar>
            </SidebarStyle>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
