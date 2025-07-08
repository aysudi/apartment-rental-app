import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleOptionsRequest, setCorsHeaders } from "@/app/api/cors";

// Preflight CORS
export async function OPTIONS() {
  return handleOptionsRequest();
}

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const apartment = await prisma.apartment.findUnique({
      where: { id },
      include: {
        host: true,
        bookings: true,
        reviews: true,
        wishlistedBy: true,
      },
    });

    if (!apartment) {
      return setCorsHeaders(
        NextResponse.json({ error: "Apartment not found" }, { status: 404 })
      );
    }

    return setCorsHeaders(NextResponse.json(apartment));
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to fetch apartment",
          details: error instanceof Error ? error.message : "Unknown",
        },
        { status: 500 }
      )
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { id } = context.params;

    const existingApartment = await prisma.apartment.findUnique({
      where: { id },
      include: {
        host: true,
        bookings: true,
        reviews: true,
        wishlistedBy: true,
      },
    });
    if (!existingApartment) {
      const res = NextResponse.json(
        { error: "Apartment not found" },
        { status: 404 }
      );
      return setCorsHeaders(res);
    }

    const updatedApartment = await prisma.apartment.update({
      where: { id },
      data: body,
      include: {
        host: true,
        bookings: true,
        reviews: true,
        wishlistedBy: true,
      },
    });

    const res = NextResponse.json(updatedApartment, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    const res = NextResponse.json(
      {
        error: "Failed to update apartment",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
    return setCorsHeaders(res);
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    const existingApartment = await prisma.apartment.findUnique({
      where: { id },
    });

    if (!existingApartment) {
      return setCorsHeaders(
        NextResponse.json({ error: "Apartment not found" }, { status: 404 })
      );
    }

    await prisma.apartment.delete({
      where: { id },
    });

    return setCorsHeaders(
      NextResponse.json(
        { message: "Apartment deleted successfully" },
        { status: 200 }
      )
    );
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to delete apartment",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500 }
      )
    );
  }
}
