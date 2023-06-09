import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import HeaderContainer from '../components/common/HeaderContainer';
import PostList from '../components/post/PostList';
import PostListContainer from '../components/post/PostListContainer';
import PaginationContainer from '../components/post/PaginationContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </div>
  );
};

export default PostListPage;
