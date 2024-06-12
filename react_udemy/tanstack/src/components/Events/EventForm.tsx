import { FormEvent, ReactNode, useState } from 'react';

import ImagePicker from '../ImagePicker';
import { Event } from '../../types/Event';
import { fetchImages } from '../../util/http';
import { useQuery } from '@tanstack/react-query';
import { APIError } from '../../types/APIError';
import { Image } from '../../types/Image';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';

type Props = {
  inputData: Event | null,
  children?: ReactNode,
  onSubmit: (data: Event) => void
}

export default function EventForm({ inputData, onSubmit, children }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(inputData?.image);

  const {isPending: isImgPending, data, isError: isImgError, error: imgError} = useQuery<Image[], APIError>({
    queryFn: fetchImages,
    queryKey: ['images']
  });

  function handleSelectImage(imagePath?: string) {
    setSelectedImage(imagePath);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    //@ts-ignore
    const data = Object.fromEntries(formData) as Event;

    onSubmit({ ...data, image: selectedImage });
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ''}
        />
      </p>

      <div className="control">
        {!isImgPending && <ImagePicker
          images={data}
          onSelect={handleSelectImage}
          selectedImage={selectedImage}
        />}
        {isImgPending && <LoadingIndicator/>}
        {isImgError && <ErrorBlock title="An error occurred" message={imgError.info?.message ?? "Failed to load images"} />}
      </div>

      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ''}
        />
      </p>

      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ''}
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ''}
          />
        </p>
      </div>

      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ''}
        />
      </p>

      <p className="form-actions">{children}</p>
    </form>
  );
}
