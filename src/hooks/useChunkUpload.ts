import { useState } from "react";
import {
  UploadStatus,
  UseChunkUploadConfig,
  UseChunkUploadOptions,
} from "../types";

export function useChunkUpload(
  _url: string,
  _config?: UseChunkUploadConfig,
  options?: UseChunkUploadOptions,
) {
  const { onStart, onEnd } = options || {};

  const [status, setStatus] = useState<UploadStatus>("idle");
  const [isLoading, setIsLoading] = useState(false);

  const upload = async (_payload: unknown, options?: UseChunkUploadOptions) => {
    options?.onStart?.();
    onStart?.();

    setIsLoading(true);
    setStatus("uploading");

    setTimeout(() => {
      setStatus("completed");
      setIsLoading(false);
      onEnd?.();
    }, 1000);
  };

  return { upload, status, isLoading };
}
