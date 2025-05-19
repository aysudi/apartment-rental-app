import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
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
      const booking = await prisma.booking.findUnique({
        where: { id },
        include: { user: true, apartment: true },
      });

      if (!booking) {
        return setCorsHeaders(
          NextResponse.json({ error: "Booking not found" }, { status: 404 })
        );
      }

      return setCorsHeaders(NextResponse.json(booking, { status: 200 }));
    }

    const bookings = await prisma.booking.findMany({
      include: { user: true, apartment: true },
    });

    const res = NextResponse.json(bookings, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
    );
  }
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, apartmentId, startDate, endDate, totalPrice } = body;

    if (!userId || !apartmentId || !startDate || !endDate || !totalPrice) {
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const newBooking = await prisma.booking.create({
      data: {
        user: { connect: { id: userId } },
        apartment: { connect: { id: apartmentId } },
        startDate,
        endDate,
        totalPrice: parseFloat(totalPrice),
        status: "pending",
      },
    });

    const res = NextResponse.json(newBooking, { status: 201 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
    );
  }
}

// Handling OPTIONS (for preflight requests)
export async function OPTIONS(req: Request) {
  const res = NextResponse.json({});
  return setCorsHeaders(res);
}
