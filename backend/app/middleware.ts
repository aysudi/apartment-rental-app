// import { NextResponse } from "next/server";

// export function middleware(req: Request) {
//   const allowedOrigins = ["http://localhost:5173"];
//   const origin = req.headers.get("origin");

//   if (req.method === "OPTIONS") {
//     const response = NextResponse.next();
//     response.headers.set(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, PATCH"
//     );
//     response.headers.set("Access-Control-Allow-Origin", origin || "*");
//     response.headers.set(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );

//     return response;
//   }

//   if (allowedOrigins.includes(origin || "")) {
//     const response = NextResponse.next();
//     response.headers.set("Access-Control-Allow-Origin", origin || "*");
//     response.headers.set(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, PATCH"
//     );
//     response.headers.set(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );

//     return response;
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };
