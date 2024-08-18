import { storePost } from '@/util/posts';
import { redirect } from 'next/navigation';
import PostForm from '../../components/PostForm';

export default function NewPostPage() {
  //This is a React new feature, when u can set the action function to the HTML form
  //It then allows u to just get the form data as an argument. It also prevents HTML's auto form submission 
  async function createPost(prevState: { errors: string[] }, formData: FormData) {
    //U need to tell the Next that this is a server side action (by default it is client)
    "use server";
    //'title' here is a name attribute
    const title = formData.get('title') as string ?? '';
    const image = formData.get('image') as File;
    const content = formData.get('content') as string ?? '';

    let errors: string[] = [];

    if(isEmptyStr(title))
      errors.push('Title is required');
    
    if(isEmptyStr(content))
      errors.push('Content is required');
    
    if(!image || image.size === 0)
      errors.push('Image is required');

    if(errors.length !== 0)
      return { errors };

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });

    redirect('/feed');
  }

  return <PostForm actionFn={createPost}/>;
}

function isEmptyStr(str?: string | null) {
  return !str || str.trim().length === 0;
}