import { UploadStatus } from "./types";
import { useState } from "react";

export function useChunkHook() {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async () => {
    setIsLoading(true);
    setStatus("uploading");
    console.log("uploading file");

    setTimeout(() => {
      setStatus("completed");
      setIsLoading(false);
    }, 1000);
  };

  return { uploadFile, status, isLoading };
}
