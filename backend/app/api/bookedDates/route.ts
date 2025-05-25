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
      const bookedDate = await prisma.bookedDate.findUnique({
        where: { id },
        include: { apartment: true },
      });

      if (!bookedDate) {
        return setCorsHeaders(
          NextResponse.json({ error: "Booking not found" }, { status: 404 })
        );
      }

      return setCorsHeaders(NextResponse.json(bookedDate, { status: 200 }));
    }

    const bookedDates = await prisma.bookedDate.findMany({
      include: { apartment: true },
    });

    const res = NextResponse.json(bookedDates, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        { error: "Failed to fetch booked date" },
        { status: 500 }
      )
    );
  }
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { startDate, apartmentId, endDate } = body;

    if (!startDate || !apartmentId || !endDate) {
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const newBookedDate = await prisma.bookedDate.create({
      data: {
        startDate,
        apartment: { connect: { id: apartmentId } },
        endDate,
      },
    });

    const res = NextResponse.json(newBookedDate, { status: 201 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        { error: "Failed to create booked date" },
        { status: 500 }
      )
    );
  }
}

// Handling OPTIONS (for preflight requests)
export async function OPTIONS(req: Request) {
  const res = NextResponse.json({});
  return setCorsHeaders(res);
}
