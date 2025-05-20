import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const setCorsHeaders = (res: NextResponse) => {
  res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return res;
};

// GET
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const review = await prisma.review.findUnique({
        where: { id },
        include: { user: true, apartment: true },
      });

      if (!review) {
        return setCorsHeaders(
          NextResponse.json({ error: "Review not found" }, { status: 404 })
        );
      }

      return setCorsHeaders(NextResponse.json(review, { status: 200 }));
    }

    const reviews = await prisma.review.findMany({
      include: { user: true, apartment: true },
    });

    const res = NextResponse.json(reviews, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
    );
  }
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, apartmentId, rating, comment } = body;

    if (!userId || !apartmentId || !rating || !comment) {
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const newBooking = await prisma.review.create({
      data: {
        user: { connect: { id: userId } },
        apartment: { connect: { id: apartmentId } },
        rating,
        comment,
      },
    });

    const res = NextResponse.json(newBooking, { status: 201 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to create review" }, { status: 500 })
    );
  }
}

// Handling OPTIONS (for preflight requests)
export async function OPTIONS(req: Request) {
  const res = NextResponse.json({});
  return setCorsHeaders(res);
}
