import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';

//Another way of setting up the revalidation time. This is a reserved name of Next
//export const revalidate = 5;

//This is another way of setting the cache in Next
//export const dynamic = 'auto';


export default async function MessagesPage() {
  //This is another way of setting up the component caching
  //unstable_noStore();

  //Notice that Next overrides the standard fetch() of browser and adds some new features
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'page',
    },
    //Set up the caching type for the next. 'no-store' basically disables caching
    cache: 'no-store',

    //More granular cache settings
    next: {
      //How much seconds to wait before revalidation of data
      revalidate: 5,

      //Set the tag for the data, which can be used in revalidateTag(), 
      //to revalidate all data with that tag, not the whole page as it is with revalidatePath()
      tags: ['msg']
    }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
