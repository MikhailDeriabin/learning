import { createPost } from '../../actions/Posts';
import PostForm from '../../components/PostForm';

export default function NewPostPage() {
  return <PostForm actionFn={createPost}/>;
}
