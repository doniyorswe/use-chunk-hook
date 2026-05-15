import { Chunk, ChunkUploadResponse } from "../types";

export const requestUploadOnChunk = async (
  baseUrl: string,
  fileId: string | number,
  chunk: Chunk,
): Promise<ChunkUploadResponse> => {
  try {
    const body = {
      sessionId: fileId,
      chunkIndex: chunk.index,
      size: chunk.size,
      start: chunk.start,
      end: chunk.end,
    };

    const response = await fetch(`${baseUrl}/upload`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });

    return {
      success: response.ok,
      chunk: {
        ...chunk,
        status: "completed",
      },
    };
  } catch (error) {
    return {
      success: false,
      chunk: {
        ...chunk,
        status: "failed",
      },
    };
  }
};
