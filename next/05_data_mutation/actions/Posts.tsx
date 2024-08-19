//U need to tell the Next that this is a server side action (by default it is client)
'use server';

import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "../util/posts";
import { revalidatePath } from "next/cache";

//Overall it is considered a good practice to have a separate files for handling submission logic of forms etc.

//This is a React new feature, when u can set the action function to the HTML form (It is used in the NewPostPage)
//It then allows u to just get the form data as an argument. It also prevents HTML's auto form submission 
export async function createPost(prevState: { errors: string[] }, formData: FormData) {
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

  revalidatePath('/feed');
  redirect('/feed');
}
function isEmptyStr(str?: string | null) {
    return !str || str.trim().length === 0;
}

export async function togglePostLikeStatus(postId: number) {
  updatePostLikeStatus(postId, 2);
  //Re-load the page
  revalidatePath('/feed');
}