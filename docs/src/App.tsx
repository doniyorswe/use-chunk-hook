import './App.css';
import { useChunkUpload } from '@/hooks';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState<File | null>(null);

  const { upload, progress } = useChunkUpload('http://localhost:8080', undefined, {
    chunkSize: '2048',
    parallelRequests: 3,
  });

  return (
    <section id="center">

      <div style={{ width: '300px', height: '20px', backgroundColor: '#ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'blue', transition: 'width 0.1s ease' }}></div>
      </div>

      <p>Progress: {progress}%</p>

      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

      <button
        type="button"
        className="counter"
        onClick={() => file && upload(file)}
      >
        Upload
      </button>
    </section>
  )
}

export default App
