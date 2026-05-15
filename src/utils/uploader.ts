import { ChunkUploadResponse, SplittedFileResult } from "../types";
import { requestUploadOnChunk } from "./requests";

interface UploaderParams {
  baseUrl: string;
  fileId: string | number;
  splittedFile: SplittedFileResult;
  parallelRequests: number;
  onProgress?: (progress: number) => void;
}

export const uploader = async ({
  splittedFile,
  fileId,
  baseUrl,
  parallelRequests,
  onProgress,
}: UploaderParams): Promise<ChunkUploadResponse[]> => {
  let index = 0;
  const results: ChunkUploadResponse[] = [];

  while (index < splittedFile.chunks.length) {
    const parallelChunks = splittedFile.chunks.slice(
      index,
      index + parallelRequests,
    );

    const result = await Promise.all(
      parallelChunks.map((chunk) =>
        requestUploadOnChunk(baseUrl, fileId, chunk),
      ),
    );

    if (result.some((r) => !r.success)) {
      throw new Error("Upload failed");
    }

    results.push(...result);

    index += parallelRequests;

    if (onProgress) {
      onProgress(
        Math.min(100, Math.round((index / splittedFile.chunks.length) * 100)),
      );
    }
  }

  return results;
};
