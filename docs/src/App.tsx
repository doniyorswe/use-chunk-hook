import './App.css'
import { useChunkHook } from '../../src'

function App() {
  const { status, uploadFile, isLoading } = useChunkHook()

  return (
    <section id="center">

      <button
        type="button"
        className="counter"
        onClick={uploadFile}
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
