import { ChunkSize } from "./chunk";
import { Chunk } from "./chunk";

export type UploadStatus = "idle" | "uploading" | "completed" | "error";

export type UseChunkUploadConfig = RequestInit;

export type UseChunkUploadOptions = {
  chunkSize?: ChunkSize;
  parallelRequests?: number;
};

export type ChunkUploadResponse = {
  success: boolean;
  chunk: Chunk;
};
