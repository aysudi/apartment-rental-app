import Cors from "cors";
import { NextRequest, NextResponse } from "next/server";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  origin: "http://localhost:5173",
});

export const runCors = (req: NextRequest) => {
  return new Promise<NextResponse>((resolve, reject) => {
    const res = NextResponse.next();

    cors(req as any, res as any, (result: any) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(res);
      }
    });
  });
};
