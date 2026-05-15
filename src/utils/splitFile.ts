import { Chunk, ChunkSize, SplittedFileResult } from "../types";

export const splitFile = (
  file: File,
  chunkSizeKB: ChunkSize,
): SplittedFileResult => {
  const chunks: Chunk[] = [];

  const chunkSize = Number(chunkSizeKB) * 1024; // KB → bytes
  const fileSize = file.size;

  let start = 0;

  while (start < fileSize) {
    const end = Math.min(start + chunkSize, fileSize);

    chunks.push({
      index: chunks.length,
      blob: file.slice(start, end),
      start,
      end,
      size: end - start,
      status: "queued",
    });

    start = end;
  }

  return {
    chunks,
    chunkCount: chunks.length,
    chunkSize,
    fileSize,
  };
};
