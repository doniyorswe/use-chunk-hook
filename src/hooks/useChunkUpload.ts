import { useState } from "react";
import { UseChunkUploadConfig, UseChunkUploadOptions } from "../types";
import { splitFile } from "../utils/splitFile";
import { uploader } from "../utils/uploader";

const fileId = "1";

export function useChunkUpload(
  url: string,
  _config?: UseChunkUploadConfig,
  options?: UseChunkUploadOptions,
) {
  const { chunkSize = "2048", parallelRequests = 3 } = options || {};

  const [progress, setProgress] = useState(0);

  const upload = async (file: File) => {
    const splitted = splitFile(file, chunkSize);

    await uploader({
      splittedFile: splitted,
      fileId: fileId,
      baseUrl: url,
      parallelRequests,
      onProgress: (progress) => setProgress(progress),
    });
  };

  return { upload, progress };
}
