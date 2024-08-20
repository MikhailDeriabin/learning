import { redirect } from 'next/navigation';

import { addMessage } from '@/util/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    'use server';

    const message = formData.get('message') as string;
    if(!message)
      return;
    addMessage(message);
    //With this approach of clearing the cache, only /messages path data will be re-fetched, but not nested
    revalidatePath('/messages');

    //Revalidate all data with the specified tag (can be set in fetch function in next option)
    revalidateTag('msg');
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
