import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleOptionsRequest, setCorsHeaders } from "@/app/api/cors";

// Preflight CORS
export async function OPTIONS() {
  return handleOptionsRequest();
}

// GET /api/users/:id or /api/users/:id?email=test@example.com
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        apartments: true,
        bookings: true,
        reviews: true,
        wishlist: true,
      },
    });

    if (!user) {
      return setCorsHeaders(
        NextResponse.json({ error: "User not found" }, { status: 404 })
      );
    }

    return setCorsHeaders(NextResponse.json(user));
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to fetch user",
          details: error instanceof Error ? error.message : "Unknown",
        },
        { status: 500 }
      )
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { id } = params;

    const existingUser = await prisma.user.findUnique({
      where: { id },
      include: {
        apartments: true,
        bookings: true,
        reviews: true,
        wishlist: true,
      },
    });
    if (!existingUser) {
      const res = NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
      return setCorsHeaders(res);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: body,
      include: {
        apartments: true,
        bookings: true,
        reviews: true,
        wishlist: true,
      },
    });

    const res = NextResponse.json(updatedUser, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    const res = NextResponse.json(
      {
        error: "Failed to update user",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
    return setCorsHeaders(res);
  }
}
