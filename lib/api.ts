// Base URL of the Visit-Card--Backend API (see NEXT_PUBLIC_API_URL in .env.example).
// Defaults to the local Spring Boot dev server since this is a static export with no
// server runtime of its own (see CLAUDE.md).
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:8080";

export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  fieldErrors?: Record<string, string> | null;
}

export async function parseApiError(response: Response, fallback: string): Promise<string> {
  try {
    const data: ApiError = await response.json();
    return data.message || fallback;
  } catch {
    return fallback;
  }
}
