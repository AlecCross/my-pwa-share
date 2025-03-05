import Head from "next/head";

import { useState } from 'react';

export default function Home() {
  const [droppedImage, setDroppedImage] = useState(null);
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const items = event.dataTransfer.items;
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);

    for (let i = 0; i < items.length; i++) {
      if (items[i].kind === 'file') {
        const file = items[i].getAsFile();
        const imgURL = URL.createObjectURL(file);
        setDroppedImage(imgURL);
      }
    }
  };

  return (
   <>
   <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="prefetch" as="image" href="/image-256p.webp" type="image/webp" />
        <link rel="prefetch" as="image" href="/image-512p.webp" type="image/webp" /> 
      </Head>
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ border: '2px dashed #000', padding: '20px', textAlign: 'center' }}
    >
      <h2>Drag & Drop Files Here</h2>
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
    <div
    onDragOver={(event) => event.preventDefault()}
    onDrop={handleDrop}
    style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed gray' }}
  >
    {droppedImage ? <img src={droppedImage} alt="Dropped" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : 'Перетягніть зображення сюди'}
  </div>
   </>
  );
}

