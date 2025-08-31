import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleOptionsRequest, setCorsHeaders } from "@/app/api/cors";

// Preflight CORS
export async function OPTIONS() {
  return handleOptionsRequest();
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        apartment: true,
        bookedDates: true,
      },
    });

    if (!booking) {
      return setCorsHeaders(
        NextResponse.json({ error: "Booking not found" }, { status: 404 })
      );
    }

    return setCorsHeaders(NextResponse.json(booking));
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to fetch booking",
          details: error instanceof Error ? error.message : "Unknown",
        },
        { status: 500 }
      )
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const { id } = await params;

    const existingBooking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        apartment: true,
        bookedDates: true,
      },
    });
    if (!existingBooking) {
      const res = NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
      return setCorsHeaders(res);
    }

    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: body,
      include: {
        user: true,
        apartment: true,
        bookedDates: true,
      },
    });

    const res = NextResponse.json(updatedBooking, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    const res = NextResponse.json(
      {
        error: "Failed to update booking",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
    return setCorsHeaders(res);
  }
}
