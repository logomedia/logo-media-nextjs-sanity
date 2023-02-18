// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import {
  Box,
  Breadcrumbs as MUIBreadcrumbs,
  BreadcrumbsProps,
  Link,
  Typography,
} from '@mui/material';
// next
import NextLink from 'next/link';
import { ReactElement } from 'react';
import { forwardRef } from 'react';

//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

type TLink = {
  href?: string;
  name: string | undefined;
  icon?: ReactElement;
};

interface Props extends BreadcrumbsProps {
  links: TLink[];
  activeLast?: boolean;
  onDark?: boolean;
}
const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

export default function Breadcrumbs({
  links,
  activeLast = false,
  onDark = false,
  ...other
}: Props) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links.map((link) => <LinkItem key={link.name} link={link} onDark={onDark} />);

  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} onDark={onDark} />
      ) : (
        <Typography
          noWrap
          variant="body3"
          sx={{
            color: 'text.disabled',
            ...(onDark && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          {currentLink || ''}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Iconify
          icon={chevronRight}
          sx={{
            width: 16,
            height: 16,
            ...(onDark && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  link: TLink;
  onDark?: boolean;
};

function LinkItem({ link, onDark }: LinkItemProps) {
  const { href = '', name, icon } = link;
  return (
    
      <Link component={LinkBehaviour} key={name} href={href}
        variant="body3"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
          ...(onDark && {
            color: 'common.white',
          }),
        }}
      >
        {icon && (
          <Box
            sx={{
              mr: 1,
              '& svg': { width: 20, height: 20 },
            }}
          >
            {icon}
          </Box>
        )}
        {name}
      </Link>

  );
}
