'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const SharePage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';
  const text = searchParams.get('text') || '';
  const url = searchParams.get('url') || '';

  return (
    <div>
      <h1>Shared Content</h1>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Text:</strong> {text}</p>
      <p><strong>URL:</strong> <a href={url}>{url}</a></p>
    </div>
  );
};

export default function SharePageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePage />
    </Suspense>
  );
}



















