import { ErrorResponse } from "@/types";
import { NextResponse } from "next/server";

export function handleError(
  error: unknown,
  status = 500
): NextResponse<ErrorResponse> {
  console.error("API Error:", error);

  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";

  return NextResponse.json({ message: errorMessage }, { status });
}
