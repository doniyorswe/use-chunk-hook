import './App.css';
import { useChunkUpload } from '@/hooks';

function App() {
  const { status, upload, isLoading } = useChunkUpload('https://example.com/upload', {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  }, {
    onStart: () => {
      console.log('Upload started');
    },
    onEnd: () => {
      console.log('Upload ended');
    },
  });

  return (
    <section id="center">
      <button
        type="button"
        className="counter"
        onClick={upload}
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Handle Upload"}
      </button>

      <div>
        <p>Upload Status: {status}</p>
      </div>
    </section>
  )
}

export default App
