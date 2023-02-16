// @mui
import { Stack, StackProps } from '@mui/material';
// @types
import { AuthorProps } from '../../@types/author';
import { BlogPostProps } from '../../@types/blog';
import { AdvertisementProps } from '../../@types/advertisement';
// hooks
import { useResponsive } from '../../hooks';
// components
import { SearchInput } from '../../components';
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

export default function BlogSidebar() {

  return (
    <>
    
    </>
  );
}
