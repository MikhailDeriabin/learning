'use client';

type Props = Readonly<{
    error: any
}>;
export default function FilterError({ error }: Props) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error?.message}</p>
    </div>
  );
}