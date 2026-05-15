export type ChunkSize =
  | "2048" // 2MB
  | "3072" // 3MB
  | "4096" // 4MB
  | "5120" // 5MB
  | "6144"; // 6MB

export type ChunkStatus = "queued" | "uploading" | "completed" | "failed";

export interface Chunk {
  index: number;
  blob?: Blob;
  start: number;
  end: number;
  size: number;
  status: ChunkStatus;
  hash?: string;
}

export type SplittedFileResult = {
  chunks: Chunk[];
  chunkCount: number;
  chunkSize: number;
  fileSize: number;
};
