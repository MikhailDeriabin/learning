'use client';
import { formatDate } from '@/util/format';
import LikeButton from './like-icon';
import { Post as TPost } from '../types/Post';
import { togglePostLikeStatus } from '../actions/Posts';
import { useOptimistic } from 'react';

type Props = Readonly<{
  post: TPost,
  updatePostFn: (postId: number) => Promise<any> 
}>
function Post({ post, updatePostFn }: Props) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form 
              // Pre-configure the function call, by specifying its first arg
              action={updatePostFn.bind(null, post.id)} 
              className={post.isLiked ? 'liked' : undefined}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: TPost[] }) {
  //With this hook u can add optimistic updates to the component 
  //(component does not wait for the server response after updating the data, but instead shows the user that update was successful immediately)
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId: number) => {
    const postIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if(postIndex === -1)
      return prevPosts;

    const postToUpdate = {...prevPosts[postIndex]};
    postToUpdate.likes = postToUpdate.likes + (postToUpdate.isLiked ? -1 : 1);
    postToUpdate.isLiked = !postToUpdate.isLiked;

    const updatedPosts = [...posts];
    updatedPosts[postIndex] = postToUpdate;
    return updatedPosts;
  });

  async function handlePostUpdate(postId: number) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} updatePostFn={handlePostUpdate}/>
        </li>
      ))}
    </ul>
  );
}
