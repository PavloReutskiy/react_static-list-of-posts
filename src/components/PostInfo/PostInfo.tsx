import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

// function getPost(postId: number): Post | null {
//   const foundPost = postsFromServer.find(post => post.id === postId);

//   return foundPost || null;
// }

type Props = {
  post: Post;
};

// export const comments: Comment[] = commentsFromServer
//   .filter(comment => comment.post.id === postId);
//   .map(comment => ({
//   ...comment,
//   post: getPost(comment.postId),
// }));

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        {post.user && (
          <UserInfo user={post.user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {
      post.comments.length > 0
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
    }

  </div>
);
