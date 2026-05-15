import { AxiosRequestConfig } from "axios";

export type UploadStatus = "idle" | "uploading" | "completed" | "error";

export type UseChunkUploadConfig = AxiosRequestConfig;

export type UseChunkUploadOptions = {
  onSuccess?: () => void;
  onError?: () => void;
  onProgress?: (progress: number) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onChunkSuccess?: (chunkIndex: number) => void;
  onChunkError?: (chunkIndex: number) => void;
  onChunkProgress?: (chunkIndex: number, progress: number) => void;
  onChunkStart?: (chunkIndex: number) => void;
  onChunkEnd?: (chunkIndex: number) => void;
};
