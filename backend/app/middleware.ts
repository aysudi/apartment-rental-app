import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const allowedOrigins = ["http://localhost:5173"];
  const origin = req.headers.get("origin");

  if (allowedOrigins.includes(origin || "")) {
    const response = NextResponse.next();

    response.headers.set("Access-Control-Allow-Origin", origin || "");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE"
    );
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
