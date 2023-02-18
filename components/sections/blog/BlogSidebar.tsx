// @mui
import { Stack, StackProps } from '@mui/material';

import { AdvertisementProps } from '../../@types/advertisement';
// @types
import { AuthorProps } from '../../@types/author';
import { BlogPostProps } from '../../@types/blog';
// components
import { SearchInput } from '../../components';
// hooks
import { useResponsive } from '../../hooks';
//
import { Advertisement01 } from '../advertisement';
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';
import BlogSidebarRecentPosts from './BlogSidebarRecentPosts';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: AuthorProps;
  recentPosts: {
    list: BlogPostProps[];
    path: string;
  };
  advertisement: AdvertisementProps;
}

export default function BlogSidebar(props) {
const { recentPosts } = props
  return (
    <>
     <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
        }}
      
      >
     <BlogSidebarRecentPosts recentPosts={recentPosts} />
        
      </Stack>
    </>
    
  );
}
